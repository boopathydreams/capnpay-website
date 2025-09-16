import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Deletion Request | Cap\'n Pay',
  description: 'Request permanent deletion of your personal data from Cap\'n Pay. Secure verification process with mobile OTP.',
  keywords: ['data deletion', 'privacy rights', 'GDPR', 'personal data removal', 'Cap\'n Pay'],
  openGraph: {
    title: 'Data Deletion Request | Cap\'n Pay',
    description: 'Request permanent deletion of your personal data from Cap\'n Pay. Secure verification process with mobile OTP.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DataDeletionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}