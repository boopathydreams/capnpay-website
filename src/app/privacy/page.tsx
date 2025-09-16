/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Cap\'n Pay',
  description: 'Cap\'n Pay Privacy Policy - Learn how we collect, use, and protect your personal information and financial data.',
  openGraph: {
    title: 'Privacy Policy - Cap\'n Pay',
    description: 'Cap\'n Pay Privacy Policy - Learn how we collect, use, and protect your personal information and financial data.',
    images: [
      {
        url: '/images/og-privacy.png',
        width: 1200,
        height: 630,
        alt: 'Cap\'n Pay Privacy Policy',
      },
    ],
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how Cap'n Pay collects, uses, and protects your personal information.
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Cap'n Pay ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not download, register with, or use this application.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.1 Personal Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Name and contact information (phone number, email address)</li>
              <li>UPI ID and payment credentials</li>
              <li>Monthly income information for personalized spending insights</li>
              <li>Device contacts (with your permission) to facilitate payments</li>
              <li>Voice recordings for voice memo features</li>
              <li>Profile photo and other optional profile information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.2 Financial Information
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Payment transaction history and amounts</li>
              <li>Spending categories and patterns</li>
              <li>Bank account information linked to UPI</li>
              <li>Payment recipient details (VPA addresses, names)</li>
              <li>Transaction memos and notes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.3 Usage and Device Information
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Device identifiers and technical information</li>
              <li>App usage patterns and preferences</li>
              <li>Location data (if enabled) for security and fraud prevention</li>
              <li>Camera access for QR code scanning</li>
              <li>Microphone access for voice memo recording</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Payment Processing:</strong> To facilitate UPI payments and maintain transaction records</li>
              <li><strong>Smart Insights:</strong> To provide AI-powered spending analysis and personalized financial insights</li>
              <li><strong>Contact Management:</strong> To help you find and pay contacts quickly</li>
              <li><strong>Voice Features:</strong> To process voice memos and provide transcription services</li>
              <li><strong>Security:</strong> To detect and prevent fraud, unauthorized access, and security threats</li>
              <li><strong>Personalization:</strong> To customize your experience and provide relevant recommendations</li>
              <li><strong>Communication:</strong> To send you service-related notifications and updates</li>
              <li><strong>Compliance:</strong> To comply with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          {/* AI and Machine Learning */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. AI and Machine Learning
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Cap'n Pay uses artificial intelligence and machine learning to enhance your experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Spending Analysis:</strong> We analyze your transaction patterns to provide insights about your spending habits</li>
              <li><strong>Behavioral Profiling:</strong> We create psychological spending profiles to offer personalized advice (anonymous and aggregated)</li>
              <li><strong>Fraud Detection:</strong> AI algorithms help detect unusual payment patterns that may indicate fraudulent activity</li>
              <li><strong>Smart Categorization:</strong> Automatic categorization of payments based on merchant information and patterns</li>
              <li><strong>Voice Processing:</strong> Speech-to-text conversion for voice memos (processed locally when possible)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All AI processing is designed to improve your experience while maintaining strict privacy controls. Personal data used for AI training is anonymized and aggregated.
            </p>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Payment Processing:</strong> With UPI payment processors and banks to complete transactions</li>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our app</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Security:</strong> To investigate fraud, security breaches, or protect user safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We ensure all third parties are bound by appropriate confidentiality obligations and data protection standards.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We implement robust security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Encryption:</strong> All data transmission is encrypted using industry-standard protocols</li>
              <li><strong>Secure Storage:</strong> Personal and financial data is stored in encrypted databases</li>
              <li><strong>Access Controls:</strong> Strict access controls limit who can view your information</li>
              <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
              <li><strong>Fraud Monitoring:</strong> Real-time monitoring for suspicious activities and transactions</li>
              <li><strong>Local Processing:</strong> Sensitive operations like voice processing are done locally when possible</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We retain your information only as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Transaction Data:</strong> Retained for 7 years for compliance and audit purposes</li>
              <li><strong>Personal Information:</strong> Retained while your account is active and for 2 years after closure</li>
              <li><strong>Voice Recordings:</strong> Deleted after transcription unless you choose to save them</li>
              <li><strong>Analytics Data:</strong> Anonymized data may be retained longer for service improvement</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. Your Privacy Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Access:</strong> Request access to your personal data we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain types of data processing</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for specific data uses</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To exercise these rights, contact us at info@capnpay.com or through the app settings.
            </p>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Request Data Deletion
              </h3>
              <p className="text-blue-800 dark:text-blue-400 mb-3">
                You can request permanent deletion of all your personal data from our systems.
              </p>
              <a
                href="/data-deletion"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Request Data Deletion
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </section>

          {/* Permissions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              9. App Permissions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our app requests the following permissions to provide our services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Contacts:</strong> To help you find and pay people in your contact list</li>
              <li><strong>Camera:</strong> To scan UPI QR codes for payments</li>
              <li><strong>Microphone:</strong> To record voice memos for payments</li>
              <li><strong>Storage:</strong> To save transaction receipts and app data</li>
              <li><strong>Network:</strong> To process payments and sync data</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You can manage these permissions through your device settings. Some features may not work if permissions are denied.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Your information is primarily processed and stored in India. If we transfer data internationally, we ensure appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Adequacy decisions by relevant authorities</li>
              <li>Standard contractual clauses</li>
              <li>Binding corporate rules</li>
              <li>Certification schemes and codes of conduct</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              11. Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Cap'n Pay is not intended for use by children under 18 years of age. We do not knowingly collect personal information from children under 18. If we discover that we have collected information from a child under 18, we will delete it immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and through the app. Your continued use of the Service after changes become effective constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              13. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cap'n Pay Privacy Team</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Email:</strong> info@capnpay.com
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Address:</strong> 7th Floor, 715A,Suite#792, Spencer Plaza Mall, Mount road, Chennai, Tamil Nadu 600006, India
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Phone:</strong> +91 90803 42654
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 30 days.
              </p>
            </div>
          </section>

          {/* Compliance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              14. Regulatory Compliance
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Cap'n Pay complies with applicable data protection and privacy laws, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Information Technology Act, 2000 (India)</li>
              <li>Digital Personal Data Protection Act, 2023 (India)</li>
              <li>Reserve Bank of India (RBI) guidelines for payment systems</li>
              <li>Unified Payments Interface (UPI) regulations</li>
            </ul>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This privacy policy is effective as of {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} and was last updated on the same date.
          </p>
        </div>
      </div>
    </div>
  )
}