import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { ContactDialog } from "./contact-dialog";

// cn utility function
const cn = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(Boolean).join(" ");
};

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
  }[];
  contactInfo?: {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    return (
      <section
        ref={ref}
        className={cn("py-16 w-full bg-[#030303]", className, "page-padding-x")}
        {...props}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              {title}
            </span>
          </h2>
          {description && (
            <div className="w-full flex justify-center">
              <p className="max-w-2xl text-lg text-gray-300 text-balance">
                {description}
              </p>
            </div>
          )}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-2 mt-20">
          {items.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>

        {/* Contact Section */}
        {contactInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center border border-purple-600/20"
          >
            <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
              <Mail className="h-4 w-4 text-purple-500" />
            </div>
            <p className="text-sm font-medium text-white mb-1">
              {contactInfo.title}
            </p>
            <p className="text-xs text-gray-300 mb-4">
              {contactInfo.description}
            </p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-opacity"
            >
              {contactInfo.buttonText}
            </button>
          </motion.div>
        )}

        <ContactDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-lg",
        "transition-all duration-200 ease-in-out",
        "border border-purple-600/20",
        isOpen
          ? "bg-gradient-to-r from-purple-600/10 to-pink-600/10"
          : "hover:bg-purple-600/5"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-transparent text-left"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200",
            "text-gray-300",
            isOpen && "text-white"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-purple-500" : "text-gray-400"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm text-gray-400 leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
