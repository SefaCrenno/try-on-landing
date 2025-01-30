import Pricing from "./components/Pricing";
import { TestimonialsSection } from "../../components/blocks/testimonials-with-marquee";
import { NewsletterSection } from "../../components/blocks/newsletter-section";
import { Feature } from "../../components/ui/feature-with-image-comparison";
import { FeaturesSection } from "../../components/blocks/features-section";
import Hero from "./components/Hero";
import { Banner } from "./components/Banner";

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

export default function LandingPage() {
  return (
    <>
      <Banner
        show
        onHide={() => {}}
        icon={null}
        title="🚀 Get started with our AI platform"
        action={{
          onClick: () => {},
          label: "Start now",
        }}
        learnMoreUrl="/"
      ></Banner>
      <Hero />
      <Feature />
      <FeaturesSection />
      <TestimonialsSection
        title="Trending Insights from Crainno"
        description="Stay ahead with the latest tweets from Crainno. Discover industry trends, expert insights, and real-time updates—all in one place!"
        testimonials={testimonials}
      />
      <Pricing />
      <NewsletterSection
        title="Join our newsletter"
        onSubscribe={mockSubscribe}
      />
    </>
  );
}
