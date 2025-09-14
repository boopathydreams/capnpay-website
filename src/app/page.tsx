import Navigation from '@/components/sections/navigation'
import Hero from '@/components/sections/hero'
import FeaturesSection from '@/components/sections/features'
import HowItWorksSection from '@/components/sections/how-it-works'
import TestimonialsSection from '@/components/sections/testimonials'
import PricingSection from '@/components/sections/pricing'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
