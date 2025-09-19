import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

// app/privacy/page.tsx
export const metadata = {
  title: "Privacy Policy – Cybernonics",
  description:
    "Learn how Cybernonics collects, uses, and safeguards your data when you engage with our consulting, technology, and healthcare solutions.",
  keywords:
    "Privacy Policy, Cybernonics privacy, data protection, AI consulting privacy, healthcare data security",
  alternates: {
    canonical: "https://cybernonics.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <Navbar />
      </div>

      {/* Privacy Content */}
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          At <strong>Cybernonics</strong>, we value and respect your privacy. This Privacy Policy explains how we collect, 
          use, and safeguard your information when you use our consulting, technology, and digital solutions. 
          By engaging with our services, you agree to the practices outlined here.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          We may collect personal details such as your name, email address, company information, project requirements, 
          and professional interests when you contact us, request services, or subscribe to updates. 
          Non-personal information, such as browser type and site usage analytics, may also be collected.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          The data we collect is used to deliver and improve our services, including consulting, product development, 
          and security solutions. We may also use your information to communicate updates, share insights, 
          and provide tailored recommendations aligned with your business goals.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. Sharing of Information</h2>
        <p className="text-gray-600 mb-4">
          We do not sell your personal information. We may share limited data with trusted partners or service providers 
          who assist us in delivering secure and effective solutions. These third parties are contractually obligated 
          to maintain confidentiality and comply with applicable privacy standards.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">4. Cookies & Tracking</h2>
        <p className="text-gray-600 mb-4">
          Our website may use cookies and similar tracking technologies to enhance user experience, 
          analyze site performance, and personalize content. You can disable cookies through your browser settings, 
          though some features of our site may not function properly without them.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">5. Data Security</h2>
        <p className="text-gray-600 mb-4">
          We implement industry-standard measures, including encryption and access controls, to protect your information. 
          While we strive for maximum security, no online system is completely immune from risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">6. International Users</h2>
        <p className="text-gray-600 mb-4">
          If you access Cybernonics services from outside India, please note that your data may be processed 
          and stored in accordance with Indian laws and applicable global standards.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">7. Contact Us</h2>
        <p className="text-gray-600 mb-4">
          For questions, concerns, or requests related to this Privacy Policy, please contact us at:{" "}
          <a
            href="mailto:contact@cybernonics.com"
            className="text-blue-600 underline ml-1"
          >
            contact@cybernonics.com
          </a>
        </p>

        <p className="text-gray-600 mt-8">Last updated: September 2025</p>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
