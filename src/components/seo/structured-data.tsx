"use client"

import Script from 'next/script'

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cap'n Pay",
    "url": "https://capnpay.app",
    "logo": "https://capnpay.app/images/icon.png",
    "description": "India's First AI-Native Payment App with smart budget caps, safe-to-spend AI, and voice commands for seamless UPI transactions.",
    "sameAs": [
      "https://twitter.com/capnpay",
      "https://linkedin.com/company/capnpay",
      "https://instagram.com/capnpay"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    }
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cap'n Pay",
    "description": "AI-powered payment app with smart budget caps, safe-to-spend insights, voice memo tracking, and behavioral nudges for better financial health.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": ["iOS", "Android"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "50000"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cap'n Pay"
    },
    "downloadUrl": [
      "https://apps.apple.com/app/capnpay",
      "https://play.google.com/store/apps/details?id=com.capnpay"
    ],
    "screenshot": "https://capnpay.app/images/app-screenshot.png",
    "featureList": [
      "Safe-to-Spend AI",
      "Smart Budget Caps",
      "Voice Memo Insights",
      "UPI Contact Intelligence",
      "Behavioral Nudges",
      "AI Financial Chat",
      "Real-time Spending Analysis",
      "Multilingual Voice Commands"
    ]
  }

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Cap'n Pay Payment Platform",
    "description": "Comprehensive UPI payment platform with AI-powered budget management and spending insights.",
    "category": "Digital Wallet",
    "provider": {
      "@type": "Organization",
      "name": "Cap'n Pay"
    },
    "featureList": [
      "UPI Payments",
      "Budget Tracking",
      "AI Insights",
      "Voice Commands",
      "Contact Management",
      "Spending Caps"
    ],
    "geo": {
      "@type": "Country",
      "name": "India"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Cap'n Pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cap'n Pay is India's first AI-native payment app that combines UPI payments with smart budget management, safe-to-spend AI, and behavioral insights to help users maintain better financial health."
        }
      },
      {
        "@type": "Question",
        "name": "How does Safe-to-Spend AI work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Safe-to-Spend AI analyzes your budget, spending patterns, and financial goals to calculate exactly how much you can safely spend today without compromising your monthly budget or financial targets."
        }
      },
      {
        "@type": "Question",
        "name": "Are Smart Budget Caps automatic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smart Budget Caps are intelligent spending limits that you can set for different categories. The AI provides recommendations based on your income and spending patterns, and notifies you when you're approaching your limits."
        }
      },
      {
        "@type": "Question",
        "name": "Is Cap'n Pay secure for UPI payments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Cap'n Pay uses bank-grade security with military-grade encryption, biometric authentication, and follows all UPI security protocols to ensure your payments and financial data are completely secure."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="software-application-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <Script
        id="financial-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialProductSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}