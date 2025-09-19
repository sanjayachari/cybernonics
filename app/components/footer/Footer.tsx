"use client";

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 md:pt-20">
      <div className="max-w-7xl mx-auto md:px-0 px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-[#005250]">
                          <Image src="/brand_logo1.png" alt="Logo" width={180} height={50} priority />
              
            </h2>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Cybernonics delivers innovative, AI-driven healthcare solutions to transform patient care, streamline operations, and enable businesses to thrive in the digital era.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/about"
                  title="Learn more about Cybernonics"
                  className="hover:text-[#005250]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  title="Contact Cybernonics team"
                  className="hover:text-[#005250]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  title="Privacy Policy of Cybernonics"
                  className="hover:text-[#005250]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  title="Terms of Service for using Cybernonics"
                  className="hover:text-[#005250]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/consulting/ai-consulting"
                  title="Explore our AI consulting services"
                  className="hover:text-[#005250]"
                >
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting/cybersecurity-consulting"
                  title="Explore cybersecurity consulting"
                  className="hover:text-[#005250]"
                >
                  Cybersecurity Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  title="Discover our products"
                  className="hover:text-[#005250]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/staffing-solutions"
                  title="Explore staffing and enterprise solutions"
                  className="hover:text-[#005250]"
                >
                  Staffing Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Follow Us
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Stay updated with our latest insights, AI solutions, and healthcare innovations.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                title="Follow us on Facebook"
                className="text-gray-500 hover:text-[#005250]"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                title="Follow us on Twitter"
                className="text-gray-500 hover:text-[#005250]"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                title="Follow us on Instagram"
                className="text-gray-500 hover:text-[#005250]"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                title="Connect with us on LinkedIn"
                className="text-gray-500 hover:text-[#005250]"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cybernonics. All rights reserved. Crafted with innovation and AI-driven excellence.
        </div>
      </div>
    </footer>
  );
}
