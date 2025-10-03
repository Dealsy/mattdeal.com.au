'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, cubicBezier } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

const colors = {
  cyan: {
    400: 'rgb(34 211 238)',
    500: 'rgb(6 182 212)',
  },
  purple: {
    400: 'rgb(192 132 252)',
    500: 'rgb(168 85 247)',
  },
  rose: {
    400: 'rgb(251 113 133)',
    500: 'rgb(244 63 94)',
  },
  blue: {
    400: 'rgb(96 165 250)',
    500: 'rgb(59 130 246)',
  },
  emerald: {
    400: 'rgb(52 211 153)',
    500: 'rgb(16 185 129)',
  },
  indigo: {
    400: 'rgb(85 75 255)',
    500: 'rgb(79 70 229)',
  },
} as const

export default function LampContainer({
  children,
  className,
  color = 'cyan',
}: {
  children: React.ReactNode
  className?: string
  color?: keyof typeof colors
}) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.2,
  })

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const colorStyle = {
    '--lamp-color-400': colors[color][400],
    '--lamp-color-500': colors[color][500],
  } as React.CSSProperties

  const currentTheme = mounted ? theme : systemTheme

  const animationConfig = {
    initial: { opacity: 0.5, width: '8rem' },
    animate: isInView
      ? { opacity: 1, width: isMobile ? '20rem' : '25rem' }
      : { opacity: 0.5, width: '8rem' },
    transition: { duration: 1, ease: cubicBezier(0.33, 1, 0.68, 1) },
  }

  const blurAnimationConfig = {
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    variants: {
      hidden: { opacity: 0, width: '8rem' },
      visible: { opacity: 0.5, width: isMobile ? '16rem' : '25rem' },
    },
    transition: { duration: 1, ease: cubicBezier(0.33, 1, 0.68, 1) },
  }

  return (
    <div
      ref={containerRef}
      style={colorStyle}
      className={cn(
        'relative flex flex-col items-center justify-start w-full overflow-hidden rounded-md z-0 py-8 sm:py-32',
        className
      )}
    >
      {currentTheme === 'dark' ? (
        <div className="relative flex w-full items-center justify-center isolate z-0 h-[5vh] min-h-[200px] scale-[0.6] sm:scale-100">
          <motion.div
            {...animationConfig}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-32 sm:h-56 overflow-visible bg-gradient-conic from-[var(--lamp-color-500)] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] opacity-90"
          >
            <div className="absolute w-[100%] left-0 h-24 sm:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] opacity-90" />
            <div className="absolute w-24 sm:w-40 h-[100%] left-0  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)] opacity-90" />
          </motion.div>

          <motion.div
            {...animationConfig}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-32 sm:h-56 bg-gradient-conic from-transparent via-transparent to-[var(--lamp-color-500)] text-white [--conic-position:from_290deg_at_center_top] opacity-90"
          >
            <div className="absolute w-24 sm:w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)] opacity-90" />
            <div className="absolute w-[100%] right-0 h-24 sm:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] opacity-90" />
          </motion.div>

          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150  blur-[80px] opacity-75" />

          <motion.div
            {...blurAnimationConfig}
            className="absolute inset-auto z-50 h-36 -translate-y-1/2 rounded-full bg-[var(--lamp-color-500)] blur-[100px] opacity-50"
          />

          <div className="absolute inset-auto z-50 -translate-y-[3.8rem] sm:-translate-y-[7rem]">
            <motion.div
              {...animationConfig}
              className="h-0.5 bg-[var(--lamp-color-400)] shadow-[0_0_10px_2px_var(--lamp-color-400)] backdrop-blur-[1px]"
            />
          </div>

          <div className="absolute right-0 z-60 -translate-y-[6.8rem] translate-x-[-8rem]"></div>

          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] " />
        </div>
      ) : (
        <div className="relative flex w-full items-center justify-center isolate z-0 h-[5vh] min-h-[200px] scale-[0.7] sm:scale-100">
          <div className="flex flex-row gap-4 mb-65 relative z-50">
            <div className="flex items-center gap-4">
              <div
                className="h-1 rounded-full w-[15rem] sm:w-[27rem]"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 50px rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <div className="h-full w-full opacity-50" />
              </div>
            </div>
          </div>

          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-transparent" />
        </div>
      )}

      <div className={cn('relative z-50 flex flex-col items-center px-5 w-full')}>{children}</div>
    </div>
  )
}
