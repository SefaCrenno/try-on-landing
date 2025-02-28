import { Check } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  price?: {
    original: number;
    discounted: number;
    billingPeriod: "monthly" | "yearly";
  };
  credits?: {
    amount: number;
    price: number;
  }[];
  isPopular?: boolean;
  isEnterprise?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Package",
    description: "Perfect for occasional use, purchase credits as needed",
    credits: [
      {
        amount: 50,
        price: 4.99,
      },
      {
        amount: 100,
        price: 9.99,
      },
    ],
    features: [
      "Use credits to generate AI-enhanced photos",
      "Try on outfits virtually",
      "Profession-Based Face Swap",
      "Standard resolution downloads",
      "Pay as you go flexibility",
    ],
    isEnterprise: false,
  },

  {
    name: "Premium Package",
    description: "Full access to all premium features and unlimited usage",
    price: {
      original: 9.99,
      discounted: 9.99,
      billingPeriod: "monthly",
    },
    features: [
      "High-Resolution Image Downloads",
      "Custom AI Prompts",
      "Profession-Based Face Swap",
      "Unlimited Usage",
      "No restrictions on generations",
      "Advanced customization options",
    ],
    isPopular: false,
    isEnterprise: false,
  },
  {
    name: "Premium Package",
    description: "Full access to all premium features and unlimited usage",
    price: {
      original: 12 * 9.99,
      discounted: 99.99,
      billingPeriod: "yearly",
    },
    features: [
      "High-Resolution Image Downloads",
      "Custom AI Prompts",
      "Profession-Based Face Swap",
      "Unlimited Usage",
      "No restrictions on generations",
      "Advanced customization options",
    ],
    isPopular: true,
    isEnterprise: false,
  },
];

export default function Pricing() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="py-20 max-component-width page-padding-x" id="pricing">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl lg:text-6xl font-bold max-w-3xl mx-auto text-center tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-balance">
              Choose your perfect plan
            </span>
          </h2>
          <p className="text-basic text-center max-w-3xl mx-auto mt-6">
            Whether you need occasional access or unlimited usage, we have a
            plan that's right for you.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 20,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border  flex flex-col justify-between ${
                plan.isPopular ? "border-purple-600" : "border-gray-800"
              } p-8 shadow-lg backdrop-blur-sm bg-gradient-to-b from-purple-600/[0.05] via-transparent to-pink-500/[0.05]`}
            >
              <div className="">
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-xs font-medium text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {plan.description}
                  </p>

                  {plan.price ? (
                    <div className="mt-6 min-h-[81px] flex flex-col items-end">
                      {plan.price.original > plan.price.discounted ? (
                        <p className=" flex items-baseline gap-x-1">
                          <span className="line-through text-gray-400 text-lg md:text-2xl">
                            ${plan.price.original}
                          </span>
                          <span className="text-sm font-semibold leading-6 text-gray-400">
                            /
                            {plan.price.billingPeriod === "monthly"
                              ? "month"
                              : "year"}
                          </span>
                        </p>
                      ) : null}
                      <p className="mt-2 flex items-baseline gap-x-1">
                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                          $
                          {plan.price.original > plan.price.discounted
                            ? plan.price.discounted
                            : plan.price.original}
                        </span>
                        <span className="text-sm font-semibold leading-6 text-gray-400">
                          /
                          {plan.price.billingPeriod === "monthly"
                            ? "month"
                            : "year"}
                        </span>
                      </p>
                    </div>
                  ) : (
                    <div className="mt-6 space-y-4 min-h-[81px]">
                      {plan.credits?.map((credit, index) => (
                        <div
                          key={index}
                          className="flex items-baseline justify-between"
                        >
                          <span className="text-sm md:text-lg font-semibold text-white">
                            {credit.amount} credits
                          </span>
                          <span className="text-2xl font-bold text-white">
                            ${credit.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <ul className="mt-8 space-y-4 text-sm leading-6 text-gray-400">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {!plan.isEnterprise && (
                <button
                  onClick={() => navigate("/download")}
                  className={`mt-8 block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
                      : "bg-purple-900 text-purple-300 hover:bg-purple-800"
                  }`}
                >
                  Get started
                </button>
              )}

              {plan.isEnterprise && (
                <button
                  onClick={() => navigate("/download")}
                  className={`mt-8 block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all duration-200 cursor-pointer bg-purple-900 text-purple-300 hover:bg-purple-800`}
                >
                  Contact Us
                </button>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
