import { readdirSync } from 'fs'
import path, { join } from 'path'

const POSTS_PATH = path.join(process.cwd(), 'src/posts')

export async function getAllPosts() {
  const categories = readdirSync(POSTS_PATH, { withFileTypes: true }).filter(
    dir => dir.isDirectory() && !dir.name.startsWith('.')
  )

  const posts = []

  for (const category of categories) {
    const categoryPath = join(POSTS_PATH, category.name)
    const files = readdirSync(categoryPath).filter(file => file.endsWith('.mdx'))

    for (const file of files) {
      const post = await import(`@/posts/${category.name}/${file}`)
      const slug = file.replace(/\.mdx$/, '')

      posts.push({
        ...post.metadata,
        slug,
        category: category.name,
      })
    }
  }

  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getPostBySlug(slug: string) {
  const categories = readdirSync(POSTS_PATH, { withFileTypes: true }).filter(
    dir => dir.isDirectory() && !dir.name.startsWith('.')
  )

  for (const category of categories) {
    try {
      const post = await import(`@/posts/${category.name}/${slug}.mdx`)
      return {
        ...post,
        category: category.name,
      }
    } catch (error) {
      console.log(error)
      // Post not found in this category, continue searching

      continue
    }
  }

  return null
}
