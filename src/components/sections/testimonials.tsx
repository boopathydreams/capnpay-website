"use client"

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { AnimatedText } from '@/components/animations/animated-text'
import {
  Star,
  Quote,
  Users,
  TrendingUp,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "TCS",
      avatar: "PS",
      rating: 5,
      content: "Cap'n Pay has completely changed how I handle payments. The voice commands are incredible - I can pay for my coffee just by speaking! The AI insights help me save ₹3000+ every month.",
      highlight: "Saves ₹3000+ monthly",
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Raj Patel",
      role: "Business Owner",
      company: "Local Restaurant",
      avatar: "RP",
      rating: 5,
      content: "As a restaurant owner, Cap'n Pay's instant UPI payments have increased our transaction speed by 300%. Customers love the seamless experience, and we've seen a 40% increase in digital payments.",
      highlight: "300% faster transactions",
      location: "Ahmedabad"
    },
    {
      id: 3,
      name: "Anita Kumar",
      role: "College Student",
      company: "Delhi University",
      avatar: "AK",
      rating: 5,
      content: "The spending insights are amazing! Cap'n Pay's AI helped me understand my spending patterns and I've been able to save for my laptop. The interface is so intuitive and beautiful.",
      highlight: "Better spending habits",
      location: "Delhi"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Freelance Designer",
      company: "Independent",
      avatar: "VS",
      rating: 5,
      content: "Security was my biggest concern with digital payments, but Cap'n Pay's military-grade encryption gives me peace of mind. Plus, the voice memo feature for tracking expenses is genius!",
      highlight: "Military-grade security",
      location: "Bangalore"
    },
    {
      id: 5,
      name: "Meera Reddy",
      role: "Marketing Manager",
      company: "Startup",
      avatar: "MR",
      rating: 5,
      content: "I travel a lot for work, and Cap'n Pay works seamlessly everywhere in India. The 24/7 AI support has saved me multiple times when I needed help with payments during odd hours.",
      highlight: "Works everywhere",
      location: "Hyderabad"
    },
    {
      id: 6,
      name: "Arjun Gupta",
      role: "Doctor",
      company: "Private Practice",
      avatar: "AG",
      rating: 5,
      content: "During busy hospital hours, voice payments are a lifesaver. I can pay for meals, parking, everything without touching my phone. Cap'n Pay has made my life so much easier.",
      highlight: "Hands-free payments",
      location: "Chennai"
    }
  ]

  const stats = [
    { value: "50K+", label: "Happy Users", icon: Users },
    { value: "4.9", label: "App Rating", icon: Star },
    { value: "99.8%", label: "Success Rate", icon: TrendingUp },
    { value: "24/7", label: "AI Support", icon: Heart }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4" />
            <span>Loved by 50,000+ Users</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <AnimatedText
              text="What Our"
              type="fade"
              delay={0.3}
              className="block"
            />
            <AnimatedText
              text="Users Say"
              type="gradient"
              delay={0.5}
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Real stories from real users who have transformed their payment experience with Cap&apos;n Pay.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="p-8 lg:p-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-0 shadow-2xl">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Quote Content */}
                  <div className="lg:col-span-2">
                    <Quote className="w-8 h-8 text-blue-500 mb-4" />
                    <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      &quot;{testimonials[currentIndex].content}&quot;
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Highlight Badge */}
                    <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                      ✨ {testimonials[currentIndex].highlight}
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-3 h-3 bg-white rounded-full"
                        />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                      {testimonials[currentIndex].company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      📍 {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-500 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>

          {/* Additional Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.location}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center space-x-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default TestimonialsSection