import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Cap'n Pay - India's First AI-Native Payment App",
  description: "Experience the future of payments with AI-powered insights, voice commands, and seamless UPI transactions. Pay smart, live free.",
  keywords: "UPI, payments, AI, fintech, voice payments, India, mobile app, digital wallet",
  authors: [{ name: "Cap'n Pay Team" }],
  creator: "Cap'n Pay",
  publisher: "Cap'n Pay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cap'n Pay - India's First AI-Native Payment App",
    description: "Experience the future of payments with AI-powered insights, voice commands, and seamless UPI transactions.",
    url: "https://capnpay.app",
    siteName: "Cap'n Pay",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cap'n Pay - India's First AI-Native Payment App",
    description: "Experience the future of payments with AI-powered insights, voice commands, and seamless UPI transactions.",
    creator: "@capnpay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
