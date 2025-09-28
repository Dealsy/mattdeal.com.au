'use client'

import { useTheme } from 'next-themes'
import Giscus from '@giscus/react'

type CommentsProps = {
  slug: string
}

export default function Comments({ slug }: CommentsProps) {
  const { theme } = useTheme()

  return (
    <div className="mt-16 border-t pt-8">
      <Giscus
        id="comments"
        repo="dealsy/mattdeal.com.au"
        repoId={process.env.NEXT_PUBLIC_GITHUB_REPO_ID || ''} // You'll need to replace this with your actual repo ID
        category="General"
        categoryId={process.env.NEXT_PUBLIC_GITHUB_CATEGORY_ID || ''} // You'll need to replace this with your actual category ID
        mapping="specific"
        term={slug}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
