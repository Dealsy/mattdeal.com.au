import type { MDXComponents } from 'mdx/types'
import CodeBlock from '@/components/CodeBlock'
import ArticleImage from '@/components/ArticleImage'
import Alert from '@/components/alert'
import AlertMobile from '@/components/alertMobile'
import LiveCode from '@/components/LiveCode'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    ArticleImage,
    Alert,
    AlertMobile,
    LiveCode,
    ...components,
  }
}
