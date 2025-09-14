"use client"

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, string | number | boolean>
    ) => void
  }
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            send_page_view: true,
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  )
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackDownload = (platform: 'ios' | 'android') => {
  trackEvent('download_app', {
    platform,
    event_category: 'engagement',
    event_label: `Download ${platform}`,
  })
}

export const trackFeatureClick = (featureName: string) => {
  trackEvent('feature_click', {
    feature_name: featureName,
    event_category: 'engagement',
  })
}

export const trackDemoRequest = () => {
  trackEvent('demo_request', {
    event_category: 'lead_generation',
  })
}