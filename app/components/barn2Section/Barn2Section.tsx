"use client";
import React, { JSX } from "react";
import {
  FaUserTie,
  FaShieldAlt,
  FaPaintBrush,
  FaHeartbeat,
  FaBrain,
  FaCloud,
} from "react-icons/fa";

interface Stat {
  value: string;
  label: string;
}

interface Industry {
  icon: JSX.Element;
  title: string;
  desc: string;
  bg: string;
}

export default function IndustriesSection() {
  const stats: Stat[] = [
    { value: "10K+", label: "Companies" },
    { value: "500+", label: "Projects" },
    { value: "50K+", label: "Professionals" },
  ];

  const industries: Industry[] = [
    {
      icon: <FaUserTie className="text-3xl text-blue-600" />,
      title: "IT & Recruiting",
      desc: "Talent acquisition and staffing for global businesses.",
      bg: "from-blue-50 to-blue-100",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-700" />,
      title: "Cybersecurity",
      desc: "Protecting businesses with advanced digital security.",
      bg: "from-blue-100 to-blue-200",
    },
    {
      icon: <FaPaintBrush className="text-3xl text-blue-500" />,
      title: "UI/UX Design",
      desc: "Designing seamless user experiences across platforms.",
      bg: "from-blue-50 to-white",
    },
    {
      icon: <FaHeartbeat className="text-3xl text-blue-600" />,
      title: "Healthcare",
      desc: "Innovating solutions for modern healthcare challenges.",
      bg: "from-blue-100 to-blue-50",
    },
    {
      icon: <FaBrain className="text-3xl text-blue-700" />,
      title: "AI & Data",
      desc: "Unlocking insights through AI and machine learning.",
      bg: "from-white to-blue-50",
    },
    {
      icon: <FaCloud className="text-3xl text-blue-600" />,
      title: "Cloud & DevOps",
      desc: "Scalable infrastructure and automation solutions.",
      bg: "from-blue-50 to-blue-200",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left content */}
        <div className="mb-12 lg:mb-0">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-5 shadow-sm">
            🌐 Why Choose Us?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Driving Innovation <br /> Across Industries
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-10">
            From IT staffing to cutting-edge AI, we deliver solutions tailored
            to businesses of all sizes worldwide.
          </p>

          <div className="flex flex-wrap gap-8 sm:gap-12">
            {stats.map((item, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-semibold text-blue-700">
                  {item.value}
                </p>
                <p className="text-gray-500 text-sm sm:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {industries.map((ind, i) => (
            <div
              key={i}
              className={`
                bg-gradient-to-br ${ind.bg} p-6 rounded-2xl shadow-lg backdrop-blur-sm transition transform hover:scale-105 hover:shadow-xl
                ${i % 2 === 0 ? "sm:translate-y-5" : "sm:-translate-y-5"} translate-y-0
              `}
            >
              <div className="mb-4">{ind.icon}</div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{ind.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
