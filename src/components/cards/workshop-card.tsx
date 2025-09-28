'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Workshop } from '@/lib/data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRef } from 'react'
import {
  getBackgroundColor,
  getBadgeColor,
  getBorderColor,
  getDotColor,
  getFallbackImage,
  getGlowColor,
  getTextColor,
} from '@/lib/utils/workshop-helpers'

type WorkshopCardProps = {
  workshop: Workshop
  imagePosition?: 'left' | 'right'
  primaryImage: string
}

export default function WorkshopCard({
  workshop,
  imagePosition = 'right',
  primaryImage,
}: WorkshopCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const cardRef = useRef<HTMLDivElement>(null)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  if (!workshop.github) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
      ref={cardRef}
      onMouseMove={onMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      <motion.div
        className={cn(
          'absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100',
          'transition-opacity duration-500',
          getGlowColor(workshop.level)
        )}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              var(--glow-color) 0%,
              transparent 60%
            )
          `,
        }}
      />
      <Link
        href={workshop.github}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'block transition-all duration-500 border-2 rounded-xl relative overflow-hidden',
          getBorderColor(workshop.level),
          'hover:shadow-2xl'
        )}
      >
        <div
          className={cn(
            'flex flex-col-reverse bg-card rounded-xl overflow-hidden shadow-lg',
            'md:grid md:grid-cols-2',
            imagePosition === 'left' && 'md:[grid-template-areas:_"image_content"]',
            imagePosition === 'right' && 'md:[grid-template-areas:_"content_image"]'
          )}
        >
          {/* Content Section */}
          <motion.div
            className="p-10 flex flex-col justify-center relative overflow-hidden md:[grid-area:content]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] opacity-0 group-hover:opacity-20"
              transition={{ duration: 0.5 }}
            />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Badge
                    variant="secondary"
                    className={cn(
                      'rounded-full text-xs font-semibold px-3 py-1 transition-all duration-300',
                      getBadgeColor(workshop.level)
                    )}
                  >
                    {workshop.level}
                  </Badge>
                </motion.div>
                <motion.div
                  className="flex items-center text-muted-foreground text-sm group-hover:text-primary"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <Clock
                      className={cn(
                        'w-4 h-4 mr-1 text-muted-foreground group-hover:animate-spin',
                        getTextColor(workshop.level)
                      )}
                    />
                  </motion.div>
                  <span className={cn('text-muted-foreground', getTextColor(workshop.level))}>
                    {workshop.duration}
                  </span>
                </motion.div>
              </div>

              <motion.h4
                className={cn(
                  'text-2xl font-bold mb-3 text-foreground',
                  getTextColor(workshop.level)
                )}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                {workshop.title}
              </motion.h4>
              <motion.p
                className="text-muted-foreground mb-6 group-hover:text-muted-foreground/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {workshop.description}
              </motion.p>

              <div className="space-y-4">
                <motion.h5
                  className={cn(
                    'font-semibold text-lg text-foreground',
                    getTextColor(workshop.level)
                  )}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Workshop Content:
                </motion.h5>
                <div className="grid grid-cols-2 gap-3">
                  {workshop.topics?.map((topic, index) => (
                    <motion.div
                      key={topic}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * (index + 5) }}
                      whileHover={{ x: 10, scale: 1.05 }}
                    >
                      <motion.div
                        className={cn('w-1.5 h-1.5 rounded-full', getDotColor(workshop.level))}
                        whileHover={{ scale: 2, rotate: 360 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                      />
                      <span className="text-muted-foreground group-hover:text-muted-foreground/80">
                        {topic}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className={cn(
              'relative md:[grid-area:image] h-[300px] md:h-full p-8',
              getBackgroundColor(workshop.level)
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={primaryImage || workshop.image || getFallbackImage(0)}
              alt={workshop.title}
              fill
              className={cn(
                'object-contain transition-all duration-700 group-hover:scale-125',
                imagePosition === 'right' ? 'group-hover:-rotate-2' : 'group-hover:rotate-2'
              )}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-100"
          initial={{ x: 20 }}
          whileHover={{
            x: [-5, 5, -5],
            transition: {
              repeat: Infinity,
              duration: 1,
            },
          }}
        >
          <ArrowRight className="w-6 h-6 text-primary" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
