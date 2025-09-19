"use client";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Service from "./components/service/Service";
import { FaUserTie, FaBoxOpen, FaUsers } from "react-icons/fa";
import Barn2Section from "./components/barn2Section/Barn2Section";
import Showcase from "./components/showcase/Showcase";
import Link from "next/link";

const services = [
  { name: "Consulting Services", icon: <FaUserTie size={24} /> },
  { name: "Advisory Services", icon: <FaUserTie size={24} /> },
  { name: "Products", icon: <FaBoxOpen size={24} /> },
  { name: "Staffing Solutions", icon: <FaUsers size={24} /> },
  { name: "Staffing Solutions", icon: <FaUsers size={24} /> },
];

export default function Home() {
  return (
    <>
      {/* ✅ Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <Navbar />
      </div>

      {/* ✅ Hero Section */}
      <main className="mt-28 relative">
        <div className="m-2 rounded-3xl relative overflow-hidden py-20 lg:py-32 h-full md:min-h-[88vh] flex items-center">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-700"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-[300px] sm:h-[400px] bg-white/30 blur-3xl rounded-full"></div>

          {/* ✅ Content Wrapper with Max Width */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Text */}
              <div className="text-white space-y-6 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                Empowering Your Digital Future
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-xl mx-auto lg:mx-0">
                  Cybernonics delivers modern, AI-powered healthcare solutions
                  designed to transform patient care, streamline operations, and
                  bring innovation to the medical field.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link href={'/contact'} className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                    Get Started
                  </Link>
                  <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/20 hover:-translate-y-1 transition">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Side - Card */}
              <div className="flex justify-center relative">
                <div className="relative w-full max-w-sm">
                  {/* Tilted Background */}
                  <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-2 bg-white/70 rounded-2xl shadow-lg"></div>
                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                    <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
                      Security Overview
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm mb-6">
                      Real-time protection metrics
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-green-600 font-bold text-lg sm:text-xl">19</p>
                        <p className="text-gray-600 text-xs sm:text-sm">Threats Blocked</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-blue-600 font-bold text-lg sm:text-xl">99.9%</p>
                        <p className="text-gray-600 text-xs sm:text-sm">Uptime</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-purple-600 font-bold text-lg sm:text-xl">24/7</p>
                        <p className="text-gray-600 text-xs sm:text-sm">Monitoring</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-orange-600 font-bold text-lg sm:text-xl">365+</p>
                        <p className="text-gray-600 text-xs sm:text-sm">Reports</p>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                      Secure Your Business
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Services at Bottom */}
          <div className="absolute bottom-0 w-full bg-blue-800/50 py-4 lg:block hidden">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between gap-6 px-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-white text-xs sm:text-sm">
                  {service.icon}
                  <p>{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ✅ Bottom Sections */}
      <Barn2Section />
      <Service />
      <Showcase />
      <Footer />
    </>
  );
}
