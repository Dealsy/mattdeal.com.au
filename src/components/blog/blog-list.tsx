'use client'

import { useState } from 'react'
import { BlogMetadata } from '@/types/blog'
import BlogCard from './blog-card'
import { BlogFilters } from './blog-filters'
import { startOfDay } from 'date-fns'
import { parsePublishedDate } from '@/lib/utils/formatters'
import { unstable_ViewTransition as ViewTransition } from 'react'

type BlogPost = BlogMetadata & { slug: string }

interface BlogListProps {
  initialPosts: BlogPost[]
}

export default function BlogList({ initialPosts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])

  // Filter posts based on search, types, difficulty, and date
  const filteredPosts = initialPosts.filter(post => {
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      : true

    const matchesTypes = selectedTypes.length === 0 || selectedTypes.includes(post.type)
    const matchesDifficulties =
      selectedDifficulties.length === 0 || selectedDifficulties.includes(post.difficulty)

    // Safely parse and handle dates
    let postDate: Date | null = null
    try {
      postDate = startOfDay(parsePublishedDate(post.publishedAt))
    } catch (error) {
      console.error('Error parsing date for post:', post.title, post.publishedAt, error)
      return false
    }

    return matchesSearch && matchesTypes && matchesDifficulties
  })

  if (filteredPosts.length === 0) {
    return (
      <div className="space-y-8">
        <BlogFilters
          posts={initialPosts}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          selectedDifficulties={selectedDifficulties}
          setSelectedDifficulties={setSelectedDifficulties}
        />
        <div className="flex justify-center items-center h-[300px]">
          <p>No posts found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <BlogFilters
        posts={initialPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        selectedDifficulties={selectedDifficulties}
        setSelectedDifficulties={setSelectedDifficulties}
      />
      <ViewTransition>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </ViewTransition>
    </div>
  )
}
