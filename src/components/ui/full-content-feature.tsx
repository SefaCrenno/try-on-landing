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
        "col-span-1 md:col-span-6 border-b md:border-r border-purple-600/20 group hover:bg-purple-600/[0.015] transition-colors",
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
        "col-span-1 md:col-span-6 border-b border-purple-600/20 hover:bg-purple-600/[0.015] transition-colors",
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
        "col-span-1 md:col-span-6 border-b md:border-r border-purple-600/20 group hover:bg-purple-600/[0.015] transition-colors",
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
        <div className="w-full flex gap-8 p-5 mx-auto bg-custom-dark shadow-2xl h-full border border-purple-600/20 rounded-xl">
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
            <h3 className="small-sub-title-basic">
              Why Try-On with <span className="luuls-gradient">Luuls AI</span> ?
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
    <div className="relative w-full overflow-hidden h-[440px]" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pt-14">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={false}
            className="py-5"
          >
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ rotate: Math.random() * 20 - 10 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                className="relative w-80 h-80 rounded-xl mx-3 p-2 bg-custom-dark border border-purple-600/20  group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />
                <img
                  src={image}
                  alt={`Style ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 "
                />
              </motion.div>
            ))}
          </Marquee>
        </div>
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
          words="A mesmerizing sorceress, standing in the center of an enchanted, otherworldly garden suspended in the sky. Her face, delicate and radiant, glows with violet and pink (#FCA5D5) undertones, her eyes shimmering with an ancient, cosmic knowledge. A flowing, holographic cloak surrounds her, shifting between purple and pink hues, trailing behind her like the tail of a comet. Behind her, the garden is alive with bioluminescent plants that radiate soft, glowing colors, and in the distance, distant stars and nebulae stretch across the horizon, their light blending into the surreal landscape. Her hands are raised, summoning magic that dances through the air, casting flickering, holographic spells of light across the celestial sky."
          className="text-lg font-light text-white"
          duration={0.5}
          play={inView}
        />

        {/* Image Generation Area */}
        <div className="relative w-full min-h-[480px] max-h-[960px] rounded-xl overflow-hidden">
          <div className=" inset-0 bg-custom-dark flex">
            <div className="w-full max-w-[800px] mx-auto">
              <motion.img
                src="/images/prompt_generation.png"
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
