'use client'

export default function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-2xl text-center py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Cybernonics</h1>
        <p className="text-lg text-gray-600 mb-10">
          We’d love to hear from you! Whether it’s feedback, a question, or a partnership inquiry — drop us a message.
        </p>

        <ul className="space-y-6 text-lg text-gray-700">
          <li>
            📧 Email:{' '}
            <a
              href="mailto:contact@cybernonics.com"
              className="underline hover:text-blue-600"
            >
              contact@cybernonics.com
            </a>
          </li>
          <li>📍 Location: Delhi, India</li>
          <li>
            📞 Phone:{' '}
            <a
              href="tel:+918765432100"
              className="underline hover:text-blue-600"
            >
              +91 8383095209
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
