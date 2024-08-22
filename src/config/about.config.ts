import AboutBuilder from '@/classes/about.classes'
import resource from '@/resources/About.resource.json'

const builder = new AboutBuilder()

builder
  .addSubtitle('Who I am')
  .addField(resource.introduction)
  .addField(resource.education)
  .addField(resource.experience)
  .addField(resource.skills)
  .addSubtitle('My most recent project')
  .addField(resource.ryggar)
  .addLink('Check out my game!', 'https://olivergg1.github.io/Ryggar/')
  .addSubtitle('How was this portfolio built?')
  .addField(resource.portfolio)

export const AboutComponent = builder.build()
