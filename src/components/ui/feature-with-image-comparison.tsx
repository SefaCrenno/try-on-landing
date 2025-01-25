import { useState } from "react";
import { Badge } from "./badge";
import { GripVertical } from "lucide-react";

function Feature() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full bg-[#030303] py-20 lg:py-40 page-padding-x">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.05] via-transparent to-pink-500/[0.05] blur-3xl" />
      <div className="w-full relative z-10">
        <div className="flex gap-4">
          <div className="w-1/3 flex flex-col gap-4">
            <div>
              <Badge className="bg-primary-purple hover:bg-primary-purple/90 text-white">
                Platform
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-white/90 to-pink-500">
                Something new!
              </h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-white">
                Managing a small business today is already tough.
              </p>
            </div>
          </div>

          <div className="pt-12 w-2/3">
            <div
              className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-2xl select-none border border-primary-purple/20"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="w-0.5 bg-black h-full absolute z-20 top-0 -ml-1 select-none "
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:scale-110 transition-all w-8 h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-3.5 z-30 cursor-ew-resize flex justify-center items-center shadow-lg shadow-primary-purple"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 text-white select-none" />
                </button>
              </div>
              <img
                src="/images/initial.jpg"
                alt="feature8"
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
              <img
                src="/images/result.jpeg"
                alt="darkmode-feature8.png"
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none"
                style={{
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
