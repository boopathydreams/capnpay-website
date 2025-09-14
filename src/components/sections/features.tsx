"use client"

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedText } from '@/components/animations/animated-text'
import { FloatingElement } from '@/components/animations/floating-element'
import {
  Brain,
  Mic,
  Shield,
  Zap,
  Smartphone,
  BarChart3,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react'

const FeaturesSection = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const features = [
    // Row 1: Wide + Small
    {
      id: "safe-to-spend",
      title: "Safe-to-Spend AI",
      description: "Know exactly how much you can spend today without breaking your budget",
      icon: Brain,
      gradient: "from-green-500 to-emerald-600",
      demo: "₹2,847 safe to spend today",
      stats: { accuracy: "94%", users: "50K+" },
      gridClass: "md:col-span-2 md:row-span-1"
    },
    {
      id: "smart-caps",
      title: "Smart Budget Caps",
      description: "Intelligent spending limits that adapt to your lifestyle",
      icon: Shield,
      gradient: "from-red-500 to-orange-600",
      demo: "Food budget: 84% used",
      stats: { savings: "₹3.2K avg", overspend: "-68%" },
      gridClass: "md:col-span-1 md:row-span-1"
    },

    // Row 2: Small + Wide
    {
      id: "voice-memo",
      title: "Voice Memo Insights",
      description: "Add context to expenses with voice notes and get AI insights",
      icon: Mic,
      gradient: "from-purple-500 to-violet-600",
      demo: "\"Lunch with team - project celebration\"",
      stats: { accuracy: "96%", languages: "2+" },
      gridClass: "md:col-span-1 md:row-span-1"
    },
    {
      id: "behavioral-nudges",
      title: "Behavioral Nudges",
      description: "Psychology-driven suggestions to improve your spending habits",
      icon: Zap,
      gradient: "from-yellow-500 to-amber-600",
      demo: "\"Try cooking at home today? You typically save ₹150\"",
      stats: { engagement: "85%", habits: "↑47%" },
      gridClass: "md:col-span-2 md:row-span-1"
    },

    // Row 3: Wide + Small
    {
      id: "upi-intelligence",
      title: "UPI Contact Intelligence",
      description: "Smart contact management with automatic VPA discovery",
      icon: Smartphone,
      gradient: "from-blue-500 to-cyan-600",
      demo: "Auto-found 12 UPI contacts",
      stats: { contacts: "5K+", detection: "92%" },
      gridClass: "md:col-span-2 md:row-span-1"
    },
    {
      id: "ai-chat",
      title: "AI Financial Chat",
      description: "Get personalized financial advice powered by GPT-4",
      icon: BarChart3,
      gradient: "from-indigo-500 to-purple-600",
      demo: "\"Based on your spending, try the 50/30/20 rule\"",
      stats: { response: "<2s", satisfaction: "4.8/5" },
      gridClass: "md:col-span-1 md:row-span-1"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="features" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} duration={8} distance={40} direction="circular" className="absolute top-20 left-10">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 blur-2xl" />
        </FloatingElement>
        <FloatingElement delay={4} duration={12} distance={60} direction="up" className="absolute bottom-20 right-10">
          <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl" />
        </FloatingElement>
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
            <Zap className="w-4 h-4" />
            <span>India&apos;s First AI-Native Payment Platform</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <AnimatedText
              text="Features Built for"
              type="fade"
              delay={0.3}
              className="block"
            />
            <AnimatedText
              text="Smarter Spending"
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
            Experience revolutionary features that understand your spending habits, protect your budget with AI-powered caps, and provide intelligent insights through voice memos and behavioral psychology.
          </motion.p>
        </motion.div>

        {/* Features Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={feature.gridClass}
              onHoverStart={() => setActiveDemo(feature.id)}
              onHoverEnd={() => setActiveDemo(null)}
            >
              <Card className="h-full p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
                {/* Feature Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {activeDemo === feature.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      Live Demo
                    </motion.div>
                  )}
                </div>

                {/* Feature Content */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Demo Area */}
                  <motion.div
                    animate={{
                      scale: activeDemo === feature.id ? 1.02 : 1,
                      opacity: activeDemo === feature.id ? 1 : 0.8
                    }}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 font-mono text-sm"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-500 dark:text-gray-400">Demo:</span>
                    </div>
                    <div className="text-gray-800 dark:text-gray-200">{feature.demo}</div>
                  </motion.div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {Object.entries(feature.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">{value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {feature.gridClass.includes("col-span-2") && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-4"
                    >
                      <Button
                        variant="outline"
                        className="group/btn w-full border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20"
                      >
                        Try {feature.title}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 dark:border-gray-700/20 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to experience the future?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 50,000+ users who have already revolutionized their payment experience with Cap&apos;n Pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="glow" className="group">
                <Smartphone className="w-5 h-5 mr-2" />
                Download Free App
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo Video
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Bank-grade security</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default FeaturesSection