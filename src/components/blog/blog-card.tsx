import Link from 'next/link'
import { BlogMetadata } from '@/types/blog'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, Clock } from 'lucide-react'
import { difficultyColors } from '@/contasnts'

type BlogCardProps = BlogMetadata & { slug: string }

export default function BlogCard({
  slug,
  title,
  excerpt,
  publishedAt,
  readTime,
  type,
  difficulty,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      prefetch={true}
      className="text-primary hover:scale-105 hover:border-blue-500 hover:border-2 rounded-lg transition duration-300"
    >
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="line-clamp-2">{title}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <time dateTime={publishedAt}>
                {new Date(publishedAt).toLocaleDateString('en-AU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <Badge variant="secondary" className={difficultyColors[difficulty]}>
              {difficulty}
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
