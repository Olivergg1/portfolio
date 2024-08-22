import AboutBuilder from '@/classes/about.classes'
import resource from '@/resources/About.resource.json'

const builder = new AboutBuilder()

builder
  .addSubtitle('Who I am')
  .addField(resource.introduction)
  .addField(resource.education)
  .addField(resource.experience)
  .addField(resource.skills)
  .addSubtitle('How was this portfolio built?')
  .addField(resource.portfolio)
  .addSubtitle('My most recent project')
  .addField(resource.ryggar)
  .addLink('Check out my game!', 'https://olivergg1.github.io/Ryggar/')

export const AboutComponent = builder.build()
