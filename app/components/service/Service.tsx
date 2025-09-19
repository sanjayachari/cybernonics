// components/Service.tsx
import React from "react";
import {
  FaStar,
  FaCheckCircle,
  FaUsers,
  FaBolt,
  FaClipboardList,
  FaDatabase,
  FaBrain,
  FaCogs,
} from "react-icons/fa";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Accelerator {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    icon: <FaStar size={28} className="text-cyan-400 mb-2" />,
    title: "Healthcare Expertise",
    description:
      "Deep AI and healthcare domain knowledge to optimize patient outcomes.",
  },
  {
    icon: <FaCheckCircle size={28} className="text-cyan-400 mb-2" />,
    title: "Proven Solutions",
    description:
      "AI-driven automation and predictive analytics to improve hospital efficiency and patient care.",
  },
  {
    icon: <FaUsers size={28} className="text-cyan-400 mb-2" />,
    title: "Top Talent",
    description:
      "Access to AI, healthcare, and recruitment experts to accelerate your healthcare initiatives.",
  },
];

const accelerators: Accelerator[] = [
  {
    title: "AI Patient Care Accelerator",
    desc: "Deploy AI to improve diagnostics, monitoring, and patient engagement.",
    icon: <FaBolt size={50} className="text-cyan-400 opacity-20" />,
  },
  {
    title: "Healthcare Data Readiness",
    desc: "Assess data quality, gaps, and readiness for AI-driven healthcare automation.",
    icon: <FaClipboardList size={50} className="text-cyan-400 opacity-20" />,
  },
  {
    title: "Recruitment AI",
    desc: "Automate candidate sourcing and matching for hospitals and clinics.",
    icon: <FaDatabase size={50} className="text-cyan-400 opacity-20" />,
  },
  {
    title: "n8n Workflow Automation",
    desc: "Connect healthcare apps and automate repetitive tasks using n8n workflows.",
    icon: <FaBrain size={50} className="text-cyan-400 opacity-20" />,
  },
  {
    title: "AI Compliance & Reporting",
    desc: "Ensure healthcare data is used ethically and meets regulatory standards.",
    icon: <FaCogs size={50} className="text-cyan-400 opacity-20" />,
  },
  {
    title: "Predictive Analytics",
    desc: "Leverage AI to forecast patient load, resources, and treatment outcomes.",
    icon: <FaCogs size={50} className="text-cyan-400 opacity-20" />,
  },
];

const Service: React.FC = () => {
  return (
    <div className="m-2 rounded-3xl overflow-hidden shadow-xl">
      <section
        className="relative text-white py-16 px-4 md:px-12 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/blue-bg-1.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              AI for Healthcare Made Easy
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-cyan-400 mt-2">
              Implemented Effectively
            </h3>
            <p className="mt-4 text-gray-300">
              We act as{" "}
              <span className="font-semibold">your healthcare guide</span>,
              helping hospitals and clinics adopt AI safely while improving
              operational efficiency and patient care.
            </p>
          </div>

          {/* Features */}
          <div className="mt-16 border-t border-white/20 pt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl bg-white/10 p-6 backdrop-blur-md hover:bg-white/20 hover:backdrop-blur-lg transition"
              >
                {feature.icon}
                <h4 className="text-xl font-semibold mt-2">{feature.title}</h4>
                <p className="text-gray-300 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Core Services */}
          <div className="mt-16 border-t border-white/20 pt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Core Services</h3>
            <p className="text-gray-300 mt-2">
              AI, automation, and recruitment solutions for healthcare
              organizations.
            </p>
          </div>

          {/* Accelerators */}
          <div className="text-white py-16 px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {accelerators.map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md relative bg-white/10 p-8 rounded-2xl transition flex flex-col items-center justify-center aspect-square text-center group hover:border-white/50"
                >
                  {/* Background icon in right-bottom corner */}
                  <span className="absolute bottom-4 right-4 text-white text-[80px] opacity-90 pointer-events-none select-none transition-opacity duration-600 group-hover:opacity-100">
                    {item.icon}
                  </span>

                  <h3 className="font-semibold text-lg z-10">{item.title}</h3>
                  <p className="mt-2 text-gray-300 z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
