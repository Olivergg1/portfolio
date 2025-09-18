import View from '../../components/View/View'
import { ProjectsList } from '@/config/projects.config'

interface ProjectsViewProps {}

export default function ProjectsView({}: ProjectsViewProps) {
  return (
    <View>
      {ProjectsList.map(Project => (
        <Project />
      ))}
    </View>
  )
}
