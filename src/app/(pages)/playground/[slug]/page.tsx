import { PlayGroundComponents } from '@/components/playground/playroundComponents/playGroundComponents'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { unstable_ViewTransition as ViewTransition } from 'react'

type PlaygroundSlug = keyof typeof PlayGroundComponents

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const content = PlayGroundComponents[slug as PlaygroundSlug]

  if (!content) {
    notFound()
  }

  const PlaygroundComponent = content.component

  return (
    <ViewTransition name={`playground-${slug}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{content.title}</h1>
          <p className="text-muted-foreground">{content.description}</p>
        </div>

        <PlaygroundComponent />
      </div>
    </ViewTransition>
  )
}
