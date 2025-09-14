"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import {
  Smartphone,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  Heart,
  Shield,
  Award,
  Zap
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "How it Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "API Docs", href: "/api" },
      { label: "Integrations", href: "/integrations" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press Kit", href: "/press" },
      { label: "Contact", href: "/contact" }
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Security", href: "/security" },
      { label: "Status", href: "/status" },
      { label: "Bug Reports", href: "/bugs" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
      { label: "Compliance", href: "/compliance" }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/capnpay", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/capnpay", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/capnpay", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/capnpay", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/capnpay", label: "GitHub" }
  ]

  const certifications = [
    { icon: Shield, label: "ISO 27001 Certified" },
    { icon: Award, label: "RBI Approved" },
    { icon: Zap, label: "UPI Certified" }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-10 blur-2xl" />
      </div>

      <Container className="relative z-10">
        {/* Top Section - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 border-b border-gray-800"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to revolutionize
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                your payments?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 50,000+ users who have already transformed their financial experience with Cap&apos;n Pay.
              Download now and get ₹100 cashback on your first transaction!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="glow" className="group">
                <Smartphone className="w-5 h-5 mr-2" />
                Download for Android
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800 group">
                <Smartphone className="w-5 h-5 mr-2" />
                Download for iOS
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">₹</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Cap&apos;n Pay
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                India&apos;s first AI-native payment app that makes digital transactions effortless,
                secure, and intelligent. Experience the future of payments today.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>hello@capnpay.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 90803 42654</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Bangalore, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(links).map(([category, categoryLinks], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <h3 className="text-lg font-semibold mb-4 capitalize text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {categoryLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <span className="text-gray-400 text-sm font-medium">Trusted & Certified:</span>
            {certifications.map((cert) => (
              <div key={cert.label} className="flex items-center space-x-2 text-gray-300">
                <cert.icon className="w-5 h-5 text-green-400" />
                <span className="text-sm">{cert.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Cap&apos;n Pay. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>All rights reserved</span>
              <div className="flex items-center space-x-1">
                <span>Version 2.1.0</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}

export default Footer