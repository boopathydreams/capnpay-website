"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { AnimatedText } from '@/components/animations/animated-text'
import {
  Download,
  Smartphone,
  CreditCard,
  CheckCircle,
  ArrowRight,
  User,
  Shield,
  Zap
} from 'lucide-react'

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const steps = [
    {
      id: 1,
      title: "Download & Sign Up",
      description: "Get the app from Play Store or App Store. Sign up in under 30 seconds with your phone number.",
      icon: Download,
      time: "30 seconds",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Verify Your Identity",
      description: "Secure KYC verification using AI-powered document scanning. Bank-grade security from day one.",
      icon: Shield,
      time: "2 minutes",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Link Your Bank",
      description: "Connect your bank account securely with UPI. We support all major banks and payment methods.",
      icon: CreditCard,
      time: "1 minute",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Start Paying Smart",
      description: "Use voice commands, AI insights, and instant payments. Experience the future of digital payments.",
      icon: Zap,
      time: "Instant",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-transparent to-white dark:to-gray-900" />
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
            <User className="w-4 h-4" />
            <span>Simple 4-Step Process</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <AnimatedText
              text="How It"
              type="fade"
              delay={0.3}
              className="block"
            />
            <AnimatedText
              text="Works"
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
            Get started with Cap&apos;n Pay in less than 4 minutes. Our streamlined onboarding process
            gets you paying smart immediately.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10 hidden lg:block" />

                {/* Content Card */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
                    {/* Step Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                          Step {step.id}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Time Badge */}
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                        ⏱️ {step.time}
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </Card>
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotateY: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="relative"
                  >
                    {/* Phone Mockup */}
                    <div className="w-64 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                      <div className="w-full h-full bg-white dark:bg-gray-100 rounded-2xl overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">
                          <span>9:41</span>
                          <span className="font-bold">Cap&apos;n Pay</span>
                          <div className="flex space-x-1">
                            <div className="w-3 h-1.5 bg-white rounded-sm" />
                            <div className="w-1 h-1.5 bg-white rounded-sm" />
                          </div>
                        </div>

                        {/* Screen Content */}
                        <div className="p-4 h-full bg-gray-50 dark:bg-gray-200">
                          <div className="text-center mt-8">
                            <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                              <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-gray-800 font-bold text-lg mb-2">{step.title}</div>
                            <div className="text-gray-600 text-sm">{step.time}</div>

                            {/* Progress Indicator */}
                            <div className="mt-6 flex justify-center space-x-2">
                              {steps.map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i <= index ? 'bg-blue-500' : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index }}
                      className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of users who have already revolutionized their payment experience.
              The future of payments is just one download away.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Smartphone className="w-6 h-6" />
              <span>Download Cap&apos;n Pay Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HowItWorksSection