import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: {
      monthly: 29,
      yearly: 290,
    },
    description: "For casual shoppers and occasional use",
    features: [
      "Up to 5 team members",
      "Virtual try-on for up to 10 items/month",
      "Basic recommendations",
      "1GB storage for favorites",
    ],
  },
  {
    name: "Professional",
    price: {
      monthly: 99,
      yearly: 990,
    },
    description: "Best for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: {
      monthly: 299,
      yearly: 2990,
    },
    description: "For large-scale enterprises",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Dedicated support",
      "Unlimited storage",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];

export default function Pricing() {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-[#030303]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Simple, transparent pricing
            </span>
          </h2>
          <p className="max-w-2xl text-lg text-gray-300 text-balance">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.isPopular ? "border-purple-600" : "border-gray-800"
              } p-8 shadow-sm flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-purple-900 px-4 py-1 text-xs font-medium text-purple-300">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    ${plan.price.monthly}
                  </span>
                  <span className="text-base font-medium text-gray-400">
                    /month
                  </span>
                </p>
              </div>

              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="h-5 w-5 text-purple-400" />
                    <span className="ml-3 text-sm text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold ${
                  plan.isPopular
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-purple-900 text-purple-300 hover:bg-purple-800"
                } transition-colors duration-200 cursor-pointer`}
                onClick={() => {
                  navigate("/download");
                }}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
