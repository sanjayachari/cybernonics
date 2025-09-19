"use client";

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import Link from "next/link";
import { FaShieldAlt, FaLock, FaUserShield, FaNetworkWired, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

export default function CyberSecurityConsultingPage() {

  const features = [
    {
      icon: <FaShieldAlt size={36} className="text-blue-600" />,
      title: "Risk Assessment",
      description: "Comprehensive analysis to identify vulnerabilities and threats across your organization’s digital infrastructure."
    },
    {
      icon: <FaLock size={36} className="text-blue-600" />,
      title: "Security Architecture",
      description: "Custom-designed secure systems tailored to your specific IT infrastructure and business needs."
    },
    {
      icon: <FaUserShield size={36} className="text-blue-600" />,
      title: "Identity & Access Management",
      description: "Robust solutions to control access, protect sensitive data, and ensure secure user authentication."
    },
    {
      icon: <FaNetworkWired size={36} className="text-blue-600" />,
      title: "Network Security",
      description: "Advanced protection to safeguard your network from intrusions, malware, and cyberattacks."
    },
    {
      icon: <FaCheckCircle size={36} className="text-blue-600" />,
      title: "Compliance & Auditing",
      description: "Ensure compliance with industry standards and regulations through thorough audits and reporting."
    }
  ];

  const metrics = [
    { label: "Clients Secured", value: "120+" },
    { label: "Threats Blocked", value: "15K+" },
    { label: "24/7 Monitoring", value: "Yes" },
    { label: "Years Experience", value: "10+" }
  ];

  const testimonials = [
    {
      quote: "Their expertise in cybersecurity transformed our business operations, ensuring robust protection and compliance.",
      author: "Jane Doe, CTO at TechCorp",
      company: "TechCorp"
    },
    {
      quote: "The team’s proactive approach to network security saved us from a major breach. Highly recommended!",
      author: "John Smith, CEO at Innovate Solutions",
      company: "Innovate Solutions"
    }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <Navbar />
      </div>

      {/* Hero Section */}
      <main className="mt-28">
        <div className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-blue-900 to-blue-700">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-[400px] sm:h-[500px] bg-white/10 blur-3xl rounded-full"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="text-center lg:text-left text-white max-w-2xl space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight">
                Cybersecurity Consulting
              </h1>
              <p className="text-blue-100 text-lg sm:text-xl leading-relaxed">
                Safeguard your digital assets with our expert cybersecurity consulting services. We empower businesses to prevent breaches, ensure compliance, and build resilient defenses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
                <Link
                  href="/schedule-call"
                  className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 hover:-translate-y-1 transition duration-300"
                >
                  Schedule a Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/20 hover:-translate-y-1 transition duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 bg-blue-600/20 rounded-2xl shadow-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 text-center transform hover:scale-105 transition duration-300">
                <h2 className="text-2xl font-bold text-blue-700 mb-3">Security Snapshot</h2>
                <p className="text-gray-600 mb-6 text-sm">Real-time insights into our protection capabilities</p>
                <ul className="flex flex-col gap-4 text-gray-700">
                  <li className="flex items-center gap-3 justify-center">
                    <FaShieldAlt className="text-blue-600" /> Risk Assessment
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <FaLock className="text-blue-600" /> Security Architecture
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <FaUserShield className="text-blue-600" /> Identity & Access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Cybersecurity Services</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Comprehensive solutions designed to protect your business from evolving cyber threats.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                >
                  <div className="mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((metric, idx) => (
              <div key={idx} className="space-y-3">
                <p className="text-4xl font-extrabold">{metric.value}</p>
                <p className="uppercase text-sm font-medium tracking-wider">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Hear from businesses that trust us to secure their digital futures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
                  <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                  <p className="text-gray-800 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Secure Your Business Today</h2>
          <p className="mb-8 max-w-2xl mx-auto text-blue-100 text-lg">
            Partner with our cybersecurity experts to protect your digital assets and ensure compliance. Start with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/schedule-call"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 hover:-translate-y-1 transition duration-300"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/20 hover:-translate-y-1 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}