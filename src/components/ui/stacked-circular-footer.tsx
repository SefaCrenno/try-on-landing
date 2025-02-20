import { Button } from "./button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Link,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { ContactDialog } from "./contact-dialog";
import { useInView } from "react-intersection-observer";

function StackedCircularFooter() {
  //inView
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <motion.footer
      className="bg-custom-dark py-16"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Navigation */}
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/terms"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/download"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Download App
            </Link>
            <a
              href="/#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsDialogOpen(true);
              }}
            >
              Contact Us
            </a>
          </nav>

          {/* Social Media */}
          <div className="mb-8 flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 text-gray-300 hover:text-purple-400 cursor-pointer transition-all hover:scale-110 duration-200"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 text-gray-300 hover:text-purple-400 cursor-pointer transition-all hover:scale-110 duration-200"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 text-gray-300 hover:text-purple-400 cursor-pointer transition-all hover:scale-110 duration-200"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 text-gray-300 hover:text-purple-400 cursor-pointer transition-all hover:scale-110 duration-200"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 Luuls AI. All rights reserved.
            </p>
          </div>
        </div>

        <ContactDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </motion.footer>
  );
}

export { StackedCircularFooter };
