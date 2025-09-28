'use client'

import { useEffect, useRef, useState } from 'react'

type MaskedContentProps = {
  children: React.ReactNode
}

export default function MaskedContent({ children }: MaskedContentProps) {
  const [maskPercentage, setMaskPercentage] = useState(80)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    let rafId: number
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      // Use requestAnimationFrame for smoother updates
      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight

        // Calculate how far we've scrolled as a percentage
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100

        // Add some easing to the scroll effect
        const scrollDelta = scrollPosition - lastScrollY
        const easing = Math.abs(scrollDelta) > 10 ? 0.2 : 0.1

        // Update mask percentage with easing
        setMaskPercentage(prev => {
          const target = Math.min(100, 80 + scrollPercentage * 0.2)
          return prev + (target - prev) * easing
        })

        lastScrollY = scrollPosition
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="relative">
      <div className="prose prose-lg max-w-none w-full prose-slate dark:prose-invert prose-pre:max-w-none prose-pre:w-full prose-code:text-purple-400 prose-code:bg-inherit dark:prose-code:text-orange-500 prose-code:before:content-none prose-code:after:content-none">
        {children}
      </div>
      <div
        className="fixed bottom-0 left-0 right-0 h-[100vh] pointer-events-none transition-all duration-300"
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent,
              hsl(var(--background) / 0.8) 20%,
              hsl(var(--background) / 0.9) 40%,
              hsl(var(--background) / 0.95) 60%,
              hsl(var(--background)) 80%
            )
          `,
          maskImage: `
            linear-gradient(
              to bottom,
              transparent ${maskPercentage}%,
              rgba(0, 0, 0, 0.5) ${maskPercentage + 10}%,
              black ${maskPercentage + 20}%
            )
          `,
          WebkitMaskImage: `
            linear-gradient(
              to bottom,
              transparent ${maskPercentage}%,
              rgba(0, 0, 0, 0.5) ${maskPercentage + 10}%,
              black ${maskPercentage + 20}%
            )
          `,
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
        }}
      />
    </div>
  )
}
