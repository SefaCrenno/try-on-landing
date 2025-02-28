import { motion } from "framer-motion";
import { TextShimmer } from "./text-shimmer";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import { TextGenerateEffect } from "./text-generate";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "See Your Look Before You Commit",
      description: (
        <p>
          With <span className="luuls-gradient font-bold">Luuls AI</span>, you
          no longer have to guess how clothes will look on you. See your style
          come to life instantly with our AI-powered try-on technology. Upload
          your photo, select the outfit, and watch as it's perfectly fitted on
          your virtual self. No more second-guessing—make confident shopping
          decisions with the ultimate virtual fitting room.
        </p>
      ),
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-6 border border-purple-600/20 group hover:bg-purple-600/[0.015] transition-colors",
    },
    {
      title: "See Yourself in Any Career with AI Face Swap",
      description: (
        <p>
          Step into any profession with{" "}
          <span className="luuls-gradient font-bold">Luuls AI</span>'s face swap
          technology. Whether you're imagining a new career or just having fun
          with professional roles, our AI lets you seamlessly swap faces into
          various job roles, from doctors to astronauts, and everything in
          between. Explore the possibilities, and see yourself in any job,
          instantly.
        </p>
      ),
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 md:col-span-6 border-b border-x border-purple-600/20 hover:bg-purple-600/[0.015] transition-colors",
    },
    {
      title: "Unleash Your Imagination with AI-Generated Art",
      description: (
        <p>
          <span className="luuls-gradient font-bold">Luuls AI</span> takes your
          creativity to the next level. With AI-powered prompts, you can
          generate unique images and visuals based on your ideas. Whether you're
          designing for personal use or business, our AI model brings your
          concepts to life instantly, with limitless potential for creation.
        </p>
      ),
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-6 border-b border-x border-purple-600/20 group hover:bg-purple-600/[0.015] transition-colors",
    },
    {
      title: "One Photo, One Dream, A Brand New You!",
      description: (
        <p>
          Want to see yourself the way you've always dreamed? With{" "}
          <span className="luuls-gradient font-bold">Luuls AI</span>, it's easy!
          Upload your photo, describe your ideal look, and see yourself appear
          in a completely different version. It's the perfect blend of
          imagination and reality.
        </p>
      ),
      skeleton: <SkeletonFour />,
      className:
        "col-span-1 md:col-span-6 border-b border-x border-purple-600/20 group hover:bg-purple-600/[0.015] transition-colors",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="relative py-20 page-padding-x max-component-width">
      <div className="mb-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-6xl font-bold max-w-3xl mx-auto text-center tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-balance">
              More Than Just Try-On
              <br />
              Unlock AI-Powered Possibilities
            </span>
          </h2>

          <p className="text-basic text-center max-w-3xl mx-auto mt-6">
            <b>
              <span className="luuls-gradient">Luuls AI</span> isn't just about
              trying on clothes – it's about transforming your entire visual
              identity.
            </b>{" "}
            Whether you want to experiment with new outfits, see yourself in
            different professional roles, or generate stunning AI-powered
            visuals,{" "}
            <span className="luuls-gradient font-semibold">Luuls AI</span>{" "}
            brings the future of digital styling to your fingertips.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:border rounded-2xl border-purple-600/20 bg-gradient-to-b from-purple-600/[0.05] via-transparent to-pink-500/[0.05]">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-fit w-full mt-6">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-6 sm:p-10 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return <h3 className="small-title-basic">{children}</h3>;
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return <span className="text-basic mt-5">{children}</span>;
};

