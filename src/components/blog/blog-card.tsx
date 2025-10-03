import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'
import type { BlogMetadata } from '@/types/blog'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, Clock, ArrowRightIcon, BookOpen } from 'lucide-react'
import { difficultyColors, type Difficulty } from '@/contasnts'
import { parsePublishedDate } from '@/lib/utils/formatters'
import { cn } from '@/lib/utils'

const EXCERPT_MAX_LENGTH = 100

function truncateExcerpt(text: string): string {
  if (text.length <= EXCERPT_MAX_LENGTH) return text
  return text.slice(0, EXCERPT_MAX_LENGTH).trim() + '...'
}

type BlogCardProps = Omit<BlogMetadata & { slug: string }, 'image'>

export default function BlogCardNoImage({
  slug,
  title,
  excerpt,
  publishedAt,
  readTime,
  difficulty,
}: BlogCardProps) {
  if (!publishedAt) return null

  const difficultyKey = difficulty.toLowerCase() as Difficulty
  const publishedDate = parsePublishedDate(publishedAt)
  const isPublished = publishedDate < new Date()

  const accentColorClass =
    {
      easy: 'border-l-emerald-500 hover:border-l-emerald-400',
      intermediate: 'border-l-blue-500 hover:border-l-blue-400',
      advanced: 'border-l-purple-500 hover:border-l-purple-400',
    }[difficultyKey as keyof typeof difficultyColors] || 'border-l-primary hover:border-l-primary'

  return (
    <>
      {isPublished ? (
        <Link
          href={`/blog/${slug}`}
          prefetch={true}
          className="group block w-full perspective-[1500px]"
        >
          <ViewTransition name={`blog-${slug}`}>
            <Card
              className={cn(
                'overflow-hidden flex flex-col h-[350px]',
                'border-2 border-l-4 border-border',
                accentColorClass,
                'hover:border-t-primary/50 hover:border-r-primary/50 hover:border-b-primary/50',
                'hover:border-l-8 hover:transition-all hover:duration-300',
                'shadow-sm hover:shadow-xl bg-card',
                'transition-all duration-500 ease-out',
                'group-hover:-translate-y-1',
                'group-hover:rotate-1',
                'group-hover:translate-x-1',
                'group-hover:skew-x-1',
                'group-hover:[transform-style:preserve-3d]',
                'group-hover:[backface-visibility:visible]',
                'relative',
                'after:absolute after:inset-0 after:bg-gradient-to-br after:from-primary/0 after:via-primary/5 after:to-primary/10 after:opacity-0 after:transition-opacity after:duration-500',
                'group-hover:after:opacity-100',
                'before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 before:shadow-[0_0_50px_rgba(var(--primary-rgb),0.15)]',
                'group-hover:before:opacity-100'
              )}
            >
              <CardHeader className="flex-none pt-6 pb-2 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Badge
                    variant="secondary"
                    className={cn(
                      'text-xs font-medium transition-all duration-500',
                      difficultyColors[difficultyKey],
                      'group-hover:translate-x-2 group-hover:-rotate-2 group-hover:scale-110'
                    )}
                  >
                    {difficulty}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground transition-transform duration-500 group-hover:translate-x-1">
                    <Clock className="mr-1 h-3 w-3 transition-transform duration-500 group-hover:scale-110" />
                    <span>{readTime} min read</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2 text-2xl font-bold font-cinzel transition-all duration-500 group-hover:text-primary group-hover:translate-x-1">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 py-4 relative z-10 overflow-hidden">
                <div className="flex h-full">
                  <div className="mr-4 hidden sm:block text-base/5">
                    <div
                      className={cn(
                        'p-2 rounded-full',
                        'border border-border',
                        'text-muted-foreground group-hover:text-primary group-hover:border-primary',
                        'transition-all duration-700',
                        'group-hover:rotate-[360deg] group-hover:scale-110',
                        'group-hover:shadow-md'
                      )}
                    >
                      <BookOpen className="h-[1lh] w-5" />
                    </div>
                  </div>
                  <p className="text-muted-foreground line-clamp-3 transition-all duration-500 group-hover:translate-x-1">
                    {truncateExcerpt(excerpt)}
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between items-center flex-none py-5 border-t relative z-10">
                <div className="flex items-center text-xs text-muted-foreground transition-transform duration-500 group-hover:-translate-x-1">
                  <CalendarIcon className="mr-2 h-3 w-3 transition-transform duration-500 group-hover:scale-110" />
                  <time dateTime={publishedAt}>
                    {publishedDate.toLocaleDateString('en-AU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="text-primary text-sm font-medium flex items-center opacity-70 group-hover:opacity-100 transition-all duration-500">
                  Read article{' '}
                  <ArrowRightIcon className="ml-1 h-4 w-4 transform transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110" />
                </div>
              </CardFooter>
            </Card>
          </ViewTransition>
        </Link>
      ) : null}
    </>
  )
}
