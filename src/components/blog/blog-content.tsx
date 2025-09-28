import path from 'path'
import fs from 'fs/promises'
import MaskedContent from './masked-content'

export default async function BlogContent({ slug }: { slug: string }) {
  // Get all folders in the posts directory
  const postsDir = path.join(process.cwd(), 'src/posts')

  let categories
  try {
    categories = await fs.readdir(postsDir)
  } catch (error) {
    // Only log error if it's not a "directory not found" error
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      console.error('Error reading posts directory:', error)
    }
    return null
  }

  // Find the post in any category
  for (const category of categories) {
    const mdxPath = path.join(postsDir, category, `${slug}.mdx`)

    try {
      await fs.access(mdxPath)
      const Content = (await import(`@/posts/${category}/${slug}.mdx`)).default

      return (
        <MaskedContent>
          <Content />
        </MaskedContent>
      )
    } catch {
      continue
    }
  }

  return null
}
