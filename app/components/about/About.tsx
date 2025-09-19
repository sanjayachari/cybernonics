import React from 'react'

export default function About() {
  return (
    <section className="bg-gradient-to-br from-violet-100 via-sky-100 to-emerald-100 py-40 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
          About Cybernonics
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
          Cybernonics is a forward-thinking technology solutions company with a core mission: 
          to harness the power of <strong>AI, data, and digital innovation</strong> to make 
          healthcare smarter, safer, and more accessible. We focus on building scalable, 
          future-ready solutions that empower organizations and transform patient care.
        </p>

        <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow p-6 sm:p-10 text-left text-gray-700 space-y-5">
          <p>
            🚀 We&#39;re more than just a consulting firm. Cybernonics delivers a unique blend 
            of <strong>AI-driven insights, cybersecurity expertise, and product innovation</strong> 
            tailored to healthcare and enterprise needs. Our solutions integrate seamlessly into 
            existing systems while elevating efficiency and security.
          </p>
          <p>
            🔍 From <strong>AI-powered consulting</strong> to 
            <strong>staffing and enterprise solutions</strong>, we approach every challenge with a 
            balance of technical precision and strategic foresight. Our frameworks are built to 
            scale with the rapidly evolving healthcare and technology landscape.
          </p>
          <p>
            🎯 Our ultimate goal is simple: 
            <strong> empower organizations with tools that reduce complexity, enhance trust, 
            and drive innovation</strong> in critical industries like healthcare, life sciences, 
            and digital enterprises.
          </p>
        </div>

        <p className="mt-10 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          At Cybernonics, we believe the future of healthcare and enterprise lies in 
          <strong> intelligent, adaptive, and secure technologies</strong>. 
          Together, we can shape that future.
        </p>
      </div>
    </section>
  )
}
