import { cn } from "../../lib/utils";
import { TestimonialCard, TestimonialAuthor } from "../ui/testimonial-card";
import { motion } from "framer-motion";

interface TestimonialsSectionProps {
  title: string;
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
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#030303]",
        "py-20 sm:py-32",
        className
      )}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-1/2 -z-10 ml-[-38rem] w-[81.25rem] bg-gradient-to-r from-purple-600/[0.05] via-transparent to-pink-500/[0.05] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-container flex-col items-center gap-8 px-6 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              {title}
            </span>
          </h2>
          <p className="max-w-2xl text-lg text-gray-300 text-balance">
            {description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-[scroll_50s_linear_infinite] py-10">
            {[...Array(2)].map((_, setIndex) => (
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                className="flex shrink-0 gap-8"
              >
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303]" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303]" />
        </div>
      </div>
    </section>
  );
}
