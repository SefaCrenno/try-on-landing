"use client";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface NewsletterSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  onSubscribe?: (
    email: string
  ) => Promise<{ success: boolean; error?: string }>;
  backgroundEffect?: boolean;
}

export function NewsletterSection({
  title = "Get notified when new stuff drops.",
  onSubscribe,
  backgroundEffect = true,
  className,
  ...props
}: NewsletterSectionProps) {
  const [formState, setFormState] = useState({
    email: "",
    status: "idle" as FormStatus,
    message: "",
  });

  const isLoading = formState.status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSubscribe) return;
    setFormState((prev) => ({ ...prev, status: "loading", message: "" }));

    try {
      const result = await onSubscribe(formState.email);
      if (!result.success) {
        setFormState((prev) => ({
          ...prev,
          status: "error",
          message: result.error || "",
        }));
      } else {
        setFormState({
          email: "",
          status: "success",
          message: "Thanks for subscribing!",
        });
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        status: "error",
        message: error instanceof Error ? error.message : "Failed to subscribe",
      }));
    }
  };

  return (
    <section
      className={cn("relative overflow-hidden bg-[#030303] py-20", className)}
      {...props}
    >
      {backgroundEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.05] via-transparent to-pink-500/[0.05] blur-3xl" />
      )}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 md:px-12">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Input
            id="subscribe-form"
            className="flex-1 border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-purple-500"
            placeholder="Your email"
            type="email"
            value={formState.email}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, email: e.target.value }))
            }
            disabled={isLoading}
            aria-label="Subscribe to the newsletter"
            required
          />
          <Button
            type="submit"
            className="group relative bg-purple-600 text-white hover:bg-purple-700"
            disabled={isLoading}
            data-loading={isLoading}
          >
            <span
              className={cn(
                "inline-flex items-center",
                isLoading && "text-transparent"
              )}
            >
              Subscribe
              <ArrowRight
                className="-me-1 ms-2 h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoaderCircle
                  className="animate-spin"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
            )}
          </Button>
        </form>
        {formState.message && (
          <p
            className={cn(
              "mt-4 text-sm",
              formState.status === "error" ? "text-red-400" : "text-purple-200"
            )}
            role="alert"
            aria-live="polite"
          >
            {formState.message}
          </p>
        )}
      </div>
    </section>
  );
}
