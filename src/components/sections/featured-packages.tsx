'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { PackageCard } from '@/components/cards/package-card'
import { usePackages } from '@/lib/hooks/usePortfolioData'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Package } from '@/lib/data'
import Section from '../section'

export function FeaturedPackages() {
  const { data: packages, isLoading, error } = usePackages()

  const featuredPackages: Package[] = packages?.slice(0, 3) || []

  // Handle error state
  if (error) {
    return (
      <section className="py-20">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Failed to load packages. Please try again later.</AlertDescription>
        </Alert>
      </section>
    )
  }

  // Handle no packages found
  if (!isLoading && (!packages || packages.length === 0)) {
    return (
      <section className="py-20">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>No packages available at the moment.</AlertDescription>
        </Alert>
      </section>
    )
  }

  return (
    <Section className="pb-12 pt-70 sm:pt-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
        <h3 className="text-xl font-bold sm:text-3xl">Featured Packages</h3>
        <Link href="/packages">
          <Button variant="outline">
            View All Packages
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 md:gap-8">
        {isLoading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-[200px] rounded-lg">
                  <Skeleton className="w-full h-full" />
                </div>
              ))
          : featuredPackages
              ?.slice(0, 3)
              .filter(pkg => pkg && pkg._id)
              .map(pkg => (
                <PackageCard
                  key={pkg._id}
                  pkg={{
                    _id: pkg._id,
                    name: pkg.name || 'Untitled Package',
                    description: pkg.description || 'No description available',
                    downloads: pkg.downloads || 0,
                    version: pkg.version || '0.0.0',
                    npmLink: pkg.npmLink || '',
                    githubLink: pkg.githubLink || '',
                    documentation: pkg.documentation || '',
                    tags: pkg.tags || [],
                    image: pkg.image || '',
                  }}
                />
              ))}
      </div>
    </Section>
  )
}
