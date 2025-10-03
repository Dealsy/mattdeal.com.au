export type Project = {
  name: string
  description: string
  tech: string[]
  link: string
  github: string
  image: string
}

export type Package = {
  _id: string
  name: string
  description: string
  downloads: number
  version: string
  npmLink: string
  githubLink: string
  documentation: string
  tags: string[]
  image: string
}

export type Workshop = {
  _id: string
  title: string
  description: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  topics: string[]
  upcoming?: {
    date: string
    location: string
    registrationLink: string
  }
  recordingLink?: string
  resources: string[]
  github?: string
  image?: string
}
