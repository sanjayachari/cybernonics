"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef, JSX } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaChevronDown,
  FaRobot,
  FaShieldAlt,
  FaCloud,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";

interface NavLink {
  name: string;
  icon: JSX.Element;
  url: string;
}

interface NavItem {
  name: string;
  links: NavLink[];
}

const navItems: NavItem[] = [
  {
    name: "CONSULTING",
    links: [
      { name: "AI Consulting", icon: <FaRobot />, url: "/consulting/ai-consulting" },
      { name: "Cybersecurity Consulting", icon: <FaShieldAlt />, url: "/consulting/cybersecurity-consulting" },
      { name: "AWS Consulting", icon: <FaCloud />, url: "/consulting/aws-consulting" },
      { name: "VMware Consulting", icon: <FaCloud />, url: "/consulting/vmware-consulting" },
      { name: "Website Development", icon: <FaLaptopCode />, url: "/consulting/website-development" },
      { name: "App Development", icon: <FaMobileAlt />, url: "/consulting/app-development" },
      { name: "Digital Media", icon: <FaPaintBrush />, url: "/consulting/digital-media" },
      { name: "Consulting", icon: <FaLaptopCode />, url: "/consulting/general" },
      { name: "Training and Certifications", icon: <FaGraduationCap />, url: "/consulting/training-certifications" },
    ],
  },
  {
    name: "ADVISORY",
    links: [
      { name: "Strategic Advisory", icon: <FaUsers />, url: "/advisory/strategic-advisory" },
      { name: "Technology Advisory", icon: <FaLaptopCode />, url: "/advisory/technology-advisory" },
      { name: "Digital Transformation", icon: <FaCloud />, url: "/advisory/digital-transformation" },
      { name: "Risk Management", icon: <FaShieldAlt />, url: "/advisory/risk-management" },
      { name: "Compliance Advisory", icon: <FaGraduationCap />, url: "/advisory/compliance-advisory" },
    ],
  },
  {
    name: "PRODUCTS",
    links: [
      { name: "Software Solution", icon: <FaLaptopCode />, url: "/products/software-solution" },
      { name: "Security Tool", icon: <FaShieldAlt />, url: "/products/security-tool" },
      { name: "Cloud Platform", icon: <FaCloud />, url: "/products/cloud-platform" },
      { name: "Mobile Application", icon: <FaMobileAlt />, url: "/products/mobile-application" },
      { name: "Enterprise Solutions", icon: <FaUsers />, url: "/products/enterprise-solutions" },
    ],
  },
  {
    name: "STAFFING",
    links: [
      { name: "IT Staffing", icon: <FaUsers />, url: "/staffing/it-staffing" },
      { name: "Contract Staffing", icon: <FaUsers />, url: "/staffing/contract-staffing" },
      { name: "Permanent Placement", icon: <FaUsers />, url: "/staffing/permanent-placement" },
      { name: "Project Teams", icon: <FaUsers />, url: "/staffing/project-teams" },
      { name: "Talent Acquisition", icon: <FaUsers />, url: "/staffing/talent-acquisition" },
    ],
  },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 500);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-md bg-white" : "py-6"
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-6 md:gap-12">
          <Link href="/" className="flex-shrink-0">
            <Image src="/brand_logo1.png" alt="Logo" width={180} height={50} priority />
          </Link>

          <div className="hidden md:block w-px h-10 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-200"></div>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium relative">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Dropdown trigger */}
                <div className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-300 font-semibold cursor-pointer">
                  {item.name} <FaChevronDown size={12} />
                </div>

                <ul
                  className={`
                    absolute top-full left-0 mt-2 min-w-[220px] bg-white rounded-xl shadow-xl overflow-hidden
                    transition-all duration-300 transform origin-top z-50
                    ${openDropdown === idx ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
                  `}
                >
                  {item.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.url}
                        className="flex items-center gap-2 px-5 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap border-b border-black border-opacity-10 last:border-b-0"
                      >
                        {link.icon} <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/schedule-call"
            className="hidden md:inline px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            SCHEDULE A CALL
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-3xl text-gray-800"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 rounded-b-4xl">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4 text-gray-700 font-medium">
            {navItems.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {/* Mobile dropdown toggle */}
                <div
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="w-full text-left flex justify-between items-center px-4 py-2 hover:bg-blue-50 cursor-pointer"
                >
                  {item.name} <FaChevronDown size={12} />
                </div>
                {openDropdown === idx && (
                  <ul className="bg-gray-50">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.url}
                          className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:bg-blue-100 border-b border-black border-opacity-10 last:border-b-0"
                        >
                          {link.icon} <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link
              href="/schedule-call"
              className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg block text-center"
            >
              SCHEDULE A CALL
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
