"use client";
import React from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";

interface Project {
  title: string;
  desc: string;
  img: string;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  active: boolean;
}

const projects: Project[] = [
  {
    title: "Healthcare AI Dashboard",
    desc: "Developed an AI-powered dashboard to monitor patient health metrics and predict risks in US hospitals.",
    img: "/healthcare.jpg",
  },
  {
    title: "Telemedicine App UI",
    desc: "Designed a user-friendly mobile interface for telehealth consultations and remote patient monitoring.",
    img: "/app-ui.jpg",
  },
  {
    title: "US Healthcare Recruitment Platform",
    desc: "Built a recruitment portal for US hospitals to source and match healthcare professionals efficiently.",
    img: "/healthcare-home-2.png",
  },
  {
    title: "Cybersecurity Threat Monitor",
    desc: "Implemented a real-time threat detection system for US healthcare networks to prevent data breaches.",
    img: "/cybersecurity-home.jpg",
  },
  {
    title: "AI Patient Care Automation",
    desc: "Automated patient scheduling, follow-ups, and care recommendations using AI algorithms.",
    img: "/patient-care.jpg",
  },
  {
    title: "Secure Data Exchange System",
    desc: "Developed a HIPAA-compliant secure platform for sharing sensitive medical data between clinics.",
    img: "/data-security.jpg",
  },
  {
    title: "US Recruiting Analytics",
    desc: "Created analytics dashboards for recruiting firms to track candidate pipelines and hiring trends in the US market.",
    img: "/analytics.jpg",
  },
  {
    title: "Cybersecurity Awareness Training",
    desc: "Designed interactive training modules for healthcare staff to mitigate phishing and cyber threats.",
    img: "/cyberSecurityTraining.jpg",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Job Ghadzi",
    role: "Co-Founder DC agency",
    text: "The material is really updated, so I don’t think I need to go to college, because here is enough.",
    active: false,
  },
  {
    name: "James Son",
    role: "Senior Entrepreneur",
    text: "Very different from conventional agency, this one is easier, easier to learn and easy to remember",
    active: true,
  },
  {
    name: "James Son",
    role: "Senior Entrepreneur",
    text: "Again wfh like this it’s not comfortable just learning via zoom at school",
    active: false,
  },
];

const Showcase: React.FC = () => {
  return (
    <section className="bg-gray-50">
      {/* Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 leading-snug">
            Projects We <br />
            <span className="text-blue-600">have Completed</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gray-900 text-white px-4 sm:px-5 py-2 rounded-lg text-sm font-medium">
              Start New Project
            </button>
            <button className="bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-lg text-sm font-medium">
              View All Work
            </button>
          </div>
        </div>

        {/* First row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 mb-6">
          {projects.slice(0, 4).map((project, idx) => {
            const spanClass = idx === 0 ? "md:col-span-3" : "md:col-span-1";
            return (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden shadow-lg ${spanClass}`}
              >
                <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-2xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <h3 className="text-gray-900 font-semibold text-sm line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          {projects.slice(4, 8).map((project, idx) => {
            const isLast = idx === 3;
            const spanClass = isLast ? "md:col-span-3" : "md:col-span-1";

            if (isLast) {
              return (
                <div
                  key={idx + 4}
                  className={`relative rounded-2xl overflow-hidden shadow-lg ${spanClass} flex items-center justify-center bg-blue-100 text-black p-6`}
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center line-clamp-2">
                    Discover Our Innovative Projects
                  </h2>
                </div>
              );
            }

            return (
              <div
                key={idx + 4}
                className={`relative rounded-2xl overflow-hidden shadow-lg ${spanClass}`}
              >
                <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-2xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <h3 className="text-gray-900 font-semibold text-sm line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-12">
          What Our <br />
          <span className="text-blue-600">Satisfied Client Say</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 transition ${
                t.active
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                  <FaUser size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{t.name}</h4>
                  <p
                    className={`text-xs ${
                      t.active ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
              <p
                className={`${
                  t.active ? "text-white/90" : "text-gray-600"
                } text-sm leading-relaxed`}
              >
                {t.text}
              </p>
              <button
                className={`flex items-center gap-2 mt-4 text-sm font-medium ${
                  t.active ? "text-white" : "text-gray-700"
                }`}
              >
                Learn more <FaArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
