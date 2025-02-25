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
                  LUULS AI PRIVACY POLICY
                </span>
              </h1>
              <p className="text-gray-400">Last Updated: 02.20.2025</p>
            </div>

            <div className="space-y-8 text-gray-300">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  1. Introduction
                </h2>
                <p>
                  Welcome to Luuls AI’s Privacy Policy. Luuls AI is committed to
                  ensuring transparency regarding how we collect, process, and
                  protect your data while also setting clear terms for the use
                  of our AI-powered virtual try-on and image generation
                  applications (the “App”) and our website (the “Site”).
                </p>
                <p className="mt-4">
                  By using our App and Site, you agree to comply with these
                  terms and conditions. If you do not agree, please do not use
                  our services.
                </p>
              </section>

              {/* Privacy Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  2. Privacy Policy
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.1 Information We Collect
                    </h3>
                    <p className="mb-4">
                      We collect different types of information based on your
                      interactions with our App and Site:
                    </p>

                    <div className="ml-4 space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          2.1.1 Data You Provide Directly
                        </h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            <span className="font-semibold">
                              User-Generated Content:
                            </span>{" "}
                            When using Luuls AI's AI features, you may upload
                            photographs or videos for editing. These files are
                            used solely to provide the requested AI
                            transformations.
                          </li>
                          <li>
                            <span className="font-semibold">
                              Account Information:
                            </span>{" "}
                            If you create an account, we may collect your name,
                            email address, username, and password.
                          </li>
                          <li>
                            <span className="font-semibold">
                              Payment Information:
                            </span>{" "}
                            If you purchase a subscription, payment processing
                            is handled by third-party providers (e.g., Apple App
                            Store, Google Play Store). Luuls AI does not store
                            credit card details.
                          </li>
                          <li>
                            <span className="font-semibold">
                              Communications:
                            </span>{" "}
                            When you contact our support team, we collect
                            details related to your inquiry (e.g., email,
                            message content).
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          2.1.2 Data Collected Automatically
                        </h4>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            <span className="font-semibold">
                              Device Information:
                            </span>{" "}
                            We collect device model, operating system, IP
                            address, and browser type.
                          </li>
                          <li>
                            <span className="font-semibold">Usage Data:</span>{" "}
                            We track how users interact with the App, including
                            feature usage and app preferences.
                          </li>
                          <li>
                            <span className="font-semibold">
                              Cookies and Tracking Technologies:
                            </span>{" "}
                            Our Site uses cookies to improve user experience and
                            for analytics. You can manage cookies through your
                            browser settings.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          2.1.3 Data from Third Parties
                        </h4>
                        <p>
                          We may receive information from third-party service
                          providers such as analytics platforms and advertising
                          networks.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.2 How We Use Your Information
                    </h3>
                    <p className="mb-4">
                      Luuls AI processes your data for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">
                          To Provide Services:
                        </span>{" "}
                        Your uploaded images and videos are processed to apply
                        AI transformations. These files are stored until the
                        user deletes them. Deletion occurs upon the user's
                        request.
                      </li>
                      <li>
                        <span className="font-semibold">
                          To Improve and Optimize the App:
                        </span>{" "}
                        We analyze usage data to enhance our AI models and user
                        experience.
                      </li>
                      <li>
                        <span className="font-semibold">
                          For Customer Support:
                        </span>{" "}
                        We use your contact details to respond to inquiries.
                      </li>
                      <li>
                        <span className="font-semibold">
                          For Legal and Security Reasons:
                        </span>{" "}
                        We may process your data to comply with legal
                        obligations, detect fraud, and enforce terms of service.
                      </li>
                      <li>
                        <span className="font-semibold">
                          For Marketing and Advertising (with Consent):
                        </span>{" "}
                        We may send promotional emails and display targeted ads.
                        You can opt-out at any time.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.3 How We Share Your Information
                    </h3>
                    <p className="mb-4">
                      Luuls AI does not sell your personal data. We may share
                      data in the following cases:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">
                          With Service Providers:
                        </span>{" "}
                        We partner with cloud hosting providers (e.g., Amazon
                        Web Services, Google Cloud Platform) to process
                        AI-generated images securely.
                      </li>
                      <li>
                        <span className="font-semibold">
                          With Business Partners:
                        </span>{" "}
                        If you engage with third-party integrations, we may
                        share data with those partners based on your
                        preferences.
                      </li>
                      <li>
                        <span className="font-semibold">
                          With Law Enforcement:
                        </span>{" "}
                        If required by law, we may disclose your data to legal
                        authorities.
                      </li>
                      <li>
                        <span className="font-semibold">
                          During Business Transfers:
                        </span>{" "}
                        If Luuls AI undergoes a merger or acquisition, your data
                        may be transferred as part of the business transaction.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.4 Data Retention and Security
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Retention Period:</span>{" "}
                        AI-processed images and videos are deleted upon user's
                        request. Other personal data is retained as long as
                        necessary for business and legal compliance.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Security Measures:
                        </span>{" "}
                        We use encryption, secure access controls, and periodic
                        security audits to safeguard user data.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.5 Your Rights and Choices
                    </h3>
                    <p className="mb-4">
                      Depending on your jurisdiction, you may have the following
                      rights:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">
                          Access & Portability:
                        </span>{" "}
                        Request a copy of your personal data.
                      </li>
                      <li>
                        <span className="font-semibold">Correction:</span>{" "}
                        Update inaccurate or incomplete information.
                      </li>
                      <li>
                        <span className="font-semibold">Deletion:</span> Request
                        the removal of your personal data (subject to legal
                        obligations).
                      </li>
                      <li>
                        <span className="font-semibold">
                          Objection & Restriction:
                        </span>{" "}
                        Restrict how we process your data under certain
                        conditions.
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
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.6 Compliance with Privacy Laws
                    </h3>
                    <p className="mb-4">
                      Luuls AI is committed to complying with global data
                      protection laws, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">
                          General Data Protection Regulation (GDPR) (EU):
                        </span>{" "}
                        Users in the European Union have rights over their
                        personal data, including the right to access, rectify,
                        and delete their data, as well as to object to
                        processing.
                      </li>
                      <li>
                        <span className="font-semibold">
                          California Consumer Privacy Act (CCPA) (USA):
                        </span>{" "}
                        California residents have the right to know what
                        personal information is collected, request deletion, and
                        opt-out of the sale of their data.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Children's Online Privacy Protection Act (COPPA)
                          (USA):
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
                      <li>
                        <span className="font-semibold">
                          Other applicable national and international privacy
                          laws:
                        </span>{" "}
                        We ensure compliance with additional regional privacy
                        regulations where required.
                      </li>
                    </ul>
                    <p className="mt-4">
                      <b>
                        General Data Protection Regulation (GDPR) Compliance
                      </b>
                    </p>
                    <p className="mt-4">
                      If you are located within the European Economic Area
                      (EEA), we collect and process your data in accordance with
                      GDPR regulations. This section explains why and how your
                      data is collected, as well as the security measures in
                      place to prevent unauthorized access or misuse.
                    </p>

                    <p className="mt-4">
                      <b>GDPR Compliance and Data Protection</b>
                    </p>

                    <p className="mt-4">
                      The General Data Protection Regulation (GDPR) establishes
                      new obligations for companies regarding the collection and
                      processing of individuals' personal data. It also
                      strengthens compliance enforcement by increasing penalties
                      for data breaches. More importantly, adhering to GDPR is
                      fundamentally the right thing to do. At Luuls AI, we place
                      a high priority on data privacy and have already
                      implemented security and privacy measures that exceed
                      regulatory requirements.
                    </p>

                    <p className="mt-4">
                      <b>
                        Individual Data Subject Rights – Data Access,
                        Portability, and Deletion
                      </b>
                    </p>
                    <p className="mt-4">
                      We are committed to assisting our customers in complying
                      with GDPR requirements for data subject rights. Luuls AI
                      processes and stores personal data exclusively with
                      vetted, DPA-compliant vendors. All conversation and
                      personal data are retained for up to six years unless an
                      account is years unless an account is deleted. In that
                      case, all associated data is permanently erased within 60
                      days, in accordance with our Terms of Service and Privacy
                      Policy.
                    </p>
                    <p className="mt-4">
                      We recognize that businesses working with EU customers
                      must provide them with options to access, update,
                      retrieve, and delete personal data. Luuls AI is designed
                      as a self-service platform, allowing users to manage their
                      own and their customers' data. Our customer support team
                      is available to assist with any questions about API
                      interactions.
                    </p>

                    <p className="mt-4">
                      <b>California Residents’ Privacy Rights</b>
                    </p>
                    <p className="mt-4">
                      The California Consumer Privacy Act (CCPA) requires us to
                      disclose the categories of Personal Information collected,
                      its usage, sources, and third-party sharing policies, as
                      outlined in previous sections.
                    </p>
                    <b className="mt-4">
                      California residents have the following rights under state
                      law:
                    </b>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>
                        Categories of Personal Information we collect, use, or
                        share.
                      </li>
                      <li>
                        The purposes for which these categories are collected or
                        used.
                      </li>
                      <li>
                        Sources from which we obtain Personal Information.
                      </li>
                      <li>
                        Specific pieces of Personal Information we have
                        collected about you.
                      </li>
                    </ol>
                    {/* Right to Equal Service – Exercising privacy rights will not result in discrimination.
Right to Delete – You may request to close your account, and we will delete the collected Personal Information.
Right to Opt-Out of Data Sales – Luuls AI does not sell personal data; however, California law allows consumers to opt out of such sales where applicable. */}
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Right to Equal Service – Exercising privacy rights will
                        not result in discrimination.
                      </li>

                      <li>
                        Right to Delete – You may request to close your account,
                        and we will delete the collected Personal Information.
                      </li>

                      <li>
                        Right to Opt-Out of Data Sales – Luuls AI does not sell
                        personal data; however, California law allows consumers
                        to opt out of such sales where applicable.
                      </li>
                    </ul>
                    <p className="mt-4">
                      Requests must be responded to within one month. If you
                      wish to exercise these rights, please contact us.
                    </p>

                    <p className="mt-4">
                      We do not sell our users’ personal data. For further
                      details, please reach out to us.
                    </p>

                    <b className="mt-4">
                      {" "}
                      California Online Privacy Protection Act (CalOPPA)
                    </b>

                    <p className="mt-4">
                      CalOPPA mandates that we disclose the types of Personal
                      Information collected, its usage, sources, and third-party
                      sharing, all of which have been detailed above.
                    </p>

                    <p className="mt-4">
                      <b>CalOPPA users have the following rights:</b>
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Right to Know and Access – You may request details
                        about:
                        <ol className="list-decimal pl-6 space-y-2">
                          <li>
                            Categories of Personal Information collected, used,
                            or shared.
                          </li>
                          <li>
                            The purposes for collecting or using this data.
                          </li>
                          <li>
                            Sources from which we obtain Personal Information.
                          </li>
                          <li>
                            Specific Personal Information stored about you.
                          </li>
                        </ol>
                      </li>

                      <li>
                        Right to Equal Service – We do not discriminate based on
                        privacy choices.
                      </li>

                      <li>
                        Right to Delete – You may request to close your account,
                        and we will delete your Personal Information.
                      </li>

                      <li>
                        Right to Opt-Out of Data Sales – Luuls AI does not sell
                        user data.
                      </li>
                    </ul>

                    <p className="mt-4">
                      Requests are addressed within one month. If you wish to
                      exercise any of these rights, contact us.
                    </p>

                    <p className="mt-4">
                      For further inquiries, please reach out to us.
                    </p>

                    {/* //... */}
                    <p className="mt-4">
                      For inquiries regarding legal compliance, please contact
                      our Data Protection Officer at info@crenno.com
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.7 Children's Privacy
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-semibold">Age Restriction:</span>{" "}
                        The App and Site are not intended for children under 13
                        (or the applicable legal age in your country).
                      </li>
                      <li>
                        <span className="font-semibold">Parental Consent:</span>{" "}
                        If we learn that a child's data has been collected
                        without parental consent, we will delete it. Parents can
                        request data removal by contacting info@crenno.com
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.8 International Data Transfers
                    </h3>
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
                        Technical security measures such as encryption and
                        access restrictions.
                      </li>
                      <li>
                        Legal compliance frameworks based on country-specific
                        data protection laws.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.9 Changes to This Privacy Policy
                    </h3>
                    <p className="mb-4">
                      We may update this Privacy Policy to reflect changes in
                      our practices. Significant updates will be communicated
                      through:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>App notifications</li>
                      <li>Website announcements</li>
                      <li>Email notifications (if applicable)</li>
                    </ul>
                    <p className="mt-4">
                      Your continued use of Luuls AI after any updates indicates
                      your acceptance of the revised Privacy Policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      2.10 Contact Us
                    </h3>
                    <p>
                      For any questions about this Privacy Policy or your data,
                      please contact us:
                    </p>
                    <p className="mt-4">Email: info@crenno.com</p>
                  </div>
                </div>
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

      <StackedCircularFooter />
    </>
  );
}
