# Cap'n Pay Website

Welcome to the official website of **Cap'n Pay** - India's First AI-Native Payment App.

## 🚀 Features

- **Safe-to-Spend AI**: Know exactly how much you can spend today without breaking your budget
- **Smart Budget Caps**: Intelligent spending limits that adapt to your lifestyle
- **Voice Memo Insights**: Add context to expenses with voice notes and get AI insights
- **UPI Contact Intelligence**: Smart contact management with automatic VPA discovery
- **Behavioral Nudges**: Psychology-driven suggestions to improve spending habits
- **AI Financial Chat**: Get personalized financial advice powered by GPT-4

## 🏗️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization
- **SEO**: Built-in metadata, OpenGraph, structured data

## 📈 SEO Optimizations

- ✅ Comprehensive meta tags and Open Graph
- ✅ JSON-LD structured data (Organization, SoftwareApplication, FinancialProduct)
- ✅ Automated sitemap.xml and robots.txt
- ✅ PWA manifest for mobile app-like experience
- ✅ Performance optimizations (image optimization, compression, caching)
- ✅ Accessibility improvements (semantic HTML, ARIA labels, alt text)
- ✅ Google Analytics integration with custom event tracking

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/boopathydreams/capnpay-website.git
   cd capnpay-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance

The website is optimized for Core Web Vitals:

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

## 🔍 SEO Features

### Meta Tags

- Comprehensive title and description optimization
- Open Graph tags for social media sharing
- Twitter Card support
- Mobile-optimized viewport settings

### Structured Data

- Organization schema for company information
- SoftwareApplication schema for the mobile app
- FinancialProduct schema for payment services
- FAQ schema for common questions

### Technical SEO

- Automated sitemap generation
- Robots.txt configuration
- Canonical URL management
- Image optimization with WebP/AVIF support

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interactive elements
- PWA manifest for app-like experience
- Optimized images for mobile networks

## 🎨 Design System

The website follows Cap'n Pay's design system with:

- **Primary Colors**: Blue gradient (#2563eb to #7c3aed)
- **Typography**: Inter font family
- **Spacing**: Tailwind's spacing scale
- **Components**: Reusable UI components
- **Animations**: Smooth Framer Motion transitions

## 🔧 Development

### Project Structure

```text
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt generation
│   └── manifest.ts        # PWA manifest
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── ui/               # UI components
│   ├── animations/       # Animation components
│   ├── seo/              # SEO components
│   └── analytics/        # Analytics components
└── lib/                  # Utilities and configurations
```

### Key Files

- `src/app/layout.tsx`: SEO metadata and structured data
- `src/components/seo/structured-data.tsx`: JSON-LD schemas
- `src/components/analytics/google-analytics.tsx`: GA4 setup
- `next.config.ts`: Performance and security optimizations

## 📊 Analytics

Google Analytics 4 is integrated with custom event tracking for:

- App download clicks
- Feature interactions
- Demo requests
- User engagement metrics

## 🚀 Deployment

The website can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting provider**

### Environment Variables

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🔒 Security

Security headers are configured in `next.config.ts`:

- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary to Cap'n Pay. All rights reserved.

## 📞 Support

For questions or support, please contact:

- Email: [support@capnpay.app](mailto:support@capnpay.app)
- Website: [https://capnpay.app](https://capnpay.app)

---

Made with ❤️ by the Cap'n Pay Team
