"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Phone,
  Trash2,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Clock,
  AlertCircle,
  Info
} from 'lucide-react'

export default function DataDeletionPage() {
  const [step, setStep] = useState<'phone' | 'otp' | 'confirmation' | 'success'>('phone')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [timeLeft, setTimeLeft] = useState(0)
  const [canResend, setCanResend] = useState(false)

  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  // Timer for OTP expiry
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (step === 'otp' && timeLeft === 0) {
      setCanResend(true)
    }
  }, [timeLeft, step])

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '')

    // Limit to 10 digits for Indian mobile numbers
    const limited = numbers.slice(0, 10)

    // Format as XXX-XXX-XXXX
    if (limited.length >= 6) {
      return `${limited.slice(0, 3)}-${limited.slice(3, 6)}-${limited.slice(6)}`
    } else if (limited.length >= 3) {
      return `${limited.slice(0, 3)}-${limited.slice(3)}`
    }
    return limited
  }

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const cleanPhone = phoneNumber.replace(/\D/g, '')

    if (cleanPhone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }

    if (!cleanPhone.match(/^[6-9][0-9]{9}$/)) {
      setError('Please enter a valid Indian mobile number')
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 2000))

      // In real implementation, call your backend API
      // const response = await fetch('/api/data-deletion/send-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ phoneNumber: `+91${cleanPhone}` })
      // })

      setStep('otp')
      setTimeLeft(300) // 5 minutes
      setCanResend(false)
    } catch {
      setError('Failed to send OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return // Prevent multiple characters

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const otpValue = otp.join('')

    if (otpValue.length !== 6) {
      setError('Please enter the complete 6-digit OTP')
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call to verify OTP
      await new Promise(resolve => setTimeout(resolve, 2000))

      // In real implementation, verify OTP
      // const response = await fetch('/api/data-deletion/verify-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     phoneNumber: `+91${phoneNumber.replace(/\D/g, '')}`,
      //     otp: otpValue
      //   })
      // })

      setStep('confirmation')
    } catch {
      setError('Invalid OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleConfirmDeletion = async () => {
    setIsLoading(true)

    try {
      // Simulate API call to initiate data deletion
      await new Promise(resolve => setTimeout(resolve, 3000))

      // In real implementation, initiate data deletion process
      // const response = await fetch('/api/data-deletion/initiate', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     phoneNumber: `+91${phoneNumber.replace(/\D/g, '')}`,
      //     confirmed: true
      //   })
      // })

      setStep('success')
    } catch {
      setError('Failed to process deletion request. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendOtp = async () => {
    setError('')
    setIsLoading(true)
    setCanResend(false)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setTimeLeft(300)
      setOtp(['', '', '', '', '', ''])
    } catch {
      setError('Failed to resend OTP. Please try again.')
      setCanResend(true)
    } finally {
      setIsLoading(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-16">
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
            <Trash2 className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Request Data Deletion
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Delete your personal data from Cap&apos;n Pay permanently
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
              step === 'phone' ? 'bg-blue-600 text-white' :
              ['otp', 'confirmation', 'success'].includes(step) ? 'bg-green-600 text-white' :
              'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
            }`}>
              1
            </div>
            <div className={`w-8 h-1 ${
              ['otp', 'confirmation', 'success'].includes(step) ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
            }`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
              step === 'otp' ? 'bg-blue-600 text-white' :
              ['confirmation', 'success'].includes(step) ? 'bg-green-600 text-white' :
              'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
            }`}>
              2
            </div>
            <div className={`w-8 h-1 ${
              ['confirmation', 'success'].includes(step) ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
            }`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
              step === 'confirmation' ? 'bg-blue-600 text-white' :
              step === 'success' ? 'bg-green-600 text-white' :
              'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
            }`}>
              3
            </div>
          </div>
        </div>

        <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          {/* Step 1: Phone Number */}
          {step === 'phone' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Enter Your Mobile Number
              </h2>

              <form onSubmit={handlePhoneSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                      placeholder="XXX-XXX-XXXX"
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Enter your 10-digit Indian mobile number
                  </p>
                </div>

                {error && (
                  <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      Send OTP
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          )}

          {/* Step 2: OTP Verification */}
          {step === 'otp' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Verify OTP
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Enter the 6-digit code sent to +91-{phoneNumber}
              </p>

              <form onSubmit={handleOtpSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Verification Code
                  </label>
                  <div className="flex space-x-3 justify-center">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          otpRefs.current[index] = el
                        }}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg font-semibold bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    {timeLeft > 0 ? (
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-1" />
                        OTP expires in {formatTime(timeLeft)}
                      </p>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={!canResend || isLoading}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                </div>

                {error && (
                  <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || otp.join('').length !== 6}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Verifying...
                    </>
                  ) : (
                    'Verify OTP'
                  )}
                </Button>
              </form>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 'confirmation' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Confirm Data Deletion
              </h2>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300 mb-1">
                      Important Notice
                    </h3>
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                      This action cannot be undone. All your personal data, transaction history, and account information will be permanently deleted.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="font-medium text-gray-900 dark:text-white">The following data will be deleted:</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Trash2 className="w-4 h-4 mr-2 text-red-500" />
                    Personal information (name, phone, email)
                  </li>
                  <li className="flex items-center">
                    <Trash2 className="w-4 h-4 mr-2 text-red-500" />
                    Payment history and transaction records
                  </li>
                  <li className="flex items-center">
                    <Trash2 className="w-4 h-4 mr-2 text-red-500" />
                    Contact information and relationships
                  </li>
                  <li className="flex items-center">
                    <Trash2 className="w-4 h-4 mr-2 text-red-500" />
                    Voice memos and transcriptions
                  </li>
                  <li className="flex items-center">
                    <Trash2 className="w-4 h-4 mr-2 text-red-500" />
                    Spending insights and AI analysis
                  </li>
                  <li className="flex items-center">
                    <Trash2 className="w-4 h-4 mr-2 text-red-500" />
                    App preferences and settings
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">
                      Processing Time
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      Data deletion will be completed within 30 days as required by privacy regulations. You will receive a confirmation email once the process is complete.
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm mb-4">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setStep('phone')}
                  className="flex-1"
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirmDeletion}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Processing...
                    </>
                  ) : (
                    'Confirm Deletion'
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 'success' && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Request Submitted Successfully
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your data deletion request has been submitted and will be processed within 30 days.
                You will receive a confirmation email once the deletion is complete.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-700 dark:text-green-400">
                  <strong>Reference ID:</strong> DD-{Date.now().toString().slice(-8)}
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                  Please save this reference ID for your records.
                </p>
              </div>

              <Button
                onClick={() => window.location.href = '/'}
                className="w-full"
              >
                Return to Homepage
              </Button>
            </div>
          )}
        </Card>

        {/* Legal Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            This process complies with GDPR, CCPA, and Indian data protection laws.
            <br />
            For questions, contact privacy@capnpay.com
          </p>
        </div>
      </div>
    </div>
  )
}