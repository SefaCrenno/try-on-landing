import Pricing from "./components/Pricing";
import { TestimonialsSection } from "../../components/blocks/testimonials-with-marquee";
import { Feature } from "../../components/ui/feature-with-image-comparison";
import Hero from "./components/Hero";
import { Banner } from "./components/Banner";
import Navbar from "../../components/ui/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FeaturesSectionWithBentoGrid } from "../../components/ui/full-content-feature";
import { FaqSection } from "../../components/ui/faq";
import { StackedCircularFooter } from "../../components/ui/stacked-circular-footer";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Say goodbye to the old way of trying on clothes! With Luuls AI, you can now try on outfits virtually and see your style before you commit. #AI #VirtualTryOn #FashionRevolution",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Luuls AI brings the future of fashion to your fingertips – instantly try on clothes, experiment with new styles, and shop smarter than ever! #AIFashion #VirtualStyling #TryBeforeYouBuy",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Why guess how clothes will look on you when Luuls AI lets you see it instantly? Virtual fitting rooms are here, powered by AI! #AIFashion #SmartShopping #TryOn",
  },
  {
    author: {
      name: "John Smith",
      handle: "@johnsmith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "With Luuls AI's face swap feature, you can now step into any career with just one click. From doctors to astronauts, the possibilities are endless! #AI #CareerTransformation #FaceSwap",
  },
  {
    author: {
      name: "John Smith2",
      handle: "@johnsmith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Want to create stunning visuals from your ideas? Luuls AI's prompt-based image generation takes your imagination to a whole new level. The future of art is here. #AI #DigitalArt #CreativeAI",
  },
  {
    author: {
      name: "John Smith3",
      handle: "@johnsmith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "From virtual try-ons to career face swaps, Luuls AI is unlocking new ways to interact with fashion, art, and even your own identity. The future is now! #AI #TechInnovation #LuulsAI",
  },
];

const FAQ_ITEMS = [
  {
    question: "How Does Luuls AI Work?",
    answer:
      "Luuls AI uses advanced artificial intelligence to help you try on clothes virtually, swap faces for career-based transformations, and generate unique visuals from prompts. It's a seamless, interactive experience designed to empower you in fashion, art, and beyond.",
  },
  {
    question: "Is Luuls AI Free to Use?",
    answer:
      "Luuls AI offers both free and premium features. While basic features like virtual try-ons are available for everyone, some advanced tools, like AI-generated art and career face swaps, may require a subscription.",
  },
  {
    question: "How does the virtual try-on work?",
    answer:
      "Our virtual try-on feature uses advanced AI technology to create a realistic visualization of how clothes will look on you. Simply upload a photo or use your camera, and our AI will show you how different items would look on your body type.",
  },
  {
    question: "Can I Share My Generated Images?",
    answer:
      "Yes, you can easily share the AI-generated images across your social media platforms, download them for personal use, or even print them. The possibilities are endless!",
  },
  {
    question: "What platforms do you support?",
    answer:
      "Luuls AI is available on both iOS and Android devices. You can download our app from the App Store or Google Play Store and start exploring fashion right away.",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      <Navbar />

      <div className="pt-17 relative z-40 max-component-width">
        <Banner
          show={showBanner}
          onHide={() => {
            setShowBanner(false);
          }}
          icon={null}
          title="🚀 Get started with our Luuls AI with %25 discount for a limited time"
          action={{
            onClick: () => {
              navigate("/download");
            },
            label: "Download Now",
          }}
          learnMoreUrl="#pricing"
        ></Banner>
      </div>

      <main className="">
        <Hero />

        <Feature />

        <FeaturesSectionWithBentoGrid />

        <TestimonialsSection
          title={
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-balance">
              Trending Insights from{" "}
              <span className="luuls-gradient">Luuls AI</span>
            </h2>
          }
          description="Stay ahead with the latest tweets from Luuls AI. Discover industry trends, expert insights, and real-time updates—all in one place!"
          testimonials={testimonials}
        />

        <Pricing />

        <FaqSection
          title="Frequently Asked Questions"
          description="Everything you need to know about CrainnoAI"
          items={FAQ_ITEMS}
        />
      </main>

      <StackedCircularFooter
        contactInfo={{
          title: "Still have questions?",
          description: "Our support team is here to help you",
          buttonText: "Contact Support",
          onContact: () => {
            window.location.href = "mailto:info@crenno.com";
          },
        }}
      />
    </>
  );
}
