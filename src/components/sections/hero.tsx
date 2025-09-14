"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { AnimatedText, CountUp } from '@/components/animations/animated-text'
import { FloatingElement } from '@/components/animations/floating-element'
import {
  Smartphone,
  Brain,
  Mic,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Users,
  Download,
  Play
} from 'lucide-react'

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const stats = [
    { icon: Users, value: 50000, suffix: '+', label: 'Active Users' },
    { icon: TrendingUp, value: 98, suffix: '%', label: 'Success Rate' },
    { icon: Shield, value: 100, suffix: '%', label: 'Secure Payments' },
    { icon: Star, value: 4.9, prefix: '', suffix: '/5', label: 'App Rating' }
  ]

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Smart spending analysis and predictions'
    },
    {
      icon: Mic,
      title: 'Voice Commands',
      description: 'Pay with just your voice - no typing needed'
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Your money is protected by advanced encryption'
    }
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Background Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <FloatingElement delay={0} duration={6} distance={30} direction="circular" className="absolute top-20 left-20">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl" />
        </FloatingElement>
        <FloatingElement delay={2} duration={8} distance={40} direction="up" className="absolute top-40 right-32">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-lg" />
        </FloatingElement>
        <FloatingElement delay={4} duration={10} distance={25} direction="circular" className="absolute bottom-32 left-40">
          <div className="w-24 h-24 bg-gradient-to-br from-gold-400 to-orange-400 rounded-full opacity-20 blur-xl" />
        </FloatingElement>
      </motion.div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Zap className="w-4 h-4" />
              <span>India&apos;s First AI-Native Payment App</span>
            </motion.div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <AnimatedText
                  text="Pay Smart,"
                  type="fade"
                  delay={0.3}
                  className="block text-gray-900 dark:text-white"
                />
                <AnimatedText
                  text="Live Free"
                  type="gradient"
                  delay={0.5}
                  className="block"
                />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl"
              >
                Experience the future of payments with AI-powered insights, voice commands, and seamless UPI transactions. All in one beautiful app.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="xl" variant="glow" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Free App
              </Button>
              <Button size="xl" variant="outline" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    <CountUp
                      end={stat.value}
                      duration={2}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Container */}
            <div className="relative">
              {/* Phone Frame */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-[640px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl"
              >
                {/* Screen */}
                <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm">
                    <span className="font-medium">9:41</span>
                    <span className="font-bold">Cap&apos;n Pay</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm" />
                      <div className="w-1 h-2 bg-white rounded-sm" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-6">
                    {/* Balance Card */}
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg"
                    >
                      <div className="text-sm opacity-80">Total Balance</div>
                      <div className="text-3xl font-bold">₹25,847</div>
                      <div className="text-sm opacity-80">+12.5% this month</div>
                    </motion.div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-4">
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 2 + index,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                          className="bg-gray-50 dark:bg-gray-200 rounded-xl p-4 text-center"
                        >
                          <feature.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                          <div className="text-xs font-medium text-gray-800">{feature.title}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Recent Transactions */}
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-gray-800">Recent Payments</div>
                      {[
                        { name: "Swiggy", amount: "₹340", time: "2m ago" },
                        { name: "Metro Card", amount: "₹150", time: "1h ago" },
                        { name: "Coffee Shop", amount: "₹280", time: "3h ago" }
                      ].map((transaction, index) => (
                        <motion.div
                          key={transaction.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2 + index * 0.2 }}
                          className="flex items-center justify-between py-2"
                        >
                          <div>
                            <div className="font-medium text-gray-800">{transaction.name}</div>
                            <div className="text-xs text-gray-500">{transaction.time}</div>
                          </div>
                          <div className="font-bold text-gray-800">{transaction.amount}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              <FloatingElement delay={1} duration={4} distance={20} className="absolute -top-8 -left-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </FloatingElement>

              <FloatingElement delay={3} duration={5} distance={15} className="absolute -bottom-8 -right-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Mic className="w-8 h-8 text-white" />
                </div>
              </FloatingElement>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection