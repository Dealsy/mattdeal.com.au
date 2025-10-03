'use client'

import { Project } from '@/types/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'

interface ProjectCardProps {
  project: Project
  view?: 'grid' | 'list'
}

export function ProjectCard({ project, view }: ProjectCardProps) {
  return (
    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="overflow-hidden border hover:border-primary/50 dark:hover:border-primary/70 transition-all duration-300 h-full hover:shadow-lg dark:hover:shadow-primary/20">
        <div className={`${view === 'list' ? 'flex gap-6' : 'flex flex-col'}`}>
          {/* Image */}
          <div
            className={`relative aspect-video ${view === 'list' ? 'w-1/3' : 'w-full'} overflow-hidden group-hover:opacity-90 transition-opacity duration-300`}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={500}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
              <Button asChild>
                <span>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View site
                </span>
              </Button>
              {project.github && (
                <Button
                  variant="secondary"
                  onClick={e => {
                    e.preventDefault()
                    window.open(project.github, '_blank')
                  }}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Button>
              )}
            </div>
          </div>
          <ViewTransition name={`project-${project._id}`}>
            {/* Content */}
            <div className={`p-6 ${view === 'list' ? 'flex-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-primary/90 transition-colors">
                {project.name}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-primary/90">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/5 hover:bg-primary/10 text-primary/90 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary/90">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      {project.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                          <Check className="w-4 h-4 text-primary/70" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </ViewTransition>
        </div>
      </Card>
    </Link>
  )
}
