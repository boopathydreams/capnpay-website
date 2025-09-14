import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/seo/structured-data";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export const metadata: Metadata = {
  title: "Cap'n Pay - India's First AI-Native Payment App",
  description: "Experience the future of payments with AI-powered insights, voice commands, and seamless UPI transactions. Pay smart, live free with smart budget caps, safe-to-spend AI, and behavioral nudges.",
  keywords: [
    "UPI payments",
    "AI fintech",
    "voice payments",
    "smart budget",
    "spending caps",
    "safe to spend",
    "India payments",
    "mobile wallet",
    "digital payments",
    "financial AI",
    "budget tracking",
    "expense management",
    "behavioral finance",
    "UPI India",
    "payment app",
    "fintech AI"
  ].join(", "),
  authors: [{ name: "Cap'n Pay Team", url: "https://landing.capnpay.com"}],
  creator: "Cap'n Pay",
  publisher: "Cap'n Pay",
  category: "Finance",
  metadataBase: new URL("https://landing.capnpay.com"),
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cap'n Pay - India's First AI-Native Payment App",
    description: "Experience the future of payments with AI-powered insights, voice commands, and seamless UPI transactions. Smart budget caps and safe-to-spend AI for better financial health.",
    url: "https://landing.capnpay.com",
    siteName: "Cap'n Pay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image-large.png",
        width: 1248,
        height: 832,
        alt: "Cap'n Pay - India's First AI-Native Payment App - An ultimatum to unhealthy spending",
      }
      // {
      //   url: "/images/icon.png",
      //   width: 512,
      //   height: 512,
      //   alt: "Cap'n Pay Logo",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cap'n Pay - India's First AI-Native Payment App",
    description: "Smart budget caps, safe-to-spend AI, and voice commands. Experience the future of UPI payments in India.",
    creator: "@capnpay",
    site: "@capnpay",
    images: ["/images/og-image-large.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Cap'n Pay",
    "application-name": "Cap'n Pay",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
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
        <GoogleAnalytics measurementId="G-6JCXQVDM39" />
        <StructuredData />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
