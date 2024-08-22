import AboutBuilder from '@/classes/about.classes'
import resource from '@/resources/About.resource.json'

export const AboutComponent = new AboutBuilder()
  .addField(resource.introduction)
  //.addField(resource.education)
  //.addField(resource.experience)
  .addField(resource.skills)
  .addExec('How I built my portfolio', 'about -page portfolio')
  .addExec('My most recent project', 'about -page recent')
  .build()

export const AboutProject = new AboutBuilder()
  .addSubtitle('How I built my portfolio')
  .addField(resource.portfolio)
  .build()

export const AboutRecent = new AboutBuilder()
  .addSubtitle('My most recent project')
  .addField(resource.ryggar)
  .addLink('Check out my game!', 'https://olivergg1.github.io/Ryggar/')
  .build()
