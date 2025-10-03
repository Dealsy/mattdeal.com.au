'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Package, Github } from 'lucide-react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { getPackages } from '@/lib/sanity/client'
import { useState, useTransition } from 'react'
import { ViewToggle } from '@/components/ui/view-toggle'
import { ContentLayout } from '@/components/ui/content-layout'
import { useViewMode } from '@/hooks/useViewMode'
import { Button } from '../ui/button'
import WorkshopsSkeleton from '../ui/skeletons/workshopsSkeleton'
import { useDebounce } from '@/hooks/useDebounce'
import { unstable_ViewTransition as ViewTransition } from 'react'

interface Package {
  _id: string
  name: string
  description: string
  version: string
  npmLink: string
  githubLink: string
  documentation: string
  tags: string[]
}

export default function Packages() {
  const [inputValue, setInputValue] = useState('')
  const searchQuery = useDebounce(inputValue)
  const { view, setView } = useViewMode('list')
  const [isPending, startTransition] = useTransition()

  const { data: packages, isLoading } = useQuery<Package[]>({
    queryKey: ['packages'],
    queryFn: getPackages,
  })

  const filteredPackages = packages?.filter(
    (pkg: Package) =>
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleViewChange = (newView: 'grid' | 'list') => {
    startTransition(() => {
      setView(newView)
    })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setInputValue(e.target.value)
    })
  }

  if (isLoading) {
    return <WorkshopsSkeleton />
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            NPM Packages
          </motion.h1>
          <p className="text-muted-foreground text-lg">
            Open source packages and tools for developers
          </p>
        </header>

        {/* Search and View Toggle */}
        <div className="mb-8 sticky top-20 z-30 bg-background/80 backdrop-blur-sm py-4">
          <div className="flex gap-4 flex-wrap items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search packages..."
                className="pl-9"
                value={inputValue}
                onChange={handleSearch}
              />
            </div>
            <ViewToggle view={view} setView={handleViewChange} className="ml-auto" />
          </div>
        </div>

        {/* Packages Grid with View Transitions */}
        <div className={isPending ? 'opacity-70 transition-opacity duration-150' : ''}>
          <ViewTransition>
            <ContentLayout view={view}>
              {filteredPackages?.map((pkg: Package) => (
                <Link
                  key={pkg._id}
                  href={pkg.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    layout
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden border hover:border-primary/50 dark:hover:border-primary/70 transition-all duration-300 h-full hover:shadow-lg dark:hover:shadow-primary/20">
                      <div className={`${view === 'list' ? 'flex gap-6' : 'flex flex-col'}`}>
                        <div className={`p-6 ${view === 'list' ? 'flex-1' : ''}`}>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-mono font-semibold text-primary mb-1 group-hover:text-primary/90 transition-colors">
                                {pkg.name}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Package className="w-4 h-4" />v{pkg.version}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {pkg.npmLink && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={e => {
                                    e.preventDefault()
                                    window.open(pkg.npmLink, '_blank')
                                  }}
                                >
                                  NPM
                                </Button>
                              )}
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={e => {
                                  e.preventDefault()
                                  window.open(pkg.githubLink, '_blank')
                                }}
                              >
                                <Github className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {pkg.description}
                          </p>

                          {/* Installation Command */}
                          <div className="bg-muted/50 p-3 rounded-lg font-mono text-sm mb-4 group-hover:bg-primary/5 transition-colors select-all cursor-text">
                            npm install {pkg.name}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {pkg.tags.map(tag => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-primary/5 hover:bg-primary/10 text-primary/90"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Quick Links */}
                          {pkg.documentation && (
                            <div className="mt-4 pt-4 border-t border-border/50">
                              <Button
                                variant="link"
                                className="h-auto p-0 text-primary hover:text-primary/90"
                                onClick={e => {
                                  e.preventDefault()
                                  window.open(pkg.documentation, '_blank')
                                }}
                              >
                                View Documentation
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </ContentLayout>
          </ViewTransition>
        </div>
      </div>
    </div>
  )
}
