export const Links = {
  Workshops: '/workshops',
  Projects: '/projects',
  Packages: '/packages',
  Blog: '/blog',
  Playground: '/playground',
} as const

export const NavLinks = [
  { href: Links.Blog, label: 'Blog' },
  { href: Links.Workshops, label: 'Workshops' },
  { href: Links.Projects, label: 'Projects' },
  { href: Links.Packages, label: 'Packages' },
  { href: Links.Playground, label: 'Playground' },
] as const

export const playgroundItems = [
  {
    title: 'Animations with Motion',
    description: 'Learn and experiment with animations using Motion',
    image: '/images/playground/css-animations.png',
    href: '/playground/montion-animations',
  },
  {
    title: 'Advanced Tailwind',
    description: 'Explore advanced Tailwind CSS techniques',
    image: '/images/playground/tailwind.png',
    href: '/playground/tailwind',
  },
  {
    title: 'Convex Database',
    description: 'Learn about Convex real-time database',
    image: '/images/playground/convex.png',
    href: '/playground/convex',
  },
] as const

export const difficultyColors = {
  easy: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
  intermediate: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
  advanced: 'bg-red-500/10 text-red-500 hover:bg-red-500/20',
} as const

export const difficultyFilterColors = {
  easy: {
    default: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
    selected: 'bg-green-500/30 text-green-500 hover:bg-green-500/40',
  },
  intermediate: {
    default: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
    selected: 'bg-yellow-500/30 text-yellow-500 hover:bg-yellow-500/40',
  },
  advanced: {
    default: 'bg-red-500/10 text-red-500 hover:bg-red-500/20',
    selected: 'bg-red-500/30 text-red-500 hover:bg-red-500/40',
  },
} as const

export type Difficulty = keyof typeof difficultyColors
