import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import { Button } from "./button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-primary-purple/20 border border-primary-purple/20",
      "transform-gpu transition-all duration-300",
      "hover:border-primary-purple/40 hover:bg-primary-purple/30",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-primary-purple transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold bg-clip-text text-white bg-gradient-to-r from-gradient-start to-gradient-end">
        {name}
      </h3>
      <p className="max-w-lg text-primary-purple/70">{description}</p>
    </div>

    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto text-primary-purple hover:text-primary-pink hover:bg-primary-purple/20"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
