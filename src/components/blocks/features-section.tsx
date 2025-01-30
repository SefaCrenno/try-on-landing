import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "../ui/bento-grid";

// Features

// Instant Try-On
// Seamlessly try out different outfits with our advanced AI.

// Enhanced Fit Suggestions
// Get size and fit recommendations tailored to your body.

// Save Your Favorites
// Save the outfits you love and revisit them anytime.

// Style Insights
// Discover trending styles curated just for you.

// Multilingual Support
// Available in over 100 languages, making global fashion accessible.

// Real-Time Notifications
// Stay updated when new collections are added or when your wishlist items are on sale.

const features = [
  {
    Icon: FileTextIcon,
    name: "Instant Try-On",
    description: "Seamlessly try out different outfits with our advanced AI.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-60 bg-gradient-to-r from-purple-600 to-pink-500" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Enhanced Fit Suggestions",
    description: "Get size and fit recommendations tailored to your body.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-60 bg-gradient-to-r from-purple-600 to-pink-500" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Save Your Favorites",
    description: "Save the outfits you love and revisit them anytime.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-60 bg-gradient-to-r from-purple-600 to-pink-500" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Style Insights",
    description: "Discover trending styles curated just for you.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-60 bg-gradient-to-r from-purple-600 to-pink-500" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Multilingual Support",
    description:
      "Available in over 100 languages, making global fashion accessible.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute -right-20 -top-20 opacity-60 bg-gradient-to-r from-purple-600 to-pink-500" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full bg-[#030303] py-20 lg:py-32 page-padding-x">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.05] via-transparent to-pink-500/[0.05] blur-3xl" />

      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard
            key={feature.name}
            {...feature}
            className="text-white border border-white/20"
          />
        ))}
      </BentoGrid>
    </section>
  );
}
