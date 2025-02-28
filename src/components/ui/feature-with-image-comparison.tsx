import { useState, useEffect, useRef } from "react";
import { GripVertical } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Feature() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastScrollY = useRef<number>(window.scrollY);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Easing functions
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  // Initial animation setup
  const startInitialAnimation = () => {
    if (hasAnimated) return; // Only run once
    setHasAnimated(true);

    let startTime: number | null = null;
    const animationDuration = 3000; // 3 seconds
    const cycleCount = 2; // Number of full cycles

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      // Create a sine wave pattern with easing
      const cycle = progress * cycleCount * Math.PI * 2;
      const sineValue = Math.sin(cycle);
      const easedProgress = easeInOutCubic(progress);

      // Combine sine wave with easing for smooth back-and-forth
      const position = 50 + sineValue * 20 * (1 - easedProgress);

      setInset(getBoundedInset(position));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Smoothly return to center
        const returnToCenter = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const returnElapsed = timestamp - startTime;
          const returnProgress = Math.min(returnElapsed / 500, 1); // 500ms to return

          const finalPosition =
            50 + (position - 50) * (1 - easeOutExpo(returnProgress));
          setInset(getBoundedInset(finalPosition));

          if (returnProgress < 1) {
            animationRef.current = requestAnimationFrame(returnToCenter);
          }
        };

        startTime = null;
        animationRef.current = requestAnimationFrame(returnToCenter);
      }
    };

    // Start animation after a short delay
    const startDelay = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 200); // Reduced delay to 200ms since we're already waiting for visibility

    return () => {
      clearTimeout(startDelay);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  };

  const getBoundedInset = (calculate: number) => {
    //min return value is 5, max return value is 95
    if (calculate > 95) return 95;
    if (calculate < 5) return 5;
    return calculate;
  };

  // Intersection Observer setup
  useEffect(() => {
    if (!componentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startInitialAnimation();
          }
        });
      },
      {
        threshold: 0.5, // Start when component is 50% visible
      }
    );

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasAnimated]);

  // Enhanced scroll-based animation
  useEffect(() => {
    const handleScroll = () => {
      if (!componentRef.current || onMouseDown) return;

      const rect = componentRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? 1 : -1;
      lastScrollY.current = currentScrollY;

      // Calculate visibility progress (0 when entering, 1 when fully visible, 2 when leaving)
      const visibilityProgress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);

      if (visibilityProgress >= 0 && visibilityProgress <= 2) {
        let targetInset;

        if (scrollDirection > 0) {
          // Scrolling down
          // Accelerate towards right (100) as element leaves viewport
          // if (visibilityProgress > 1) {
          //   const exitProgress = visibilityProgress - 1; // 0 to 1 as element exits
          //   targetInset = 60 + exitProgress * 40; // Accelerate from 60 to 100
          //   console.log("targetInset1", targetInset);
          // } else {
          targetInset = 50 + visibilityProgress * 50; // Normal range from 40 to 60"
          // }
        } else {
          // Scrolling up
          // Accelerate towards left (0) as element leaves viewport upwards
          if (visibilityProgress < 1) {
            const entryProgress = visibilityProgress; // 0 to 1 as element enters
            targetInset = 40 * entryProgress; // Accelerate from 0 to 40
          } else {
            targetInset = 40 + (2 - visibilityProgress) * 20; // Normal range from 60 to 40
          }
        }

        // Apply easing to the movement
        const currentInset = inset;
        const easedInset = currentInset + (targetInset - currentInset) * 0.1;
        setInset(getBoundedInset(easedInset));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inset, onMouseDown]);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    // Clear the auto-animation if user interacts
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(getBoundedInset(percentage));
  };

  return (
    <div className="w-full bg-background py-20" ref={componentRef}>
      <div className="w-full relative z-10">
        <div className="flex flex-col gap-5 justify-center lg:gap-4">
          <div className="w-full flex flex-col gap-4 page-padding-x">
            <div
              className="flex gap-2 flex-col w-full text-center max-w-3xl mx-auto"
              ref={ref}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    No More Guesswork <br></br>
                    See It, Wear It with{" "}
                    <span className="luuls-white">Luuls AI</span>
                  </span>
                </h2>
              </motion.div>
              <p className="text-basic mt-5">
                <b>Realistic. Instant. Smart.</b> With{" "}
                <span className="luuls-gradient font-semibold">Luuls AI</span>'s
                virtual try-on feature,{" "}
                <b>wear it without actually wearing it! </b>
                Trying on clothes is no longer a time-consuming process – just
                upload a photo, let our intelligent AI model do the magic, and
                see how your favorite outfits look on you in seconds. Make the
                right choice with confidence, effortlessly.
              </p>
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto flex justify-center items-center h-full mt-10">
            <div className="translate-x-1/2 -translate-y-4 rotate-[-30deg] w-full max-w-[140px] md:max-w-[250px] aspect-[9/19.5] select-none">
              <img
                src="/screenshots/left-portrait.png"
                alt="feature8"
                className="absolute left-0 top-0 z-10 h-full w-full object-contain select-none"
              />
            </div>

            <div
              className="z-[1] relative w-full max-w-[170px] md:max-w-[285px] aspect-[9/19.5] overflow-hidden select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              {/* Before/After Labels */}
              <div className="absolute top-7 md:top-12 left-0 right-0 z-40 flex justify-between px-4 md:px-5 pointer-events-none">
                <div className="bg-gradient-to-r from-purple-600/80 to-purple-500/80 text-white px-1 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium shadow-lg backdrop-blur-sm">
                  Before
                </div>
                <div className="bg-gradient-to-r from-pink-600/80 to-pink-500/80 text-white px-1 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium shadow-lg backdrop-blur-sm">
                  After
                </div>
              </div>

              {/* Middle Line and Button */}
              <div
                className="w-0.5 bg-white/20 h-[91.5%] lg:h-[91.5%] absolute z-20 top-3 sm:top-4 lg:top-6 -ml-[1px] select-none"
                style={{
                  left: inset + "%",
                }}
              >
                {/* Middle Button */}
                <button
                  className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:scale-110 transition-all w-6 h-6 md:w-8 md:h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-[11px] md:-ml-[14px] z-30 cursor-ew-resize flex justify-center items-center shadow-lg shadow-primary-purple/50"
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
                  <GripVertical className="h-3 w-3 md:h-4 md:w-4 text-white select-none" />
                </button>
              </div>

              <img
                src="/screenshots/initial-portrait.png"
                alt="feature8"
                className="absolute left-0 top-0 z-10 h-full w-full object-contain select-none"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />

              <img
                src="/screenshots/result-portrait.png"
                alt="darkmode-feature8.png"
                className="absolute left-0 top-0 h-full w-full object-contain select-none"
                style={{
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </div>

            <div className="-translate-x-1/2 -translate-y-4 rotate-[30deg] w-full max-w-[140px] md:max-w-[250px] aspect-[9/19.5] select-none">
              <img
                src="/screenshots/right-portrait.png"
                alt="feature8"
                className="absolute left-0 top-0 z-10 h-full w-full object-contain select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
