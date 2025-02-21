import { cn } from "../../lib/utils";

export interface TestimonialAuthor {
  name: string;
  avatar: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export function TestimonialCard({ author, text }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-[200px] md:w-[340px] flex-col gap-4",
        "rounded-2xl border border-purple-100 dark:border-purple-900/50",
        "bg-gray-200 dark:bg-gray-900/50 backdrop-blur-sm",
        "p-6 text-left shadow-xl shadow-purple-500/5",
        "transition duration-300 hover:border-purple-200 dark:hover:border-purple-800",
        "hover:bg-white dark:hover:bg-gray-900/80",
        "hover:shadow-purple-500/10 hover:-translate-y-1"
      )}
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center shadow-lg">
        <svg
          className="h-4 w-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
      </div>

      <p className="text-base text-gray-700 dark:text-gray-300 italic break-words line-clamp-4">
        "{text}"
      </p>

      <div className="flex items-center gap-4 mt-2">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-purple-100 dark:ring-purple-900"
        />
        <div className="flex flex-col overflow-hidden">
          <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {author.name}
          </div>
        </div>
      </div>
    </div>
  );
}
