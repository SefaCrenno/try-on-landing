import { motion } from "framer-motion";
// cn utility function
const cn = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(" ");
};

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Track your style",
      description:
        "Track and manage your fashion preferences with ease using our intuitive interface.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-purple-600/20",
    },
    {
      title: "AI Style Recommendations",
      description:
        "Get personalized style recommendations using our advanced AI technology.",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 md:col-span-2 lg:col-span-2 border-b border-purple-600/20",
    },
    {
      title: "Watch our AI in action",
      description:
        "See how our AI transforms your style choices and enhances your fashion experience",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-purple-600/20",
    },
    {
      title: "Try instantly",
      description:
        "With our blazing fast AI technology, get instant style recommendations and virtual try-ons.",
      skeleton: <SkeletonFour />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Packed with innovative features
          </span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-gray-300 text-center font-normal">
          From style recommendations to virtual try-ons, CrainnoAI has
          everything you need to transform your fashion experience.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-md border-purple-600/20">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
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
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-gray-300 text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 max-h-[550px] transition-transform duration-300">
      <div className="w-full group p-5  hover:p-0 mx-auto bg-[#030303] shadow-2xl group h-full border border-purple-600/20 rounded-xl">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <img
            src="/images/aigenerated1.webp"
            alt="Feature preview"
            className="h-full w-full aspect-square object-cover object-left-top rounded-lg transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/images/aigenerated1.webp",
    "/images/aigenerated2.jpg",
    "/images/aigenerated3.jpeg",
    "/images/aigenerated1.webp",
    "/images/aigenerated2.jpg",
    "/images/aigenerated3.jpeg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden justify-center">
      <div className="flex flex-row -ml-20">
        {images.slice(0, 3).map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-[#030303] border border-purple-600/20 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt={`Style ${idx + 1}`}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row -ml-20">
        {images.slice(3, 6).map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-second" + idx + 3}
            style={{ rotate: Math.random() * -10 }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-[#030303] border border-purple-600/20 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt={`Style ${idx + 3}`}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full mx-auto bg-transparent group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
        <img
          src="/images/aigenerated1.webp"
          alt="Video thumbnail"
          className="h-full w-full aspect-square object-cover object-center rounded-xl blur-none group-hover/image:blur-md transition-all duration-200"
        />
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-[400px] flex items-center justify-center relative bg-transparent">
      <div className="w-full h-full p-5 bg-[#030303] shadow-2xl border border-purple-600/20 rounded-xl overflow-hidden">
        <img
          src="/images/aigenerated1.webp"
          alt="AI Fashion Technology"
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};
