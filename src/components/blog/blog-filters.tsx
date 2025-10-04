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
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'

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
    setInputValue('')
    setSearchQuery('')
    setSelectedTypes([])
    setSelectedDifficulties([])
  }

  const toggleType = (type: string) => {
    setSelectedTypes((prev: string[]) =>
      prev.includes(type) ? prev.filter((t: string) => t !== type) : [...prev, type]
    )
  }

  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulties((prev: string[]) =>
      prev.includes(difficulty)
        ? prev.filter((d: string) => d !== difficulty)
        : [...prev, difficulty]
    )
  }

  return (
    <motion.div
      className="mb-8 py-4 flex justify-center w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="space-y-4 w-full max-w-md px-4">
        <div className="flex w-full">
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="pl-9 w-full"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>
            <div className="w-[100px] flex justify-end">
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  className="bg-background-elevated border-background-border border rounded-2xl cursor-pointer inset-shadow-sm inset-shadow-black/40 dark:inset-shadow-black/80"
                  size="sm"
                  onClick={clearAllFilters}
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </div>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel>Types</FieldLabel>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(typeCount).map(([type, count]) => {
                  const selected = selectedTypes.includes(type)
                  return (
                    <Button
                      key={type}
                      type="button"
                      variant={selected ? 'secondary' : 'outline'}
                      size="sm"
                      aria-pressed={selected}
                      className={cn(
                        'justify-between rounded-lg',
                        selected && 'ring-1 ring-primary'
                      )}
                      onClick={() => toggleType(type)}
                    >
                      <span>{type}</span>
                      <span className="text-muted-foreground text-xs">{count}</span>
                    </Button>
                  )
                })}
              </div>
            </Field>
            <Field>
              <FieldLabel>Difficulty</FieldLabel>
              <div className="grid grid-cols-3 gap-2">
                {DIFFICULTY_ORDER.map(difficulty => {
                  const count = difficultyCount[difficulty] || 0
                  const key = difficulty.toLowerCase() as Difficulty
                  const selected = selectedDifficulties.includes(difficulty)
                  const colorClass = selected
                    ? difficultyFilterColors[key].selected
                    : difficultyFilterColors[key].default
                  return (
                    <Button
                      key={difficulty}
                      type="button"
                      variant="outline"
                      size="sm"
                      aria-pressed={selected}
                      className={cn(
                        'rounded-lg justify-between',
                        colorClass,
                        selected && 'ring-1 ring-background-border'
                      )}
                      onClick={() => toggleDifficulty(difficulty)}
                    >
                      <span>{difficulty}</span>
                      {count ? (
                        <span className="text-xs text-muted-foreground">{count}</span>
                      ) : null}
                    </Button>
                  )
                })}
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </motion.div>
  )
}
