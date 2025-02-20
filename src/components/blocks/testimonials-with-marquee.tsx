import { useInView } from "react-intersection-observer";
import { cn } from "../../lib/utils";
import { TestimonialCard, TestimonialAuthor } from "../ui/testimonial-card";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

interface TestimonialsSectionProps {
  title: React.ReactNode;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-custom-dark",
        "py-20 sm:py-32",
        className
      )}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-1/2 -z-10 ml-[-38rem] w-[81.25rem] bg-gradient-to-r from-purple-600/[0.05] via-transparent to-pink-500/[0.05] blur-3xl" />
      </div>

      <div className="flex flex-col items-center gap-8 px-6 sm:gap-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="page-padding-x max-component-width"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl lg:text-6xl font-bold max-w-3xl mx-auto text-center tracking-tight">
              {title}
            </h2>
            <p className="text-basic text-center max-w-3xl mx-auto mt-6">
              {description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="relative w-full overflow-hidden">
            <Marquee
              gradient={true}
              gradientColor="#030303"
              speed={80}
              pauseOnHover={false}
              className="overflow-hidden py-5"
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="mx-4 py-3">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Marquee>

            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
