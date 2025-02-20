import React, { useState } from "react";
import { tryOnWithAutoMask } from "../../../api/autoMaskApi";
import TryOnPreview from "../../../components/TryOnPreview";
import { ImageUploadDemo } from "../../../components/ImageUpload";

export default function AutoMaskPage() {
  const [humanFile, setHumanFile] = useState<File | null>(null);
  const [garmentFile, setGarmentFile] = useState<File | null>(null);
  const [clothType, setClothType] = useState("overall");
  const [blur, setBlur] = useState(2);
  const [grow, setGrow] = useState(25);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progressMessage, setProgressMessage] = useState("");

  const handleTryOn = async () => {
    if (!humanFile || !garmentFile) {
      alert("Please select both images.");
      return;
    }
    setIsLoading(true);
    try {
      const result = await tryOnWithAutoMask(
        {
          humanImage: humanFile,
          garmentImage: garmentFile,
          clothType,
          blur,
          grow,
        },
        (status: string) => setProgressMessage(status)
      );
      setResultImage(result);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#030303] py-20 page-padding-x relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.05] via-transparent to-pink-500/[0.05] blur-3xl" />
      <div className="relative z-10 max-w-screen-xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl tracking-tighter font-regular mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-white/90 to-pink-500">
          Auto Mask Virtual Try-On
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
            onClick={handleTryOn}
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
              {progressMessage || "Processing..."}
            </p>
          </div>
        )}

        <TryOnPreview resultImage={resultImage || ""} />
      </div>
    </div>
  );
}
