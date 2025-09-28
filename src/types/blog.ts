import { Difficulty } from '@/contasnts'

export type BlogDifficulty = 'easy' | 'intermediate' | 'advanced'

export type BlogMetadata = {
  title: string
  excerpt: string
  publishedAt: string
  readTime: number
  type: string
  difficulty: Difficulty
}
