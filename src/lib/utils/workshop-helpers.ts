export const getBorderColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'border-emerald-500/80 hover:border-emerald-400'
    case 'intermediate':
      return 'border-blue-500/80 hover:border-blue-400'
    case 'advanced':
      return 'border-purple-500/80 hover:border-purple-400'
    default:
      return 'border-border hover:border-primary'
  }
}

export const getGlowColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return '[--glow-color:rgb(16,185,129)]'
    case 'intermediate':
      return '[--glow-color:rgb(59,130,246)]'
    case 'advanced':
      return '[--glow-color:rgb(168,85,247)]'
    default:
      return '[--glow-color:rgb(var(--primary))]'
  }
}

export const getBadgeColor = (level: string) => {
  const baseColors = {
    beginner: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-500',
      hover: 'group-hover:bg-emerald-500',
    },
    intermediate: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-500',
      hover: 'group-hover:bg-blue-500',
    },
    advanced: {
      bg: 'bg-purple-500/10',
      text: 'text-purple-500',
      hover: 'group-hover:bg-purple-500',
    },
  } as const

  const defaultColors = {
    bg: 'bg-primary/10',
    text: 'text-primary',
    hover: 'group-hover:bg-primary',
  }

  const colors = baseColors[level.toLowerCase() as keyof typeof baseColors] || defaultColors

  return `${colors.bg} ${colors.text} ${colors.hover} group-hover:text-white`
}

export const getFallbackImage = (index: number) => {
  return index % 2 === 0 ? '/images/mac-test.png' : '/images/workshop.png'
}

export const getBackgroundColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'bg-emerald-500/5 dark:bg-emerald-500/10'
    case 'intermediate':
      return 'bg-blue-500/5 dark:bg-blue-500/10'
    case 'advanced':
      return 'bg-purple-500/5 dark:bg-purple-500/10'
    default:
      return 'bg-primary/5 dark:bg-primary/10'
  }
}

export const getTextColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'group-hover:text-emerald-400'
    case 'intermediate':
      return 'group-hover:text-blue-400'
    case 'advanced':
      return 'group-hover:text-purple-400'
    default:
      return 'group-hover:text-primary'
  }
}

export const getDotColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'bg-emerald-500'
    case 'intermediate':
      return 'bg-blue-500'
    case 'advanced':
      return 'bg-purple-500'
    default:
      return 'bg-primary'
  }
}
