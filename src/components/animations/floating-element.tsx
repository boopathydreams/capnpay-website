"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'circular'
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className,
  delay = 0,
  duration = 3,
  distance = 20,
  direction = 'up'
}) => {
  const getAnimation = () => {
    switch (direction) {
      case 'up':
        return {
          y: [-distance, distance, -distance],
        }
      case 'down':
        return {
          y: [distance, -distance, distance],
        }
      case 'left':
        return {
          x: [-distance, distance, -distance],
        }
      case 'right':
        return {
          x: [distance, -distance, distance],
        }
      case 'circular':
        return {
          x: [0, distance, 0, -distance, 0],
          y: [-distance, 0, distance, 0, -distance],
        }
      default:
        return {
          y: [-distance, distance, -distance],
        }
    }
  }

  return (
    <motion.div
      animate={getAnimation()}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxElementProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  className,
  speed = 0.5,
  direction = 'up'
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{
        y: direction === 'up' ? -50 * speed : 50 * speed
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}