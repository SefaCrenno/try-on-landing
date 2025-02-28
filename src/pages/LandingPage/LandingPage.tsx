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
      name: "Olivia Bennett",
      avatar: "/images/faces/OliviaBennett.png",
    },
    // text: "Luuls AI saved me from endless returns! Being able to virtually try clothes before buying has transformed my online shopping experience completely.",
    text: "Luuls AI saved me from endless returns! Now, I can virtually try on clothes before buying, making online shopping easier, faster, and stress-free. It’s a total game-changer!",
  },
  {
    author: {
      name: "Michael Zhang",
      avatar: "/images/faces/MichaelZhang.png",
    },
    // text: "Found the perfect interview outfit by trying 15 different combinations in minutes with Luuls AI. The technology is impressively accurate.",
    text: "Found my perfect interview outfit in minutes with Luuls AI, trying 15 combinations. The technology is incredibly accurate!",
  },
  {
    author: {
      name: "Isabella Morales",
      avatar: "/images/faces/IsabellaMorales.png",
    },
    // text: "Living hours from any decent mall, Luuls AI lets me see exactly how clothes fit my body type before ordering. A real game-changer!",
    text: "Living hours away from any decent mall, I rely on Luuls AI to see exactly how clothes fit my body type before ordering. It’s a real game-changer that saves me time, money, and the hassle of returns!",
  },
  {
    author: {
      name: "John Smith",
      avatar: "/images/faces/JohnSmith.png",
    },
    // text: "Visualizing myself in medical scrubs with Luuls AI helped confirm my decision to switch careers at 42. Sometimes seeing is believing.",
    text: "Visualizing myself in medical scrubs with Luuls AI helped confirm my decision to switch careers at 42. Sometimes seeing is believing.",
  },
  {
    author: {
      name: "Sophia Carter",
      avatar: "/images/faces/SophiaCarter.png",
    },
    // text: "As an artist, Luuls AI's prompt engine captures nuance better than any other tool I've used. It perfectly visualized the book cover I had in mind.",
    text: "As an artist, Luuls AI's prompt engine captures nuance better than any other tool I've used. It perfectly visualized the book cover I had in mind. This is the beginning of a new era for artists!",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is Luuls AI?",
    answer:
      "Luuls AI uses advanced artificial intelligence to help you try on clothes virtually, swap faces for career-based transformations, and generate unique visuals from prompts. It's a seamless, interactive experience designed to empower you in fashion, art, and beyond.",
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

      {/* <div className="pt-17 relative z-40 max-component-width">
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
      </div> */}

      <main className="">
        <Hero />

        <Feature />

        <FeaturesSectionWithBentoGrid />

        <TestimonialsSection
          className="max-component-width"
          title={
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 pb-1">
              Trending Insights from{" "}
              <span className="luuls-white">Luuls AI</span>
            </h2>
          }
          description={
            <p className="text-basic text-center max-w-3xl mx-auto mt-6">
              Stay ahead with the latest tweets from{" "}
              <span className="luuls-gradient font-semibold">Luuls AI</span>.
              Discover industry trends, expert insights, and real-time
              updates—all in one place!
            </p>
          }
          testimonials={testimonials}
        />

        <Pricing />

        <FaqSection
          title="Frequently Asked Questions"
          description={
            <p className="text-basic text-center max-w-3xl mx-auto mt-6">
              Everything you need to know about{" "}
              <span className="luuls-gradient font-semibold">Luuls AI</span>.
            </p>
          }
          items={FAQ_ITEMS}
        />
      </main>

      <StackedCircularFooter />
    </>
  );
}
