'use client'

import { useState, useEffect } from 'react'

export type ViewMode = 'grid' | 'list'

export function useViewMode(defaultView: ViewMode = 'list') {
  const [view, setView] = useState<ViewMode>(defaultView)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia('(max-width: 768px)')

    const updateViewMode = () => {
      setView(mediaQuery.matches ? 'grid' : 'list')
    }

    // Initial check
    updateViewMode()

    // Listen for changes
    mediaQuery.addEventListener('change', updateViewMode)

    return () => {
      mediaQuery.removeEventListener('change', updateViewMode)
    }
  }, [])

  // During SSR and initial client render, return the default view
  if (!mounted) {
    return { view: defaultView, setView: () => {} }
  }

  return { view, setView }
}
