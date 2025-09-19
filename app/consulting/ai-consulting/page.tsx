"use client";

import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import Link from "next/link";
import { 
  FaRobot, FaLaptopCode, FaCloud, FaChartLine, FaLightbulb, FaShieldAlt,
  FaCogs, FaBrain, FaCheckCircle, FaRocket
} from "react-icons/fa";

export default function AIConsultingPage() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <Navbar />
      </div>

      {/* Hero Section */}
      <main className="mt-28">
        <div className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-blue-600 to-blue-700">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-[300px] sm:h-[400px] bg-white/30 blur-3xl rounded-full"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              AI Consulting
            </h1>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl">
              Transform your business with AI-powered solutions. Our AI consulting
              services help you leverage cutting-edge technology to optimize operations,
              improve decision-making, and drive innovation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/schedule-call"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition"
              >
                Schedule a Call
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/20 hover:-translate-y-1 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Services / Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Our AI Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                <FaRobot size={40} className="text-blue-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">AI Strategy & Roadmap</h3>
                <p className="text-gray-600 text-sm">
                  Define a clear AI strategy to align technology with business goals.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                <FaLaptopCode size={40} className="text-green-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">AI Solution Development</h3>
                <p className="text-gray-600 text-sm">
                  Build AI models and applications tailored to your unique requirements.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                <FaCloud size={40} className="text-purple-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Cloud AI Integration</h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly integrate AI solutions into your cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Why Choose Our AI Consulting</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                <FaChartLine size={40} className="text-blue-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Business Growth</h3>
                <p className="text-gray-600 text-sm">
                  Leverage AI to optimize processes, increase efficiency, and drive measurable business growth.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                <FaLightbulb size={40} className="text-yellow-500 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Innovation & Ideas</h3>
                <p className="text-gray-600 text-sm">
                  Stay ahead with innovative AI solutions and data-driven decision-making.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                <FaShieldAlt size={40} className="text-red-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Security & Compliance</h3>
                <p className="text-gray-600 text-sm">
                  Ensure your AI solutions are secure, compliant, and reliable for business-critical operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Our AI Consulting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <FaBrain size={40} className="text-purple-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm text-center">
                  Understand your business goals and identify AI opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <FaCogs size={40} className="text-green-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Planning</h3>
                <p className="text-gray-600 text-sm text-center">
                  Create a detailed roadmap and select the right AI technologies.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <FaRocket size={40} className="text-blue-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Implementation</h3>
                <p className="text-gray-600 text-sm text-center">
                  Develop, train, and deploy AI solutions tailored to your needs.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <FaCheckCircle size={40} className="text-yellow-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Optimization</h3>
                <p className="text-gray-600 text-sm text-center">
                  Continuously monitor and improve AI performance and outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mb-8 max-w-2xl text-blue-100">
              Our expert AI consultants are ready to guide your business towards
              smarter, data-driven decisions. Lets start your AI journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/schedule-call"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition"
              >
                Schedule a Call
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/20 hover:-translate-y-1 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
