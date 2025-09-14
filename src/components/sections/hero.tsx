"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { AnimatedText, CountUp } from '@/components/animations/animated-text'
import { FloatingElement } from '@/components/animations/floating-element'
import {
  Brain,
  Mic,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Users,
  Download,
  Play,
  QrCode,
  CreditCard,
  Phone,
  Receipt,
  Bell,
  User
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
                  rotateY: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-[280px] h-[580px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl"
              >
                {/* Screen */}
                <div className="w-full h-full bg-gray-100 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 text-sm">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-2 bg-gray-800 rounded-sm opacity-60" />
                      <div className="w-1 h-2 bg-gray-800 rounded-sm opacity-60" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center p-1">
                        <Image
                          src="/images/icon.png"
                          alt="Cap'n Pay Logo"
                          width={20}
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-bold text-gray-800">Cap&apos;n Pay</span>
                    </div>
                    <div className="flex items-center space-x-3">

                      <div className="relative">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                      </div>
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>

                  {/* Hero Safe-to-Spend Section */}
                  <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
                    {/* Background Girl SVG */}
                    <motion.div
                      className="absolute right-[-20px] top-[-10px] opacity-75 z-0"
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 1, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src="/images/girl_seeing_phone.svg"
                        alt="Girl with phone"
                        width={160}
                        height={160}
                        className="transform"
                      />
                    </motion.div>                    <div className="relative z-10">
                      <div className="text-green-700 text-xs font-bold uppercase tracking-wider mb-1">
                        SAFE-TO-SPEND TODAY
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-3xl font-black text-green-700 mb-2"
                      >
                        ₹2,847
                      </motion.div>
                      <div className="text-gray-600 text-xs leading-relaxed max-w-[160px]">
                        Based on your remaining budget and daily spending average
                      </div>

                      {/* Progress Card */}
                      <motion.div
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: 1,
                          ease: "easeInOut"
                        }}
                        className="mt-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 text-white text-xs"
                      >
                        <div className="text-white/80 text-xs uppercase tracking-wide font-semibold mb-1">
                          THIS MONTH PROGRESS
                        </div>
                        <div className="font-bold text-sm">₹15.2k / ₹25k</div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full mt-2 overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "61%" }}
                            transition={{ duration: 2, delay: 1.5 }}
                            className="h-full bg-white/90 rounded-full"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="px-6 py-4">
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { icon: QrCode, title: "Scan\nQR", color: "from-blue-600 to-blue-700" },
                        { icon: CreditCard, title: "Pay\nAnyone", color: "from-purple-600 to-purple-700" },
                        { icon: Phone, title: "Send to\nMobile", color: "from-indigo-600 to-indigo-700" },
                        { icon: Receipt, title: "Pay\nBills", color: "from-violet-600 to-violet-700" },
                      ].map((action, index) => (
                        <motion.div
                          key={action.title}
                          animate={{
                            y: [0, -3, 0],
                            rotate: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2.5 + index * 0.5,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                          className="flex flex-col items-center"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-2 shadow-lg`}>
                            <action.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-xs text-gray-700 text-center font-medium leading-tight">
                            {action.title}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Your Caps Section */}
                  <div className="px-6 py-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm font-bold text-gray-800">Your Caps</div>
                      <div className="text-xs text-blue-600 font-semibold">View All</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Food", spent: "₹2.1k", limit: "₹3k", progress: 70, status: "NEAR", icon: "🍽️" },
                        { name: "Shopping", spent: "₹850", limit: "₹2k", progress: 42, status: "OK", icon: "🛍️" },
                      ].map((cap, index) => (
                        <motion.div
                          key={cap.name}
                          animate={{
                            scale: [1, 1.01, 1],
                          }}
                          transition={{
                            duration: 3 + index,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                          className={`p-3 rounded-xl ${
                            cap.status === 'NEAR'
                              ? 'bg-orange-50 border border-orange-200'
                              : 'bg-green-50 border border-green-200'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm">{cap.icon}</span>
                              <span className="text-xs font-semibold text-gray-800">{cap.name}</span>
                            </div>
                            <div className={`text-xs px-2 py-1 rounded-full font-semibold ${
                              cap.status === 'NEAR'
                                ? 'bg-orange-200 text-orange-800'
                                : 'bg-green-200 text-green-800'
                            }`}>
                              {cap.status}
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 mb-2">
                            {cap.spent} of {cap.limit}
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${cap.progress}%` }}
                              transition={{ duration: 1.5, delay: 2 + index * 0.3 }}
                              className={`h-full rounded-full ${
                                cap.status === 'NEAR' ? 'bg-orange-400' : 'bg-green-400'
                              }`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="px-6 py-4">
                    <div className="text-sm font-bold text-gray-800 mb-3">Recent Activity</div>
                    <div className="space-y-2">
                      {[
                        { merchant: "Swiggy", amount: "₹340", time: "2m ago", category: "🍽️" },
                        { merchant: "Metro Card", amount: "₹150", time: "1h ago", category: "🚗" },
                      ].map((transaction, index) => (
                        <motion.div
                          key={transaction.merchant}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 3 + index * 0.2 }}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-sm">{transaction.category}</span>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-800">{transaction.merchant}</div>
                              <div className="text-xs text-gray-500">{transaction.time}</div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-red-600">-{transaction.amount}</div>
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

              {/* Middle Left - Shield with pulsing animation */}
              <FloatingElement delay={1.2} duration={5} distance={22} direction="up" className="absolute top-[60%] left-[-40px] transform -translate-y-1/2">
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 10, -10, 0],
                    y: [0, -8, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center"
                >
                  <Shield className="w-7 h-7 text-white" />
                </motion.div>
              </FloatingElement>

              {/* Middle Right - Trending with wave animation */}
              <FloatingElement delay={2.8} duration={8} distance={18} className="absolute top-[40%] right-[-45px] transform -translate-y-1/2">
                <motion.div
                  animate={{
                    x: [0, 8, 0],
                    y: [0, -12, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-600 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </motion.div>
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