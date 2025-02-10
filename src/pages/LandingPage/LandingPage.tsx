import Pricing from "./components/Pricing";
import { TestimonialsSection } from "../../components/blocks/testimonials-with-marquee";
import { NewsletterSection } from "../../components/blocks/newsletter-section";
import { Feature } from "../../components/ui/feature-with-image-comparison";
import { FeaturesSection } from "../../components/blocks/features-section";
import Hero from "./components/Hero";
import { Banner } from "./components/Banner";
import Navbar from "../../components/ui/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FeaturesSectionWithBentoGrid } from "../../components/ui/full-content-feature";
import { FaqSection } from "../../components/ui/faq";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
  },
  {
    author: {
      name: "John Smith",
      handle: "@johnsmith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
  },
  {
    author: {
      name: "John Smith2",
      handle: "@johnsmith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
  },
  {
    author: {
      name: "John Smith3",
      handle: "@johnsmith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
  },
];

const mockSubscribe = async (email: string) => {
  // API request simulation
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email.includes("error")) {
    return { success: false, error: "Something went wrong!" };
  }

  return { success: true };
};

const FAQ_ITEMS = [
  {
    question: "What is CrainnoAI?",
    answer:
      "CrainnoAI is an innovative AI-powered fashion platform that helps you discover, try on, and shop for clothes virtually. Our advanced technology provides personalized style recommendations and a seamless virtual try-on experience.",
  },
  {
    question: "How does the virtual try-on work?",
    answer:
      "Our virtual try-on feature uses advanced AI technology to create a realistic visualization of how clothes will look on you. Simply upload a photo or use your camera, and our AI will show you how different items would look on your body type.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security very seriously. All your personal information and photos are encrypted and stored securely. We never share your data with third parties without your explicit consent.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "CrainnoAI is available on both iOS and Android devices. You can download our app from the App Store or Google Play Store and start exploring fashion right away.",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      <Navbar />
      <div className="pt-16 relative z-40">
        <Banner
          show={showBanner}
          onHide={() => {
            setShowBanner(false);
          }}
          icon={null}
          title="🚀 Get started with our CrainnoAI with %25 discount for a limited time"
          action={{
            onClick: () => {
              navigate("/download");
            },
            label: "Download Now",
          }}
          learnMoreUrl="#pricing"
        ></Banner>
      </div>
      <main className="pt-8">
        <Hero />
        <FeaturesSectionWithBentoGrid></FeaturesSectionWithBentoGrid>
        <Feature />
        <FeaturesSection />
        <TestimonialsSection
          title="Trending Insights from Crainno"
          description="Stay ahead with the latest tweets from Crainno. Discover industry trends, expert insights, and real-time updates—all in one place!"
          testimonials={testimonials}
        />
        <Pricing />
        <FaqSection
          title="Frequently Asked Questions"
          description="Everything you need to know about CrainnoAI"
          items={FAQ_ITEMS}
          contactInfo={{
            title: "Still have questions?",
            description: "Our support team is here to help you",
            buttonText: "Contact Support",
            onContact: () => {
              window.location.href = "mailto:support@crainno.ai";
            },
          }}
        />
        <NewsletterSection
          title="Join our newsletter"
          onSubscribe={mockSubscribe}
        />
      </main>
    </>
  );
}