export const SkeletonOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      className="relative flex py-8 px-2 gap-10  transition-transform duration-300"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex max-lg:flex-col gap-8 p-5 mx-auto bg-custom-dark shadow-2xl h-full border border-purple-600/20 rounded-xl">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 min-h-[300px] h-full relative group overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <img
              src="/images/try-on-banner.png"
              alt="Try-on Preview"
              className="h-full w-full object-contain object-center rounded-lg transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-purple-600/80 to-pink-500/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm text-sm">
                AI-Powered Virtual Try-On
              </div>
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 text-white">
            <h3 className="small-sub-title-basic">
              Why Try-On with <span className="luuls-white">Luuls AI</span> ?
            </h3>
            <p className="text-basic">
              Finding the perfect outfit has never been easier. With AI-powered
              try-on technology, you can see how different styles fit you before
              making a decision. No more uncertainty – just confidence in every
              look.
            </p>
            <ul className="space-y-2 text-basic">
              {[
                {
                  title: "Realistic",
                  desc: "AI-enhanced precision for lifelike results.",
                },
                {
                  title: "Instant Previews",
                  desc: "See outfits on yourself in seconds.",
                },
                {
                  title: "Endless Styles",
                  desc: "Try out as many outfits as you like, risk-free.",
                },
                {
                  title: "Share with Friends",
                  desc: "Get opinions from friends by sharing virtual try-on results.",
                },
                {
                  title: "Use Anywhere, Anytime",
                  desc: "Access the try-on feature on your phone or computer anytime.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-3.5" />
                  <p className="">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const images = [
    "/images/face_swap/astronaut.png",
    "/images/face_swap/doctor.png",
    "/images/face_swap/rock_star.png",
    "/images/face_swap/chef.png",
    "/images/face_swap/dentist.png",
    "/images/face_swap/ceo.png",
    "/images/face_swap/engineer.png",
    "/images/face_swap/fighter_pilot.png",
    "/images/face_swap/firefighter.png",
    "/images/face_swap/holywood.png",
    "/images/face_swap/judge.png",
    "/images/face_swap/pop_star.png",
  ];

  return (
    <div
      className="relative w-full h-[240px] md:h-[440px] overflow-hidden"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={false}
          className="h-full py-4"
        >
          <div className="flex gap-6 h-full px-3">
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ rotate: Math.random() * 20 - 10 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                className="relative h-[200px] w-[200px] md:h-80 md:w-80 p-2 shrink-0 rounded-xl overflow-hidden bg-custom-dark border border-purple-600/20 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />
                <img
                  src={image}
                  alt={`Style ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </Marquee>
      </motion.div>
    </div>
  );
};

export const SkeletonThree = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [generationPhase, setGenerationPhase] = useState<
    "generating" | "success"
  >("generating");

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setGenerationPhase("success");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full h-full mx-auto bg-transparent">
      <div className="flex flex-col space-y-5">
        <TextGenerateEffect
          words='"A mesmerizing sorceress, standing in the center of an enchanted, otherworldly garden suspended in the sky. Her face, delicate and radiant, glows with violet and pink undertones, her eyes shimmering with an ancient, cosmic knowledge. A flowing, holographic cloak surrounds her, shifting between purple and pink hues, trailing behind her like the tail of a comet. Behind her, the garden is alive with bioluminescent plants that radiate soft, glowing colors, and in the distance, distant stars and nebulae stretch across the horizon, their light blending into the surreal landscape. Her hands are raised, summoning magic that dances through the air, casting flickering, holographic spells of light across the celestial sky."'
          className="text-base md:text-lg font-light text-white"
          duration={0.5}
          play={inView}
        />

        {/* Image Generation Area */}
        <div className="relative w-full  max-h-[960px] rounded-xl overflow-hidden">
          <div className=" inset-0 bg-custom-dark flex">
            <div className="w-full max-w-[800px] mx-auto">
              <motion.img
                src="/images/prompt_generation2.png"
                alt="AI Generated Image"
                className="w-full object-contain relative rounded-lg aspect-[4/3]"
                initial={{
                  filter: "blur(40px)",
                  scale: 0.9,
                }}
                animate={
                  inView
                    ? {
                        filter: "blur(0px)",
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 5,
                  ease: "anticipate",
                }}
              />

              <motion.div
                className="flex items-center justify-center gap-2 mt-5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                {generationPhase === "generating" ? (
                  <>
                    <div className="h-2 w-32 bg-purple-600/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : {}}
                        transition={{
                          duration: 3.5,
                          repeat: 0,
                          delay: 0.5,
                          repeatType: "reverse",
                        }}
                      />
                    </div>
                    <TextShimmer className="text-sm">
                      Generating your image...
                    </TextShimmer>
                  </>
                ) : (
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Success Animation */}
                    <motion.div
                      className="relative w-8 h-8"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-25"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5 }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </motion.div>

                    {/* Success Text */}
                    <motion.div
                      className="flex flex-col items-center gap-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-sm font-medium text-white">
                        Generation Complete!
                      </span>
                      <span className="text-xs text-gray-400">
                        AI has crafted your perfect style
                      </span>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// it is an alternative version of the fourth skeleton
export const SkeletonFourv1 = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (inView) {
      // Animation timeline
      const timeline = [
        () => setAnimationPhase(1), // Show prompt and image
        () => setAnimationPhase(2), // Move to center
        () => setAnimationPhase(3), // Magic animation
        () => setAnimationPhase(4), // Show result
      ];

      // Execute timeline with delays
      timeline.forEach((action, index) => {
        setTimeout(action, (index + 1) * 2000);
      });
    }
  }, [inView]);

  // Sample prompt text
  const promptText = "Transform me into a rock star with stage lighting";

  return (
    <div ref={ref} className="w-full h-full mx-auto bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto"
      >
        <div className="relative w-full rounded-xl overflow-hidden bg-custom-dark border border-purple-600/20 p-6 min-h-[500px]">
          {/* Magic stage */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Background gradient that intensifies during magic phase */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"
              animate={{
                opacity: animationPhase === 3 ? 0.5 : 0.1,
                background:
                  animationPhase === 3
                    ? "radial-gradient(circle at center, rgba(168, 85, 247, 0.3), rgba(0, 0, 0, 0) 70%)"
                    : "radial-gradient(circle at center, rgba(168, 85, 247, 0.1), rgba(0, 0, 0, 0) 70%)",
              }}
              transition={{ duration: 1 }}
            />

            {/* Magic particles that appear during transformation */}
            {animationPhase >= 3 && (
              <>
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{
                      x: "50%",
                      y: "50%",
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      x: `${35 + Math.random() * 30}%`,
                      y: `${35 + Math.random() * 30}%`,
                      opacity: [0, 0.8, 0],
                      scale: [0, 1 + Math.random(), 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: animationPhase === 3 ? 1 : 0,
                      delay: Math.random() * 0.5,
                    }}
                  />
                ))}
              </>
            )}
          </div>

          {/* Main content container */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            {/* Title */}
            <motion.h3
              className="text-white text-xl font-medium mb-10 text-center"
              animate={{
                opacity:
                  animationPhase === 0 ? 1 : animationPhase < 4 ? 0.3 : 1,
                y: animationPhase === 0 ? 0 : animationPhase < 4 ? -20 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              AI Transformation Magic
            </motion.h3>

            <div className="w-full flex flex-col items-center">
              {/* Input elements container */}
              <div className="relative w-full flex justify-between items-center h-64 mb-10">
                {/* Left side - Prompt text */}
                <motion.div
                  className="w-2/5 h-full flex flex-col justify-center items-start"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{
                    x:
                      animationPhase >= 1
                        ? animationPhase >= 2
                          ? "30%"
                          : 0
                        : -100,
                    opacity: animationPhase >= 1 ? 1 : 0,
                    scale: animationPhase >= 2 ? 0.8 : 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-purple-600/30 w-full max-w-xs">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-purple-600 mr-2" />
                      <span className="text-purple-300 text-xs font-medium">
                        PROMPT
                      </span>
                    </div>

                    <div className="text-white text-sm font-light">
                      {animationPhase >= 1 && (
                        <TextGenerateEffect
                          words={promptText}
                          className="text-sm text-white"
                          duration={0.05}
                          play={animationPhase === 1}
                        />
                      )}
                    </div>
                  </div>

                  {/* Arrow pointing to center during phase 2 */}
                  {animationPhase >= 2 && animationPhase < 4 && (
                    <motion.div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <svg
                        className="w-8 h-8 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>

                {/* Center - Magic happens here */}
                <motion.div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  animate={{
                    scale: animationPhase === 3 ? [1, 1.2, 1] : 0,
                    opacity: animationPhase === 3 ? [0, 1, 0] : 0,
                  }}
                  transition={{ duration: 2 }}
                >
                  {animationPhase === 3 && (
                    <div className="relative w-32 h-32">
                      {/* Pulsing circles */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-600"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.8, 0, 0.8],
                          rotate: 360,
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          times: [0, 0.5, 1],
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-pink-500"
                        animate={{
                          scale: [1.2, 1, 1.2],
                          opacity: [0, 0.8, 0],
                          rotate: -360,
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          times: [0, 0.5, 1],
                        }}
                      />

                      {/* Central glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-md"
                        animate={{
                          opacity: [0, 0.7, 0],
                        }}
                        transition={{ duration: 2 }}
                      />

                      {/* Magic icon */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.2, 0.5],
                        }}
                        transition={{ duration: 2 }}
                      >
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                {/* Right side - Original image */}
                <motion.div
                  className="w-2/5 h-full flex flex-col justify-center items-end"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{
                    x:
                      animationPhase >= 1
                        ? animationPhase >= 2
                          ? "-30%"
                          : 0
                        : 100,
                    opacity: animationPhase >= 1 ? 1 : 0,
                    scale: animationPhase >= 2 ? 0.8 : 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative rounded-lg overflow-hidden border border-purple-600/30 w-full max-w-xs h-48 bg-gray-900/80 backdrop-blur-sm">
                    <div className="absolute top-2 left-2 flex items-center z-10">
                      <div className="w-3 h-3 rounded-full bg-pink-500 mr-2" />
                      <span className="text-pink-300 text-xs font-medium">
                        YOUR PHOTO
                      </span>
                    </div>

                    <motion.img
                      src="/images/faces/JohnSmith.png"
                      alt="Original image"
                      className="w-full h-full object-contain p-6"
                      initial={{ scale: 0.9, filter: "blur(5px)" }}
                      animate={{
                        scale: animationPhase >= 1 ? 1 : 0.9,
                        filter: "blur(0px)",
                      }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  {/* Arrow pointing to center during phase 2 */}
                  {animationPhase >= 2 && animationPhase < 4 && (
                    <motion.div
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <svg
                        className="w-8 h-8 text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 17l-5-5m0 0l5-5m-5 5h12"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Result container */}
              <motion.div
                className="w-full max-w-md relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: animationPhase >= 4 ? 1 : 0,
                  y: animationPhase >= 4 ? 0 : 50,
                }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {animationPhase >= 4 && (
                  <>
                    <div className="relative rounded-lg overflow-hidden border border-gradient-purple-pink p-1 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-transparent to-pink-500/10 z-0" />

                      <div className="relative z-10">
                        <div className="bg-black/50 backdrop-blur-sm px-3 py-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mr-2" />
                            <span className="text-white text-xs font-medium">
                              TRANSFORMATION COMPLETE
                            </span>
                          </div>

                          <TextShimmer className="text-sm">
                            Luuls AI Magic
                          </TextShimmer>
                        </div>

                        <motion.img
                          src="/images/face_swap/rock_star.png"
                          alt="Transformed image"
                          className="w-full h-64 object-contain p-4"
                          initial={{ scale: 0.9, filter: "blur(10px)" }}
                          animate={{ scale: 1, filter: "blur(0px)" }}
                          transition={{ duration: 1.2 }}
                        />
                      </div>

                      {/* Decorative corner elements */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-600" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-500" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-600" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pink-500" />
                    </div>

                    {/* Floating particles around result */}
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                        initial={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0],
                          y: [0, Math.random() * 20 - 10],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}

                    {/* Bottom caption */}
                    <motion.div
                      className="text-center mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <p className="text-gray-400 text-sm">
                        <span className="luuls-gradient font-semibold">
                          Luuls AI
                        </span>{" "}
                        transforms your photos with just one click.
                        <br />
                        Experience the magic of AI transformation!
                      </p>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const SkeletonFour = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (inView) {
      // Start the animation sequence when component is in view
      const timeline = [
        () => setCurrentStep(1), // Show upload complete
        () => setShowPrompt(true), // Show prompt input
        () => setCurrentStep(2), // Show processing
        () => {
          setCurrentStep(3); // Show result
          setShowResult(true);
        },
        // () => {
        //   setCurrentStep(1);
        //   setShowPrompt(true);
        //   setCurrentStep(2);
        //   setCurrentStep(3);
        //   setShowResult(true);
        // },
      ];

      // Execute the timeline with delays
      timeline.forEach((action, index) => {
        setTimeout(action, (index + 1) * 2000);
      });
    }
  }, [inView]);

  // Sample prompt text that will be "typed" with animation
  const promptText =
    "Create a 3D cartoon-style version of an elderly scientist with wild white hair, a fluffy mustache, and a friendly expression. He should wear a brown suit, a white shirt, and a red bow tie. The background should feature a chalkboard with physics equations, and small floating planets or objects related to science. Use soft lighting, Pixar-style shading, and exaggerated facial features for a cute and whimsical appearance.";

  return (
    <div ref={ref} className="w-full h-full bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="relative w-full rounded-xl overflow-hidden bg-custom-dark border border-purple-600/20 py-8 px-6 md:px-10">
          {/* Header with steps indicator */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-white text-lg font-medium">
              AI Transformation
            </h3>
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  className={`h-2 rounded-full ${
                    currentStep >= step
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "bg-gray-700"
                  }`}
                  initial={{ width: 12 }}
                  animate={{
                    width: currentStep === step ? 32 : 12,
                    opacity: currentStep >= step ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Left side - Original image and prompt */}
            <div className="flex flex-col space-y-4">
              {/* Original image upload area */}
              <div className="relative h-64 md:h-100 rounded-lg overflow-hidden border border-purple-600/20 group">
                <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {currentStep === 0 ? (
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/50"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: inView && currentStep > 0 ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mb-3">
                      <svg
                        className="w-8 h-8 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-sm">Upload your photo</p>
                  </motion.div>
                ) : (
                  <motion.img
                    src="/images/albert_1.png"
                    alt="Original uploaded image"
                    className="w-full h-full object-cover"
                    initial={{ scale: 0.9, filter: "blur(10px)" }}
                    animate={{
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )}

                {/* Upload complete indicator */}
                {currentStep === 1 && (
                  <motion.div
                    className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs">Upload complete</span>
                  </motion.div>
                )}
              </div>

              {/* Prompt input area */}
              <div className="relative">
                <motion.div
                  className="relative rounded-lg overflow-hidden border border-purple-600/20 bg-gray-900/50 p-4"
                  initial={{ height: 180, opacity: 0 }}
                  animate={{
                    height: showPrompt ? 180 : 60,
                    opacity: currentStep >= 1 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="text-gray-400 text-xs block mb-2">
                    Describe your dream transformation:
                  </label>

                  {showPrompt && (
                    <TextGenerateEffect
                      words={promptText}
                      className="text-sm text-white"
                      duration={0.35}
                      play={showPrompt}
                    />
                  )}

                  {currentStep >= 2 && (
                    <motion.div
                      className="absolute bottom-3 right-3 flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                      <span className="text-purple-400 text-xs">
                        {currentStep === 2 ? "Processing..." : "Completed"}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Right side - Result image */}
            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden border border-purple-600/20">
              {currentStep < 2 ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: currentStep >= 1 ? 1 : 0.5 }}
                  >
                    <svg
                      className="w-12 h-12 text-gray-500 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-400 text-sm">
                      Waiting for input...
                    </p>
                  </motion.div>
                </div>
              ) : currentStep === 2 ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-16 h-16 mb-4">
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-t-transparent border-purple-600"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="absolute inset-2 rounded-full border-2 border-b-transparent border-pink-500"
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    <TextShimmer className="text-base">
                      Creating your new look...
                    </TextShimmer>
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  className="relative w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.img
                    src="/images/albert_2.png"
                    alt="AI transformed image"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, filter: "blur(20px)" }}
                    animate={{
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />

                  {/* Floating particles effect for the result */}
                  {showResult && (
                    <>
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                          initial={{
                            x: `${20 + Math.random() * 60}%`,
                            y: `${20 + Math.random() * 60}%`,
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            x: `${20 + Math.random() * 60}%`,
                            y: `${20 + Math.random() * 60}%`,
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Success badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs">
                      Transformation complete
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bottom info text */}
          {currentStep === 3 && (
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-gray-400 text-sm">
                <span className="luuls-gradient font-semibold">Luuls AI</span>{" "}
                transforms your photos into stunning new looks in seconds.
                <br />
                Try it yourself and see the magic happen!
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
