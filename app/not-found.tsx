// app/coming-soon/page.tsx
"use client";

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";

export default function ComingSoonPage() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <Navbar />
      </div>

      {/* Coming Soon Hero */}
      <main className="mt-28 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="text-blue-600 mb-6 animate-bounce">
          <FaRocket size={80} />
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-gray-800">
          Coming Soon
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-600">
          Were Launching Something Awesome!
        </h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Our team is working hard to bring you this feature. Stay tuned and check back soon!
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition"
        >
          Go Back Home
        </Link>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
