'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Github, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Workshop } from '@/types/types'
import { unstable_ViewTransition as ViewTransition } from 'react'

interface WorkshopCardProps {
  workshop: Workshop
  view?: 'grid' | 'list'
}

export function WorkshopCard({ workshop, view }: WorkshopCardProps) {
  const imageWrapperClass =
    view === 'list'
      ? 'relative w-full md:w-80 aspect-[16/9] flex-none'
      : 'relative w-full aspect-[16/9]'

  return (
    <Link href={workshop.github} target="_blank" rel="noopener noreferrer">
      <div className="group">
        <Card className="overflow-hidden transition-colors border inset-shadow-sm dark:bg-background-elevated bg-background inset-shadow-black/40 dark:inset-shadow-black/60 border-background-border dark:border-background-border hover:border-primary">
          <div className={`${view === 'list' ? 'flex gap-6' : 'flex flex-col'}`}>
            <div className={imageWrapperClass}>
              <Image
                src={workshop.image}
                alt={workshop.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <ViewTransition name={`workshop-content-${workshop._id}`}>
              <div className={`p-6 ${view === 'list' ? 'flex-1' : ''}`}>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{workshop.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {workshop.duration}
                      </div>
                    </div>
                    <Badge variant={workshop.level === 'Beginner' ? 'default' : 'secondary'}>
                      {workshop.level}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground">{workshop.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Topics Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map(topic => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="inset-shadow-sm inset-shadow-black/40 dark:inset-shadow-black/60"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Resources</h4>
                    <p className="text-sm text-muted-foreground">
                      {workshop.resources.length} resources available
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex gap-4">
                      <span className="text-sm text-primary hover:underline inline-flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        View Workshop
                      </span>
                      {workshop.recordingLink && (
                        <a
                          href={workshop.recordingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="text-sm text-primary hover:underline inline-flex items-center gap-2"
                        >
                          <Play className="w-4 h-4" />
                          Watch Recording
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ViewTransition>
          </div>
        </Card>
      </div>
    </Link>
  )
}
