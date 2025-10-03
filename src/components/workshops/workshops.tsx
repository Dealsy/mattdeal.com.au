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
import { useState, useMemo } from 'react'
import WorkshopsSkeleton from '../ui/skeletons/workshopsSkeleton'

import { ViewToggle } from '@/components/ui/view-toggle'
import { ContentLayout } from '@/components/ui/content-layout'
import { useViewMode } from '@/hooks/useViewMode'
import { useDebounce } from '@/hooks/useDebounce'
import { WorkshopCard } from './workshop-card'
import { Workshop } from '@/types/types'

export default function Workshops() {
  const [inputValue, setInputValue] = useState('')
  const searchQuery = useDebounce(inputValue)
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedDuration, setSelectedDuration] = useState('all')
  const { view, setView } = useViewMode('list')

  const { data: workshops, isLoading } = useQuery<Workshop[]>({
    queryKey: ['workshops'],
    queryFn: getWorkshops,
  })

  // Memoize the filtered workshops
  const filteredWorkshops = useMemo(() => {
    if (!workshops) return []

    return workshops.filter(workshop => {
      const searchLower = searchQuery.toLowerCase()
      const matchesSearch =
        workshop.title.toLowerCase().includes(searchLower) ||
        workshop.description.toLowerCase().includes(searchLower) ||
        workshop.topics.some(topic => topic.toLowerCase().includes(searchLower))

      const matchesLevel = selectedLevel === 'all' || workshop.level === selectedLevel
      const matchesDuration = selectedDuration === 'all' || workshop.duration === selectedDuration

      return matchesSearch && matchesLevel && matchesDuration
    })
  }, [workshops, searchQuery, selectedLevel, selectedDuration])

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
        <div className="bg-background-lighter border border-t-0 border-background-border dark:border-t dark:border-b-0 dark:border-background-border/80 p-4 rounded-xl mb-8">
          <div className="flex gap-4 flex-wrap items-center">
            <div className="relative flex-1 max-w-xs">
              <Input
                placeholder="Search workshops..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-background-elevated">
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent className="bg-background-elevated">
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="1 hour">1 hour</SelectItem>
                <SelectItem value="2 hours">2 hours</SelectItem>
                <SelectItem value="3+ hours">3+ hours</SelectItem>
              </SelectContent>
            </Select>
            <ViewToggle view={view} setView={setView} className="ml-auto" />
          </div>
        </div>

        {/* Grid Layout */}
        <ContentLayout view={view}>
          {filteredWorkshops.map(workshop => (
            <WorkshopCard key={workshop._id} workshop={workshop} view={view} />
          ))}
        </ContentLayout>
      </div>
    </div>
  )
}
