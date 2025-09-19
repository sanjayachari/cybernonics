import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

// pages/terms.tsx
export const metadata = {
  title: "Terms of Service – Cybernonics",
  description:
    "Read the terms of using Cybernonics. Understand your rights and responsibilities when engaging with our AI healthcare solutions and services.",
  keywords:
    "Terms of Service, Cybernonics terms, AI healthcare solutions, consulting terms",
  alternates: {
    canonical: "https://cybernonics.in/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-4">
          Welcome to Cybernonics. By accessing or using our website and services, you agree to be bound by the following Terms of Service.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">
          By using Cybernonics, you acknowledge that you’ve read, understood, and accepted these terms. If you don’t agree, please do not use our site or services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. Use of Platform</h2>
        <p className="text-gray-600 mb-4">
          Our platform and solutions are intended for clients, partners, and users seeking AI healthcare consulting and technology services. Any misuse may result in restricted access.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. Intellectual Property</h2>
        <p className="text-gray-600 mb-4">
          All content, logos, technologies, and designs are the property of Cybernonics and may not be copied, distributed, or reused without prior written permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">4. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update these Terms at any time. Continued use of the site and our services means you accept the updated terms.
        </p>

        <p className="text-gray-600 mt-8">Last updated: July 2025</p>
      </main>

      <Footer />
    </>
  );
}
