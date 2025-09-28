import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search } from 'lucide-react'
import { BlogMetadata } from '@/types/blog'
import { useDebounce } from '@/hooks/useDebounce'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { difficultyFilterColors, type Difficulty } from '@/contasnts'
import { cn } from '@/lib/utils'
import { useTransition } from 'react'

const DIFFICULTY_ORDER = ['Easy', 'Intermediate', 'Advanced'] as const

type BlogFiltersProps = {
  posts?: (BlogMetadata & { slug: string })[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedTypes: string[]
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>
  selectedDifficulties: string[]
  setSelectedDifficulties: React.Dispatch<React.SetStateAction<string[]>>
}

export function BlogFilters({
  posts,
  searchQuery,
  setSearchQuery,
  selectedTypes,
  setSelectedTypes,
  selectedDifficulties,
  setSelectedDifficulties,
}: BlogFiltersProps) {
  const [inputValue, setInputValue] = useState(searchQuery)
  const debouncedValue = useDebounce(inputValue)
  const [, startTransition] = useTransition()

  useEffect(() => {
    startTransition(() => {
      setSearchQuery(debouncedValue)
    })
  }, [debouncedValue, setSearchQuery, startTransition])

  // Get unique types and their counts
  const typeCount =
    posts?.reduce(
      (acc, post) => {
        if (post.type) {
          acc[post.type] = (acc[post.type] || 0) + 1
        }
        return acc
      },
      {} as Record<string, number>
    ) || {}

  // Get unique difficulties and their counts
  const difficultyCount =
    posts?.reduce(
      (acc, post) => {
        if (post.difficulty) {
          acc[post.difficulty] = (acc[post.difficulty] || 0) + 1
        }
        return acc
      },
      {} as Record<string, number>
    ) || {}

  const hasActiveFilters =
    searchQuery || selectedTypes.length > 0 || selectedDifficulties.length > 0

  const clearAllFilters = () => {
    startTransition(() => {
      setInputValue('')
      setSearchQuery('')
      setSelectedTypes([])
      setSelectedDifficulties([])
    })
  }

  const toggleType = (type: string) => {
    startTransition(() => {
      setSelectedTypes((prev: string[]) =>
        prev.includes(type) ? prev.filter((t: string) => t !== type) : [...prev, type]
      )
    })
  }

  const toggleDifficulty = (difficulty: string) => {
    startTransition(() => {
      setSelectedDifficulties((prev: string[]) =>
        prev.includes(difficulty)
          ? prev.filter((d: string) => d !== difficulty)
          : [...prev, difficulty]
      )
    })
  }

  return (
    <motion.div
      className="mb-8 py-4 flex justify-center w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="space-y-4 w-full max-w-3xl px-4">
        <div className="flex justify-center w-full">
          <div className="flex items-center gap-4 w-full max-w-[460px]">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="pl-9"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>
            <div className="w-[100px] flex justify-end">
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-muted-foreground">Types:</span>
            {Object.entries(typeCount).map(([type, count]) => (
              <Badge
                key={type}
                variant={selectedTypes.includes(type) ? 'default' : 'outline'}
                className={cn(
                  'cursor-pointer transition-all duration-300',
                  selectedTypes.includes(type) && 'scale-105'
                )}
                onClick={() => toggleType(type)}
              >
                {type} {count}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 dark:bg-[#020817] dark:p-0 bg-white rounded-md p-2 justify-center">
            <span className="text-sm text-muted-foreground">Difficulty:</span>
            {DIFFICULTY_ORDER.map(difficulty => {
              const count = difficultyCount[difficulty] || 0
              const difficultyKey = difficulty.toLowerCase() as Difficulty
              return (
                <Badge
                  key={difficulty}
                  variant="secondary"
                  className={cn(
                    'cursor-pointer transition-all duration-300',
                    selectedDifficulties.includes(difficulty)
                      ? cn(difficultyFilterColors[difficultyKey].selected, 'scale-105')
                      : difficultyFilterColors[difficultyKey].default
                  )}
                  onClick={() => toggleDifficulty(difficulty)}
                >
                  {difficulty} {count}
                </Badge>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
