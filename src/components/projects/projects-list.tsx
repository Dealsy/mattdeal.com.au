import { ProjectCard } from './projects-card'
import { Project } from '@/types/types'

interface ProjectsListProps {
  projects?: Project[]
  view: 'grid' | 'list'
}

export function ProjectsList({ projects, view }: ProjectsListProps) {
  if (!projects?.length) return null

  return (
    <div
      className={`grid gap-6 ${
        view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
      }`}
    >
      {projects.map(project => (
        <ProjectCard key={project._id} project={project} view={view} />
      ))}
    </div>
  )
}
