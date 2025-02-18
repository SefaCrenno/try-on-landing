import { useState, useEffect, useRef } from "react";
import { Badge } from "./badge";
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

      setInset(position);

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
          setInset(finalPosition);

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
        setInset(easedInset);
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
    setInset(percentage);
  };

  return (
    <div
      className="w-full bg-dark py-20 lg:py-40 page-padding-x"
      ref={componentRef}
    >
      <div className="w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div>
              <div className="inline-flex gap-2 bg-dark rounded-lg p-1">
                <Badge className="bg-gradient-to-r from-purple-600/80 to-purple-500/80 hover:from-purple-500/90 hover:to-purple-400/90 text-white/90 transition-all duration-300">
                  Android
                </Badge>
                <Badge className="bg-gradient-to-r from-pink-600/80 to-pink-500/80 hover:from-pink-500/90 hover:to-pink-400/90 text-white/90 transition-all duration-300">
                  iOS
                </Badge>
              </div>
            </div>
            <div className="flex gap-2 flex-col" ref={ref}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    No More Guesswork <br></br>
                    See It, Wear It with Luuls AI
                  </span>
                </h2>
              </motion.div>
              <p className="text-basic mt-5">
                <b>Realistic. Instant. Smart.</b> With Luuls AI’s virtual try-on
                feature, <b>wear it without actually wearing it! </b>Trying on
                clothes is no longer a time-consuming process – just upload a
                photo, let our intelligent AI model do the magic, and see how
                your favorite outfits look on you in seconds. Make the right
                choice with confidence, effortlessly.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex justify-end items-center">
            <div
              className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[768px] max-w-[1024px] overflow-hidden rounded-2xl select-none border border-primary-purple/20"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              {/* Before/After Labels */}
              <div className="absolute top-0 left-0 right-0 z-40 flex justify-between p-4 pointer-events-none">
                <div className="bg-gradient-to-r from-purple-600/80 to-purple-500/80 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm">
                  Before
                </div>
                <div className="bg-gradient-to-r from-pink-600/80 to-pink-500/80 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm">
                  After
                </div>
              </div>

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
