import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Loader2, Info } from "lucide-react";
import { submitContactForm, db } from "../../lib/firebase";

// Define the type for the form submission result
interface FormSubmissionResult {
  success: boolean;
  id?: string;
  error?: string | Error | unknown;
}

export function ContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFirebaseAvailable, setIsFirebaseAvailable] = useState(true);

  // Check if Firebase is available when the component mounts
  useEffect(() => {
    if (open) {
      const firebaseAvailable = !!db;
      setIsFirebaseAvailable(firebaseAvailable);

      if (!firebaseAvailable) {
        setError(
          "Contact form is currently unavailable. Please try again later or contact us via email."
        );
      }
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submission if Firebase is not available
    if (!isFirebaseAvailable) {
      setError(
        "Contact form is currently unavailable. Please try again later or contact us via email."
      );
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Submit form data to Firebase with a timeout to prevent hanging
      const formSubmissionPromise = submitContactForm(email, message);

      // Set a timeout to prevent the request from hanging
      const timeoutPromise = new Promise<FormSubmissionResult>((_, reject) => {
        setTimeout(() => reject(new Error("Request timed out")), 10000);
      });

      // Race between the form submission and the timeout
      const result = (await Promise.race([
        formSubmissionPromise,
        timeoutPromise,
      ])) as FormSubmissionResult;

      if (result.success) {
        setIsSubmitted(true);

        // Close modal after 2 seconds on success
        setTimeout(() => {
          onOpenChange(false);
          // Reset state after modal is closed
          setTimeout(() => {
            setIsSubmitted(false);
            setEmail("");
            setMessage("");
          }, 300);
        }, 2000);
      } else {
        const errorMessage = result.error
          ? typeof result.error === "string"
            ? result.error
            : result.error instanceof Error
            ? result.error.message
            : "Unknown error"
          : "Failed to send message. Please try again later.";

        setError(errorMessage);
      }
    } catch (err) {
      if (err instanceof Error && err.message === "Request timed out") {
        setError(
          "Request timed out. Please check your internet connection and try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
        console.error("Contact form submission error:", err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Send us a message and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 mt-4"
              onSubmit={handleSubmit}
            >
              {!isFirebaseAvailable && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center gap-2"
                >
                  <Info className="h-5 w-5 text-blue-500" />
                  <p className="text-sm text-blue-400">
                    Contact form is currently in demo mode. Messages won't be
                    sent.
                  </p>
                </motion.div>
              )}

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-transparent border border-purple-600/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/50"
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-transparent border border-purple-600/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/50 min-h-[100px]"
                  placeholder="How can we help you?"
                  disabled={isLoading}
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2"
                >
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-400">{error}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isLoading || !isFirebaseAvailable}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {!isFirebaseAvailable && (
                <p className="text-xs text-center text-gray-400">
                  Alternatively, you can reach us at{" "}
                  <a
                    href="mailto:info@crenno.com"
                    className="text-purple-400 hover:underline"
                  >
                    info@crenno.com
                  </a>
                </p>
              )}
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-8 space-y-4"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <Check className="h-6 w-6 text-purple-500" />
              </div>
              <p className="text-white font-medium">
                Message sent successfully!
              </p>
              <p className="text-sm text-gray-400">
                We'll get back to you soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
