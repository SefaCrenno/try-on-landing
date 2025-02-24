import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../../components/ui/Navbar";
import { StackedCircularFooter } from "../../components/ui/stacked-circular-footer";

export default function TermsAndConditions() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Navbar />
      <div className="bg-custom-dark min-h-screen text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  LUULS AI TERMS AND CONDITIONS
                </span>
              </h1>
              <p className="text-gray-400">Last Updated: 02.12.2025</p>
            </div>

            <div className="space-y-8 text-gray-300">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  1. Introduction
                </h2>
                <p>
                  Welcome to Luuls! These Terms and Conditions ("Terms") govern
                  your use of the Luuls AI Virtual try-on & AI Image Generator
                  mobile application ("App") and related services provided by
                  Crenno Bilisim Hizmetleri Ar-Ge Sanayi ve Ticaret Limited
                  Şirketi ("Company," "we," "our," or "us"). By downloading,
                  installing, or using the App, you agree to these Terms. If you
                  do not agree, please do not use the App.
                </p>
              </section>

              {/* Eligibility */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  2. Eligibility
                </h2>
                <p>
                  You must be at least 13 years old (or the minimum age required
                  in your jurisdiction) to use the App. If you are under the age
                  of 18, you must have the consent of a parent or legal
                  guardian.
                </p>
              </section>

              {/* Description of Services */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  3. Description of Services
                </h2>
                <p>
                  Luuls offers virtual try-on and image generation
                  functionalities using AI technologies. The App allows users to
                  visualize outfits, accessories, and generated images.
                </p>
              </section>

              {/* Services Provided */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  4. Services Provided
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    AI Virtual Try-On: Users can generate AI-based virtual
                    try-on images.
                  </li>
                  <li>
                    AI Photo Generator: Users can create AI-generated images
                    using prompts.
                  </li>
                  <li>
                    Subscription and Credit-Based Usage: Users can access
                    features through credits or subscription plans.
                  </li>
                </ul>
              </section>

              {/* Pricing and Subscription Plans */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  5. Pricing and Subscription Plans
                </h2>
                <p className="mb-4">
                  Certain features may require a paid subscription. Payment
                  terms, auto-renewal conditions, and cancellation policies will
                  be outlined within the App at the time of purchase.
                </p>
                <p className="mb-4">
                  Upon first-time installation, users receive 10 free credits
                  (equivalent to 5 Virtual Try-On generations or AI Photo
                  Generation).
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Basic Package:
                    </h3>
                    <p>Users purchase credits to use features.</p>
                    <p className="font-semibold mt-2">Credit Pricing:</p>
                    <ul className="list-disc pl-6">
                      <li>50 credits: $4,99</li>
                      <li>100 credits: $9,99</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Premium Package:
                    </h3>
                    <ul className="list-disc pl-6">
                      <li>
                        Users can download generated images in original
                        resolution.
                      </li>
                      <li>
                        Users can enter custom prompts for AI-generated photos.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Subscription Plan:
                    </h3>
                    <ul className="list-disc pl-6">
                      <li>Monthly Unlimited Subscription: $9,99</li>
                      <li>Yearly Unlimited Subscription: $99,99</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Additional sections... */}
              {[
                {
                  title: "6. Subscription and Credit Terms",
                  content: [
                    "Subscriptions are billed automatically at the selected frequency (monthly or yearly).",
                    "Unused credits do not roll over to the next billing cycle.",
                    "Users may cancel their subscription at any time, but no refunds will be issued for unused portions.",
                    "Subscription cancellations take effect at the end of the current billing period.",
                  ],
                },
                {
                  title: "7. Refund Policy",
                  content: [
                    "Purchases of credits and subscriptions are non-refundable except as required by law.",
                    "If there are technical issues preventing access to purchased features, users may contact customer support for assistance.",
                  ],
                },
                {
                  title: "8. Technical Requirements",
                  content: [
                    "Minimum iOS version: iOS 13 or later (Compatible with iPhone and iPad)",
                    "Minimum Android SDK: 23 or later",
                  ],
                },
                {
                  title: "9. User Responsibilities",
                  content: [
                    "Users must not use the App for illegal or inappropriate content creation.",
                    "Users are responsible for maintaining the security of their accounts.",
                    "Users must not attempt to manipulate AI results for fraudulent or misleading purposes.",
                    "Users must comply with all applicable laws regarding AI-generated content, intellectual property rights, and digital privacy.",
                  ],
                },
                {
                  title: "10. Modifications to the Terms",
                  content: [
                    "We reserve the right to update these Terms at any time. Continued use of the App after updates constitutes acceptance of the new Terms.",
                  ],
                },
                {
                  title: "11. Content Ownership & Licensing",
                  content: [
                    "Users retain ownership of images they upload but grant Luuls a limited license to process, enhance, and display content as required for service functionality.",
                    "We do not claim ownership over user-generated content but may use anonymized or aggregated data for analytical and improvement purposes.",
                    "Users agree that Luuls may use AI-generated images for promotional, research, or training purposes, with user consent.",
                  ],
                },
                {
                  title: "12. Third-Party Services & Links",
                  content: [
                    "The App may integrate with or provide links to third-party services.",
                    "When interacting with third-party services, you acknowledge that those services have their own terms of use and privacy policies.",
                    "Luuls is not responsible for the availability, accuracy, legality, or security of any third-party services.",
                    "If you choose to use a third-party service within the App, you do so at your own risk.",
                    "Some features in the App may rely on external APIs.",
                    "If a third-party service becomes unavailable, Luuls is not obligated to provide an alternative.",
                  ],
                },
                {
                  title: "13. Compliance with Global Laws",
                  content: [
                    "We comply with GDPR for users in the European Union.",
                    "We adhere to CCPA for California residents.",
                    "We comply with COPPA to ensure children's privacy.",
                    "We follow Digital Services Act (EU) guidelines.",
                    "We comply with UK Data Protection Act 2018.",
                    "We adhere to PDPA for users in Singapore and other applicable regions.",
                  ],
                },
                {
                  title: "14. Disclaimer of Warranties",
                  content: [
                    "The App is provided 'as is' without warranties of any kind.",
                    "We do not guarantee uninterrupted or error-free service.",
                    "AI-generated results are based on algorithms and may not be 100% accurate or realistic.",
                  ],
                },
                {
                  title: "15. Limitation of Liability",
                  content: [
                    "To the fullest extent permitted by law, we are not liable for any damages arising from your use of the App.",
                    "We are not responsible for any misuse of AI-generated content by users.",
                    "We are not liable for any inaccuracies in AI-generated results.",
                  ],
                },
                {
                  title: "16. Termination",
                  content: [
                    "We reserve the right to terminate or suspend your access to the App at our discretion, with or without notice, if you violate these Terms.",
                  ],
                },
                {
                  title: "17. Governing Law & Jurisdiction",
                  content: [
                    "These Terms shall be governed by the laws of the Republic of Turkey.",
                    "If you are a resident of the EU, UK, US, or other jurisdictions, your statutory rights remain unaffected.",
                    "Disputes shall be subject to the exclusive jurisdiction of the courts of Istanbul, Turkey.",
                    "Disputes may alternatively be resolved through binding arbitration.",
                    "In case of contradiction with mandatory laws, the latter shall prevail.",
                  ],
                },
                {
                  title: "18. Contact Information",
                  content: [
                    "For any questions or support, please contact us at info@crenno.com.",
                  ],
                },
              ].map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    {section.title}
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {section.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}

              <p className="text-center text-gray-400 mt-8">
                By using the App, you acknowledge that you have read,
                understood, and agreed to these Terms and Conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <StackedCircularFooter />
    </>
  );
}
