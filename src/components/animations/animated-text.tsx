"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  type?: 'typewriter' | 'fade' | 'slide' | 'gradient'
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  duration = 0.05,
  type = 'typewriter'
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (type === 'typewriter') {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayedText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }
      }, delay + currentIndex * duration * 1000)

      return () => clearTimeout(timer)
    } else {
      setDisplayedText(text)
    }
  }, [currentIndex, text, delay, duration, type])

  if (type === 'typewriter') {
    return (
      <span className={cn(className)}>
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-[3px] h-[1.2em] bg-current ml-1"
        />
      </span>
    )
  }

  if (type === 'gradient') {
    return (
      <motion.span
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className={cn(
          "bg-gradient-to-r from-blue-600 via-purple-600 to-gold-500 bg-clip-text text-transparent bg-[length:200%_100%]",
          className
        )}
      >
        {text}
      </motion.span>
    )
  }

  if (type === 'fade') {
    return (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        className={cn(className)}
      >
        {text}
      </motion.span>
    )
  }

  if (type === 'slide') {
    return (
      <motion.span
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        className={cn(className)}
      >
        {text}
      </motion.span>
    )
  }

  return <span className={cn(className)}>{text}</span>
}

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 2,
  className,
  prefix = '',
  suffix = ''
}) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    const startTime = Date.now()
    const startValue = start
    const endValue = end
    const diff = endValue - startValue

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (diff * easeOutQuart))

      setCount(currentValue)

      if (progress >= 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [start, end, duration])

  return (
    <span className={cn(className)}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}