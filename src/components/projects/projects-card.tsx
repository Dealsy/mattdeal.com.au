'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
  view?: 'grid' | 'list'
}

export function ProjectCard({ project, view }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group">
      <Card className="overflow-hidden border-2 border-transparent hover:border-primary transition-colors">
        <div className={`${view === 'list' ? 'flex gap-6' : 'flex flex-col'}`}>
          {/* Image */}
          <div className={`relative aspect-video ${view === 'list' ? 'w-1/3' : 'w-full'}`}>
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View site
                </a>
              </Button>
              <Button variant="secondary" asChild>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                )}
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className={`p-6 ${view === 'list' ? 'flex-1' : ''}`}>
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
