import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | Cap\'n Pay',
  description: 'Access the Cap\'n Pay preview - authorized users only.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {children}
    </div>
  )
}