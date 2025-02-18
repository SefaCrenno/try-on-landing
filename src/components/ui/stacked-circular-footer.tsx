import { Button } from "./button";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { ContactDialog } from "./contact-dialog";
import { useInView } from "react-intersection-observer";

function StackedCircularFooter({
  contactInfo,
}: {
  contactInfo: {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
  };
}) {
  //inView
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <footer className="bg-dark py-16" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Logo Section */}
          <div className="mb-12 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 p-5">
            <img src="/luuls.png" alt="Luuls AI" width={70} height={70} />
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md mb-12 p-6 rounded-lg text-center border border-purple-600/20 bg-gradient-to-r from-purple-600/5 to-pink-500/5"
          >
            <div className="inline-flex items-center justify-center p-2 rounded-full mb-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
              <Mail className="h-5 w-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              {contactInfo.title}
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              {contactInfo.description}
            </p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-all hover:scale-105 duration-200 cursor-pointer"
            >
              {contactInfo.buttonText}
            </button>
          </motion.div>

          {/* Navigation */}
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Download App
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
    </footer>
  );
}

export { StackedCircularFooter };
