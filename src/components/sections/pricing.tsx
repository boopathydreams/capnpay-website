"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Check,
  Star,
  Zap,
  Crown,
  Rocket,
  ArrowRight,
  Sparkles,
  Shield,
  Users,
  TrendingUp
} from 'lucide-react'

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Free",
      icon: Zap,
      description: "Perfect for getting started with smart payments",
      price: { monthly: 0, annual: 0 },
      color: "from-gray-500 to-gray-600",
      popular: false,
      features: [
        "Up to 10 transactions per month",
        "Basic AI categorization",
        "Voice memo (30 seconds)",
        "UPI payments",
        "Basic insights",
        "Standard support"
      ],
      limitations: [
        "Limited transaction history",
        "Basic features only"
      ]
    },
    {
      name: "Pro",
      icon: Crown,
      description: "For power users who want the full experience",
      price: { monthly: 99, annual: 899 },
      color: "from-blue-500 to-purple-600",
      popular: true,
      features: [
        "Unlimited transactions",
        "Advanced AI insights",
        "Voice memo (5 minutes)",
        "Smart categorization",
        "Bill reminders",
        "Expense analytics",
        "Priority support",
        "Advanced security",
        "Multi-bank support",
        "Custom categories"
      ],
      limitations: []
    },
    {
      name: "Business",
      icon: Rocket,
      description: "Built for businesses and teams",
      price: { monthly: 299, annual: 2899 },
      color: "from-purple-500 to-pink-600",
      popular: false,
      features: [
        "Everything in Pro",
        "Team management",
        "Business analytics",
        "API access",
        "Webhook integrations",
        "Custom branding",
        "Dedicated support",
        "Advanced reporting",
        "Multi-user access",
        "Enterprise security"
      ],
      limitations: []
    }
  ]

  const savings = (monthly: number, annual: number) => {
    if (monthly === 0) return 0
    return Math.round(((monthly * 12 - annual) / (monthly * 12)) * 100)
  }

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-900/50 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-800/30">
            <Sparkles className="w-4 h-4" />
            <span>Simple & Transparent Pricing</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Choose your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              perfect plan
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start free and upgrade as you grow. All plans include bank-grade security,
            24/7 support, and our AI-powered smart features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <motion.div
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-6 h-6 bg-white rounded-full shadow-md"
              />
            </motion.button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-semibold border border-green-800/30">
                Save up to 25%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const currentPrice = isAnnual ? plan.price.annual : plan.price.monthly
            const savingsPercent = savings(plan.price.monthly, plan.price.annual)

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <Card className={`h-full p-8 relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border-gray-700/50 ${
                  plan.popular
                    ? 'border-2 border-blue-500/50 shadow-xl shadow-blue-500/10 scale-105'
                    : 'border border-gray-700/50 hover:shadow-lg hover:shadow-purple-500/5'
                } transition-all duration-300`}>

                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${plan.color}`} />

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} text-white mb-4 shadow-lg`}>
                      <plan.icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>                  {/* Price */}
                  <div className="text-center mb-8">
                                        <div className="flex items-end justify-center space-x-1">
                      <span className="text-4xl font-bold text-white">₹{currentPrice}</span>
                      {currentPrice > 0 && (
                        <span className="text-gray-400 text-lg mb-1">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                    </div>

                    {isAnnual && savingsPercent > 0 && (
                      <div className="text-green-400 text-sm font-medium mt-2">
                        Save {savingsPercent}% vs monthly billing
                      </div>
                    )}

                    {!isAnnual && plan.price.monthly > 0 && (
                      <div className="text-gray-400 text-sm mt-2">
                        or ₹{plan.price.annual}/year
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-900/50 rounded-full flex items-center justify-center border border-green-800/30">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}

                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center space-x-3 opacity-60">
                        <div className="flex-shrink-0 w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="w-3 h-3 text-gray-500">×</span>
                        </div>
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? "glow" : "outline"}
                    className={`w-full group ${
                      plan.popular
                        ? ''
                        : 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {plan.name === "Free" ? "Get Started Free" : `Choose ${plan.name}`}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime guaranteed</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="w-8 h-8 text-purple-400" />
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-gray-300 text-sm">Happy customers</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <div className="text-2xl font-bold text-white">₹10Cr+</div>
              <div className="text-gray-300 text-sm">Processed safely</div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Need something bigger?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We offer custom enterprise solutions with dedicated support,
              advanced integrations, and volume pricing for large organizations.
            </p>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              Contact Sales
            </Button>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}

export default PricingSection