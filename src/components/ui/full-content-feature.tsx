import { motion } from "framer-motion";
import { TextShimmer } from "./text-shimmer";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { useInView } from "react-intersection-observer";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "See Your Look Before You Commit",
      description:
        "With Luuls AI, you no longer have to guess how clothes will look on you. See your style come to life instantly with our AI-powered try-on technology. Upload your photo, select the outfit, and watch as it’s perfectly fitted on your virtual self. No more second-guessing—make confident shopping decisions with the ultimate virtual fitting room.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-6 border-b md:border-r border-purple-600/20 group hover:bg-purple-600/[0.015] transition-colors",
    },
    {
      title: "Unleash Your Imagination with AI-Generated Art",
      description:
        "Luuls AI takes your creativity to the next level. With AI-powered prompts, you can generate unique images and visuals based on your ideas. Whether you’re designing for personal use or business, our AI model brings your concepts to life instantly, with limitless potential for creation.",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 md:col-span-6 border-b border-purple-600/20 group hover:bg-purple-600/[0.015] transition-colors",
    },
    {
      title: "See Yourself in Any Career with AI Face Swap",
      description:
        "	Step into any profession with Luuls AI’s face swap technology. Whether you’re imagining a new career or just having fun with professional roles, our AI lets you seamlessly swap faces into various job roles, from doctors to astronauts, and everything in between. Explore the possibilities, and see yourself in any job, instantly.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-6 border-b md:border-r border-purple-600/20 group hover:bg-purple-600/[0.015] transition-colors",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="relative z-20 py-20 lg:py-40 page-padding-x">
      <div className="px-8 mb-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold max-w-5xl mx-auto text-center tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-balance">
              More Than Just Try-On
              <br />
              Unlock AI-Powered Possibilities
            </span>
          </h2>

          <p className="text-basic text-center max-w-xl mx-auto mt-6">
            <b>
              Luuls AI isn’t just about trying on clothes – it’s about
              transforming your entire visual identity.
            </b>{" "}
            Whether you want to experiment with new outfits, see yourself in
            different professional roles, or generate stunning AI-powered
            visuals, Luuls AI brings the future of digital styling to your
            fingertips.
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
  return <p className="text-basic mt-5">{children}</p>;
};

export const SkeletonOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      className="relative flex py-8 px-2 gap-10 max-h-[550px] transition-transform duration-300"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex gap-8 p-5 mx-auto bg-dark shadow-2xl h-full border border-purple-600/20 rounded-xl">
          {/* Left side - Image */}
          <div className="w-1/2 relative group overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="/images/aigenerated1.webp"
              alt="Try-on Preview"
              className="h-full w-full object-cover object-center rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-purple-600/80 to-pink-500/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm text-sm">
                AI-Powered Virtual Try-On
              </div>
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="w-1/2 flex flex-col justify-center space-y-4 text-white">
            <h3 className="small-sub-title-basic">Why Try-On with Luuls AI?</h3>
            <p className="small-text-basic">
              Finding the perfect outfit has never been easier. With AI-powered
              try-on technology, you can see how different styles fit you before
              making a decision. No more uncertainty – just confidence in every
              look.
            </p>
            <ul className="space-y-2 text-sm text-basic">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <b>Instant Previews </b> – See outfits on yourself in seconds.
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <b>Realistic & Accurate </b> – AI-enhanced precision for
                lifelike results.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <b>No More Returns </b> – Shop smarter and avoid wrong
                purchases.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <b>Endless Styles </b> – Try out as many outfits as you like,
                risk-free.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <b>Seamless Shopping </b> – A smarter, more interactive shopping
                experience.
              </li>
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
    // triggerOnce: true,
  });
  const images = [
    "/images/aigenerated1.webp",
    "/images/aigenerated2.jpg",
    "/images/aigenerated3.jpeg",
    "/images/aigenerated1.webp",
    "/images/aigenerated2.jpg",
    "/images/aigenerated3.jpeg",
  ];

  return (
    <div className="relative w-full overflow-hidden h-[350px]" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-3 pt-20 absolute whitespace-nowrap"
        >
          {/* First set of images */}
          {images.map((image, idx) => (
            <motion.div
              key={`first-${idx}`}
              initial={{ rotate: Math.random() * 20 - 10 }}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
              className="relative w-64 h-64 rounded-xl p-2 bg-dark border border-purple-600/20 overflow-hidden"
            >
              <img
                src={image}
                alt={`Style ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image, idx) => (
            <motion.div
              key={`second-${idx}`}
              initial={{ rotate: Math.random() * 20 - 10 }}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
              className="relative w-64 h-64 rounded-xl p-2 bg-dark border border-purple-600/20 overflow-hidden"
            >
              <img
                src={image}
                alt={`Style ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>
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
  }, [inView]); // Added inView as dependency

  return (
    <div ref={ref} className="w-full h-full mx-auto bg-transparent">
      <div className="flex flex-col space-y-5">
        {/* Title with TextShimmer */}
        <TextShimmer
          className="text-2xl font-bold"
          duration={generationPhase === "success" ? 0 : 2}
        >
          AI-Powered Prompt Generation
        </TextShimmer>

        {/* Image Generation Area */}
        <div className="relative w-full min-h-[700px] max-h-[700px] rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-dark flex">
            <div className="w-full px-10 pt-10">
              <motion.img
                src="/images/aigenerated1.webp"
                alt="AI Generated Image"
                className="w-full h-full object-contain max-h-[500px] relative"
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
