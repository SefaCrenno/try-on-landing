import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../../components/ui/Navbar";
import { StackedCircularFooter } from "../../components/ui/stacked-circular-footer";

export default function PrivacyPolicy() {
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
                  LUULS PRIVACY POLICY
                </span>
              </h1>
              <p className="text-gray-400">Last Updated: 2025.20.02</p>
            </div>

            <div className="space-y-8 text-gray-300">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  1. Introduction
                </h2>
                <p>
                  Welcome to Luuls AI's Privacy Policy. Luuls AI is committed to
                  ensuring transparency regarding how we collect, process, and
                  protect your data while also setting clear terms for the use
                  of our AI-powered virtual try-on and image generation
                  applications (the "App") and our website (the "Site").
                </p>
                <p className="mt-4">
                  By using our App and Site, you agree to comply with these
                  terms and conditions. If you do not agree, please do not use
                  our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    2.1 Data You Provide Directly
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-semibold">
                        User-Generated Content:
                      </span>{" "}
                      When using Luuls AI's AI features, you may upload
                      photographs or videos for editing. These files are used
                      solely to provide the requested AI transformations.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Account Information:
                      </span>{" "}
                      If you create an account, we may collect your name, email
                      address, username, and password.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Payment Information:
                      </span>{" "}
                      If you purchase a subscription, payment processing is
                      handled by third-party providers (e.g., Apple App Store,
                      Google Play Store). Luuls AI does not store credit card
                      details.
                    </li>
                    <li>
                      <span className="font-semibold">Communications:</span>{" "}
                      When you contact our support team, we collect details
                      related to your inquiry (e.g., email, message content).
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white">
                    2.2 Data Collected Automatically
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-semibold">Device Information:</span>{" "}
                      We collect device model, operating system, IP address, and
                      browser type.
                    </li>
                    <li>
                      <span className="font-semibold">Usage Data:</span> We
                      track how users interact with the App, including feature
                      usage and app preferences.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Cookies and Tracking Technologies:
                      </span>{" "}
                      Our Site uses cookies to improve user experience and for
                      analytics. You can manage cookies through your browser
                      settings.
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white">
                    2.3 Data from Third Parties
                  </h3>
                  <p>
                    We may receive information from third-party service
                    providers such as analytics platforms and advertising
                    networks.
                  </p>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="mb-4">
                  Luuls AI processes your data for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">To Provide Services:</span>{" "}
                    Your uploaded images and videos are processed to apply AI
                    transformations. These files are stored until the user
                    deletes them. Deletion occurs upon the user's request.
                  </li>
                  <li>
                    <span className="font-semibold">
                      To Improve and Optimize the App:
                    </span>{" "}
                    We analyze usage data to enhance our AI models and user
                    experience.
                  </li>
                  <li>
                    <span className="font-semibold">For Customer Support:</span>{" "}
                    We use your contact details to respond to inquiries.
                  </li>
                  <li>
                    <span className="font-semibold">
                      For Legal and Security Reasons:
                    </span>{" "}
                    We may process your data to comply with legal obligations,
                    detect fraud, and enforce terms of service.
                  </li>
                  <li>
                    <span className="font-semibold">
                      For Marketing and Advertising (with Consent):
                    </span>{" "}
                    We may send promotional emails and display targeted ads. You
                    can opt-out at any time.
                  </li>
                </ul>
              </section>

              {/* How We Share Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  4. How We Share Your Information
                </h2>
                <p className="mb-4">
                  Luuls AI does not sell your personal data. We may share data
                  in the following cases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">
                      With Service Providers:
                    </span>{" "}
                    We partner with cloud hosting providers (e.g., Amazon Web
                    Services, Google Cloud Platform) to process AI-generated
                    images securely.
                  </li>
                  <li>
                    <span className="font-semibold">
                      With Business Partners:
                    </span>{" "}
                    If you engage with third-party integrations, we may share
                    data with those partners based on your preferences.
                  </li>
                  <li>
                    <span className="font-semibold">With Law Enforcement:</span>{" "}
                    If required by law, we may disclose your data to legal
                    authorities.
                  </li>
                  <li>
                    <span className="font-semibold">
                      During Business Transfers:
                    </span>{" "}
                    If Luuls AI undergoes a merger or acquisition, your data may
                    be transferred as part of the business transaction.
                  </li>
                </ul>
              </section>

              {/* Data Retention and Security */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  5. Data Retention and Security
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Retention Period:</span>{" "}
                    AI-processed images and videos are deleted upon user's
                    request. Other personal data is retained as long as
                    necessary for business and legal compliance.
                  </li>
                  <li>
                    <span className="font-semibold">Security Measures:</span> We
                    use encryption, secure access controls, and periodic
                    security audits to safeguard user data.
                  </li>
                </ul>
              </section>

              {/* Your Rights and Choices */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  6. Your Rights and Choices
                </h2>
                <p className="mb-4">
                  Depending on your jurisdiction, you may have the following
                  rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Access & Portability:</span>{" "}
                    Request a copy of your personal data.
                  </li>
                  <li>
                    <span className="font-semibold">Correction:</span> Update
                    inaccurate or incomplete information.
                  </li>
                  <li>
                    <span className="font-semibold">Deletion:</span> Request the
                    removal of your personal data (subject to legal
                    obligations).
                  </li>
                  <li>
                    <span className="font-semibold">
                      Objection & Restriction:
                    </span>{" "}
                    Restrict how we process your data under certain conditions.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Opt-Out of Marketing Communications:
                    </span>{" "}
                    You can unsubscribe from promotional emails.
                  </li>
                  <li>
                    <span className="font-semibold">Manage Cookies:</span>{" "}
                    Adjust your preferences through browser settings.
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at info@crenno.com.
                </p>
              </section>

              {/* Compliance with Privacy Laws */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  7. Compliance with Privacy Laws
                </h2>
                <p className="mb-4">
                  Luuls AI is committed to complying with global data protection
                  laws, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">
                      General Data Protection Regulation (GDPR) (EU):
                    </span>{" "}
                    Users in the European Union have rights over their personal
                    data, including the right to access, rectify, and delete
                    their data, as well as to object to processing.
                  </li>
                  <li>
                    <span className="font-semibold">
                      California Consumer Privacy Act (CCPA) (USA):
                    </span>{" "}
                    California residents have the right to know what personal
                    information is collected, request deletion, and opt-out of
                    the sale of their data.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Children's Online Privacy Protection Act (COPPA) (USA):
                    </span>{" "}
                    We do not knowingly collect personal information from
                    children under 13. If we become aware of such data
                    collection, we will delete it immediately.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Personal Data Protection Law (PDPL- KVKK) (Turkey):
                    </span>{" "}
                    Users in Turkey have rights regarding data access,
                    correction, and deletion under local regulations.
                  </li>
                </ul>
                <p className="mt-4">
                  For inquiries regarding legal compliance, please contact our
                  Data Protection Officer at info@crenno.com
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  8. Children's Privacy
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Age Restriction:</span> The
                    App and Site are not intended for children under 13 (or the
                    applicable legal age in your country).
                  </li>
                  <li>
                    <span className="font-semibold">Parental Consent:</span> If
                    we learn that a child's data has been collected without
                    parental consent, we will delete it. Parents can request
                    data removal by contacting info@crenno.com
                  </li>
                </ul>
              </section>

              {/* International Data Transfers */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  9. International Data Transfers
                </h2>
                <p className="mb-4">
                  Luuls AI may transfer user data to countries outside your
                  jurisdiction. When we do so, we implement safeguards,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Standard Contractual Clauses (SCCs) for data transfers
                    between the EU and non-EU countries.
                  </li>
                  <li>
                    Technical security measures such as encryption and access
                    restrictions.
                  </li>
                  <li>
                    Legal compliance frameworks based on country-specific data
                    protection laws.
                  </li>
                </ul>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy to reflect changes in our
                  practices. Significant updates will be communicated through:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>App notifications</li>
                  <li>Website announcements</li>
                  <li>Email notifications (if applicable)</li>
                </ul>
                <p className="mt-4">
                  Your continued use of Luuls AI after any updates indicates
                  your acceptance of the revised Privacy Policy.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  11. Contact Us
                </h2>
                <p>
                  For any questions about this Privacy Policy or your data,
                  please contact us:
                </p>
                <p className="mt-4">Email: info@crenno.com</p>
              </section>

              <p className="text-center text-gray-400 mt-8">
                This Privacy Policy is designed to be comprehensive and
                compliant with data protection regulations worldwide. Please
                review it carefully and contact us if you have any concerns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

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
