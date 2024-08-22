import View from '../../components/View/View'
import {
  AboutComponent,
  AboutProject,
  AboutRecent,
} from '@/config/about.config'

interface AboutViewProps {
  page?: string
}

export default function AboutView({ page }: AboutViewProps) {
  const isAboutPortfolio = page === 'portfolio'
  const isAboutRecent = page === 'recent'
  const isAboutMe = !isAboutPortfolio && !isAboutRecent

  return (
    <View>
      {isAboutMe && <AboutComponent />}
      {isAboutPortfolio && <AboutProject />}
      {isAboutRecent && <AboutRecent />}
    </View>
  )
}
