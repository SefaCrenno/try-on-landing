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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div>
              <div className="inline-flex gap-2 bg-[#030303] rounded-lg p-1">
                <Badge className="bg-gradient-to-r from-purple-600/80 to-purple-500/80 hover:from-purple-500/90 hover:to-purple-400/90 text-white/90 transition-all duration-300">
                  Android
                </Badge>
                <Badge className="bg-gradient-to-r from-pink-600/80 to-pink-500/80 hover:from-pink-500/90 hover:to-pink-400/90 text-white/90 transition-all duration-300">
                  iOS
                </Badge>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Unveiling Trends, Insights, and Innovation
                </span>
              </h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-white">
                Explore the latest updates, expert perspectives, and
                groundbreaking ideas shaping the future. Stay informed, stay
                inspired, and stay ahead.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex justify-center items-center">
            <div
              className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[768px] max-w-[1024px] overflow-hidden rounded-2xl select-none border border-primary-purple/20"
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
