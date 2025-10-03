'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import WorkshopCard from '@/components/cards/workshop-card'
import { useWorkshops } from '@/lib/hooks/usePortfolioData'
import { Skeleton } from '@/components/ui/skeleton'
import { Workshop } from '@/lib/data'
import { Links } from '@/contasnts'
import Section from '../section'

const WORKSHOP_IMAGES = [
  '/images/nextjs.png',
  '/images/workshop.png',
  '/images/mac-test.png',
] as const

export function FeaturedWorkshops() {
  const { data: workshops, isLoading, error } = useWorkshops()

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Failed to load workshops</p>
      </div>
    )
  }

  return (
    <Section className="pb-12">
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-xl font-bold sm:text-3xl">Featured Workshops</h3>
        <Link href={Links.Workshops}>
          <Button variant="outline">
            View All Workshops
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-24 sm:gap-10 relative">
        {isLoading ? (
          Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-[300px] rounded-lg">
                <Skeleton className="w-full h-full" />
              </div>
            ))
        ) : (
          <>
            {workshops?.slice(0, 3).map((workshop: Workshop, index: number) => (
              <div key={workshop._id}>
                <WorkshopCard
                  workshop={workshop}
                  imagePosition={index % 2 === 0 ? 'right' : 'left'}
                  primaryImage={WORKSHOP_IMAGES[index]}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </Section>
  )
}
