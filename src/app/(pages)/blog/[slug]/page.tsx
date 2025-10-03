import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, ClockIcon } from 'lucide-react'
import { difficultyColors, Difficulty } from '@/contasnts'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import BlogContent from '@/components/blog/blog-content'
import BackButton from '@/components/blog/back-button'
import { parsePublishedDate } from '@/lib/utils/formatters'
import Script from 'next/script'
import { BlogMetadata } from '@/types/blog'
import Comments from '@/components/blog/comments'

interface Props {
  params: Promise<{ slug: string }>
}

type BlogPost = {
  metadata: BlogMetadata
  slug: string
}

function BlogPostSchema({ post, canonicalUrl }: { post: BlogPost; canonicalUrl: string }) {
  const publishedDate = parsePublishedDate(post.metadata.publishedAt)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    description: post.metadata.excerpt,
    datePublished: publishedDate.toISOString(),
    dateModified: publishedDate.toISOString(),
    author: {
      '@type': 'Person',
      name: 'Matt Deal',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Matt Deal',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mattdeal.com.au/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    keywords: [post.metadata.type, post.metadata.difficulty],
  }

  return (
    <Script
      id="blog-post-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) return { title: 'Post Not Found' }

  const publishedDate = parsePublishedDate(post.metadata.publishedAt)
  const canonicalUrl = `https://mattdeal.com.au/blog/${slug}`

  return {
    title: `${post.metadata.title} | Matt Deal`,
    description: post.metadata.excerpt,
    metadataBase: new URL('https://mattdeal.com.au'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      type: 'article',
      publishedTime: publishedDate.toISOString(),
      authors: ['Matt Deal'],
      siteName: 'Matt Deal',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary',
      title: post.metadata.title,
      description: post.metadata.excerpt,
      creator: '@mattdeal',
    },
    other: {
      'article:published_time': publishedDate.toISOString(),
      'article:author': 'Matt Deal',
      'article:section': post.metadata.type,
      'article:tag': [post.metadata.type, post.metadata.difficulty],
    },
  }
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  const difficulty = post.metadata.difficulty.toLowerCase() as Difficulty
  const canonicalUrl = `https://mattdeal.com.au/blog/${params.slug}`

  return (
    <ViewTransition name={`blog-${params.slug}`}>
      <BlogPostSchema post={post} canonicalUrl={canonicalUrl} />
      <div className="w-full min-h-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[70%]">
          <article className="space-y-6 sm:space-y-8">
            <header>
              <BackButton />
              <ViewTransition name={`blog-title-${params.slug}`}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-tight font-bold font-cinzel">
                  {post.metadata.title}
                </h1>
              </ViewTransition>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 text-gray-400">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center min-w-[140px]">
                    <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" />
                    <time className="text-sm sm:text-base">
                      {parsePublishedDate(post.metadata.publishedAt).toLocaleDateString('en-AU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" />
                    <span className="text-sm sm:text-base">{post.metadata.readTime} min read</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className={`${difficultyColors[difficulty]} text-sm`}>
                    {post.metadata.difficulty}
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    {post.metadata.type}
                  </Badge>
                </div>
              </div>
            </header>
            <BlogContent slug={params.slug} />
            <Comments slug={params.slug} />
          </article>
        </div>
      </div>
    </ViewTransition>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}
