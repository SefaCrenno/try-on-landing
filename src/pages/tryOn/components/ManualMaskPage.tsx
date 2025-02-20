import React, { useState, useRef, useEffect } from "react";
import { tryOnWithManualMask } from "../../../api/manualMaskApi";
import TryOnPreview from "../../../components/TryOnPreview";
import { ImageUploadDemo } from "../../../components/ImageUpload";
import { Button } from "../../../components/ui/button";
import { Upload, Trash2 } from "lucide-react";

const ManualMaskPage = () => {
  const [humanFile, setHumanFile] = useState<File | null>(null);
  const [garmentFile, setGarmentFile] = useState<File | null>(null);
  const [maskImage, setMaskImage] = useState<Blob | null>(null);
  const [clothType, setClothType] = useState("overall");
  const [blur, setBlur] = useState(2);
  const [grow, setGrow] = useState(25);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [brushSize, setBrushSize] = useState(20);
  const [brushColor, setBrushColor] = useState("#ff0000");
  const [isEraser, setIsEraser] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [progressMessage, setProgressMessage] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hiddenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Cleanup object URLs to prevent memory leaks
    return () => {
      if (humanFile) {
        URL.revokeObjectURL(URL.createObjectURL(humanFile));
      }
      if (garmentFile) {
        URL.revokeObjectURL(URL.createObjectURL(garmentFile));
      }
    };
  }, [humanFile, garmentFile]);

  const getCanvasCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX = 0;
    let clientY = 0;

    if ("touches" in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ("clientX" in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const coords = getCanvasCoordinates(e);
    const ctx = canvasRef.current?.getContext("2d");
    const hiddenCtx = hiddenCanvasRef.current?.getContext("2d");

    if (ctx && hiddenCtx) {
      ctx.beginPath();
      ctx.moveTo(coords.x, coords.y);

      hiddenCtx.beginPath();
      hiddenCtx.moveTo(coords.x, coords.y);

      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing) return;
    const coords = getCanvasCoordinates(e);

    const ctx = canvasRef.current?.getContext("2d");
    const hiddenCtx = hiddenCanvasRef.current?.getContext("2d");

    if (ctx && hiddenCtx) {
      ctx.globalCompositeOperation = isEraser
        ? "destination-out"
        : "source-over";
      ctx.strokeStyle = isEraser ? "rgba(0,0,0,1)" : brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();

      hiddenCtx.globalCompositeOperation = "source-over";
      hiddenCtx.strokeStyle = isEraser ? "black" : "white";
      hiddenCtx.lineWidth = brushSize;
      hiddenCtx.lineCap = "round";
      hiddenCtx.lineTo(coords.x, coords.y);
      hiddenCtx.stroke();
    }
  };

  const stopDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (isDrawing) {
      const ctx = canvasRef.current?.getContext("2d");
      const hiddenCtx = hiddenCanvasRef.current?.getContext("2d");

      if (ctx && hiddenCtx) {
        ctx.closePath();
        hiddenCtx.closePath();
      }

      setIsDrawing(false);

      hiddenCanvasRef.current?.toBlob((blob) => {
        setMaskImage(blob);
      });
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const hiddenCanvas = hiddenCanvasRef.current;
    const ctx = canvas?.getContext("2d");
    const hiddenCtx = hiddenCanvas?.getContext("2d");

    if (ctx && hiddenCtx && canvas && hiddenCanvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hiddenCtx.fillStyle = "black";
      hiddenCtx.fillRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);

      hiddenCanvas.toBlob((blob) => {
        setMaskImage(blob);
      });
    }
  };

  const handleSubmit = async () => {
    if (!humanFile || !garmentFile || !maskImage) {
      alert("Please upload both images and create a mask.");
      return;
    }

    setIsLoading(true);
    try {
      const result = await tryOnWithManualMask(
        {
          humanImage: humanFile,
          garmentImage: garmentFile,
          maskImage,
          clothType,
          blur,
          grow,
        },
        (status: string) => setProgressMessage(status)
      );
      setResultImage(result);
    } catch (error: {
      message: string;
    }) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#030303] py-20 px-4 relative select-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.05] via-transparent to-pink-500/[0.05] blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-screen-xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl tracking-tighter font-regular mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-white/90 to-pink-500">
          Manual Mask Virtual Try-On
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-white mb-3">Human Image</h3>
            <ImageUploadDemo
              onUpload={(url, file) => {
                setHumanFile(file || null);
              }}
            />
          </div>
          <div>
            <h3 className="text-xl text-white mb-3">Garment Image</h3>
            <ImageUploadDemo
              onUpload={(url, file) => {
                setGarmentFile(file || null);
              }}
            />
          </div>
        </div>

        {/* Mask Drawing Section */}
        {humanFile && (
          <div className="mt-8 bg-white/5 p-6 rounded-xl border border-purple-600/20">
            <h3 className="text-xl text-white mb-3">Create Mask</h3>
            <div
              className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video"
              ref={imageContainerRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseOut={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              onTouchCancel={stopDrawing}
            >
              {humanFile && (
                <>
                  <img
                    src={URL.createObjectURL(humanFile)}
                    alt="Human"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                  <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full cursor-crosshair z-10"
                    draggable={false}
                  />
                  <canvas ref={hiddenCanvasRef} style={{ display: "none" }} />
                </>
              )}
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div>
                <label className="block text-white mb-1">
                  Brush Size: {brushSize}
                </label>
                <input
                  type="range"
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  min="1"
                  max="50"
                  className="w-full h-2 bg-purple-200/40 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block text-white mb-1">Brush Color:</label>
                <input
                  type="color"
                  value={brushColor}
                  onChange={(e) => setBrushColor(e.target.value)}
                  disabled={isEraser}
                  className="w-10 h-10 p-0 border-none cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={isEraser ? "outline" : "secondary"}
                  onClick={() => setIsEraser(!isEraser)}
                  className="px-4 py-2 text-white"
                >
                  {isEraser ? "🧹 Eraser" : "🖌️ Brush"}
                </Button>
                <Button
                  variant="destructive"
                  onClick={clearCanvas}
                  className="px-4 py-2 text-white"
                >
                  🗑️ Clear
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-white/5 p-6 rounded-xl border border-purple-600/20">
          <div className="mb-6 text-white">
            <label className="mr-2 font-medium">Cloth Type:</label>
            <select
              value={clothType}
              onChange={(e) => setClothType(e.target.value)}
              className="px-3 py-2 text-white rounded-md bg-purple-200/40"
            >
              <option value="overall">Overall</option>
              <option value="upper">Upper</option>
              <option value="lower">Lower</option>
            </select>
          </div>

          <div className="mb-6 text-white">
            <label className="mr-2 font-medium">Blur: {blur}</label>
            <input
              type="range"
              value={blur}
              onChange={(e) => setBlur(Number(e.target.value))}
              min="0"
              max="10"
              step="0.1"
              className="w-full h-2 bg-purple-200/40 rounded-lg outline-none"
            />
          </div>

          <div className="mb-6 text-white">
            <label className="mr-2 font-medium">Grow: {grow}</label>
            <input
              type="range"
              value={grow}
              onChange={(e) => setGrow(Number(e.target.value))}
              min="0"
              max="50"
              step="1"
              className="w-full h-2 bg-pink-200/40 rounded-lg outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 px-8 rounded hover:scale-105 transition-transform disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Processing..." : "Try On"}
          </button>
        </div>

        {isLoading && (
          <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50">
            <div className="w-10 h-10 mb-4 border-4 border-white/20 border-t-pink-500 rounded-full animate-spin" />
            <p className="font-medium text-white">
              {progressMessage || "Processing your images..."}
            </p>
          </div>
        )}

        <TryOnPreview resultImage={resultImage || ""} />
      </div>
    </div>
  );
};

export default ManualMaskPage;
