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
  return (
    <Link href={workshop.github} target="_blank" rel="noopener noreferrer">
      <div className="group">
        <Card className="overflow-hidden border-2 border-transparent hover:border-primary transition-colors">
          <div className={`${view === 'list' ? 'flex gap-6' : 'flex flex-col'}`}>
            {/* Image */}
            <ViewTransition name={`workshop-image-${workshop._id}`}>
              <div className={`relative ${view === 'list' ? 'w-1/3' : 'w-full h-96'} `}>
                <Image src={workshop.image} alt={workshop.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </ViewTransition>

            {/* Content */}
            <ViewTransition name={`workshop-content-${workshop._id}`}>
              <div className={`p-6 ${view === 'list' ? 'flex-1' : ''}`}>
                <div className="flex justify-between items-start mb-4">
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

                <p className="text-muted-foreground mb-6">{workshop.description}</p>

                <div className="space-y-4">
                  {/* Topics */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Topics Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map(topic => (
                        <Badge key={topic} variant="outline">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Resources Count */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Resources</h4>
                    <p className="text-sm text-muted-foreground">
                      {workshop.resources.length} resources available
                    </p>
                  </div>

                  {/* Links */}
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
