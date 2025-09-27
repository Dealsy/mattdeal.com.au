import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { playgroundItems } from '@/contasnts'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { ArrowRightIcon, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function PlaygroundCard() {
  return (
    <>
      {playgroundItems.map((item, index) => (
        <Link href={item.href} key={item.href} className="group block">
          <ViewTransition name={`playground-${item.href}`}>
            <Card
              className={cn(
                'relative overflow-hidden transition-all duration-300 ease-out',
                'bg-card border border-border',
                'hover:border-primary/50 hover:shadow-lg',
                'hover:-translate-y-1'
              )}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    <Play className="mr-1 h-3 w-3" />
                    Interactive
                  </Badge>
                  <div className="text-xs text-muted-foreground font-mono">#{index + 1}</div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>

                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-32 object-cover rounded-md transition-all duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Ready to explore</span>
                  </div>
                  <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors duration-300">
                    <span className="mr-2">Try it</span>
                    <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </CardFooter>
            </Card>
          </ViewTransition>
        </Link>
      ))}
    </>
  )
}
