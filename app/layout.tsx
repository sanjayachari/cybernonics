import { ReactNode } from "react";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Cybernonics | AI & Technology Consulting",
  description:
    "Cybernonics delivers AI, automation, cloud, and cybersecurity consulting to help businesses scale with intelligent and secure technology solutions.",
  keywords:
    "Cybernonics, AI consulting, cybersecurity consulting, enterprise automation, cloud solutions, data consulting, technology strategy",
  authors: [{ name: "Cybernonics" }],
  robots: "index, follow",
  openGraph: {
    title: "Cybernonics | AI & Technology Consulting",
    siteName: "Cybernonics",
    description:
      "Future-ready consulting in AI, cybersecurity, cloud, and enterprise automation. Cybernonics helps businesses build intelligent and secure solutions.",
    url: "https://cybernonics.in",
    type: "website",
    images: [
      {
        url: "https://cybernonics.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Cybernonics Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Cybernonics",
    title: "Cybernonics | AI & Technology Consulting",
    description:
      "Cybernonics provides AI, cybersecurity, cloud, and enterprise automation consulting for scalable, secure, and intelligent growth.",
    images: ["https://cybernonics.in/logo.png"],
  },
  alternates: {
    canonical: "https://cybernonics.in",
    languages: {
      "en-IN": "https://cybernonics.in",
      "x-default": "https://cybernonics.in",
    },
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children } : {
    children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="SvrjJ8IGUCQMNuQE6DEjL8pqkfvS6IR6-b3b9hKvLiY"
        />

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="UQAthmzrH5KlpQGz7+tKHg"
          strategy="beforeInteractive"
        />

        {/* Structured Data */}
        <Script
          type="application/ld+json"
          id="structured-data-org"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "freshertoday",
              url: "https://freshertoday.in",
              logo: "https://freshertoday.in/logo.png",
              description: metadata.description,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7676997759",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.linkedin.com/company/freshertoday",
                "https://www.instagram.com/freshertoday",
                "https://twitter.com/freshertoday",
              ],
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4MNK2647KX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4MNK2647KX');
          `}
        </Script>

         {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "szuxm9hj84");`,
          }}
        />
        
      </head>
      <body>{children}</body>
    </html>
  );
}
