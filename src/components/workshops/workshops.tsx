'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useQuery } from '@tanstack/react-query'
import { getWorkshops } from '@/lib/sanity/client'
import { useState, useTransition } from 'react'
import WorkshopsSkeleton from '../ui/skeletons/workshopsSkeleton'
import { ViewToggle } from '@/components/ui/view-toggle'
import { ContentLayout } from '@/components/ui/content-layout'
import { useViewMode } from '@/hooks/useViewMode'
import { useDebounce } from '@/hooks/useDebounce'
import { WorkshopCard } from './workshop-card'
import { Workshop } from '@/types/types'
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function Workshops() {
  const [inputValue, setInputValue] = useState('')
  const searchQuery = useDebounce(inputValue)
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedDuration, setSelectedDuration] = useState('all')
  const { view, setView } = useViewMode('list')
  const [isPending, startTransition] = useTransition()

  const { data: workshops, isLoading } = useQuery<Workshop[]>({
    queryKey: ['workshops'],
    queryFn: getWorkshops,
  })

  const filteredWorkshops = workshops?.filter(workshop => {
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch =
      workshop.title.toLowerCase().includes(searchLower) ||
      workshop.description.toLowerCase().includes(searchLower) ||
      workshop.topics.some(topic => topic.toLowerCase().includes(searchLower))

    const matchesLevel = selectedLevel === 'all' || workshop.level === selectedLevel
    const matchesDuration = selectedDuration === 'all' || workshop.duration === selectedDuration

    return matchesSearch && matchesLevel && matchesDuration
  })

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

  const handleLevelChange = (value: string) => {
    startTransition(() => {
      setSelectedLevel(value)
    })
  }

  const handleDurationChange = (value: string) => {
    startTransition(() => {
      setSelectedDuration(value)
    })
  }

  if (isLoading) {
    return <WorkshopsSkeleton />
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Technical Workshops
          </motion.h1>
          <p className="text-muted-foreground text-lg">
            Workshops built to help you learn the modern.
          </p>
        </header>

        {/* Filter/Search Section */}
        <ViewTransition>
          <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-sm py-4 mb-8">
            <div className="flex gap-4 flex-wrap items-center">
              <div className="relative flex-1 max-w-xs">
                <Input
                  placeholder="Search workshops..."
                  value={inputValue}
                  onChange={handleSearch}
                />
              </div>
              <Select value={selectedLevel} onValueChange={handleLevelChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDuration} onValueChange={handleDurationChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="1 hour">1 hour</SelectItem>
                  <SelectItem value="2 hours">2 hours</SelectItem>
                  <SelectItem value="3+ hours">3+ hours</SelectItem>
                </SelectContent>
              </Select>
              <ViewToggle view={view} setView={handleViewChange} className="ml-auto" />
            </div>
          </div>
        </ViewTransition>

        {/* Grid Layout */}
        <div className={isPending ? 'opacity-70 transition-opacity duration-150' : ''}>
          <ViewTransition>
            <ContentLayout view={view}>
              {filteredWorkshops?.map(workshop => (
                <WorkshopCard key={workshop._id} workshop={workshop} view={view} />
              ))}
            </ContentLayout>
          </ViewTransition>
        </div>
      </div>
    </div>
  )
}
