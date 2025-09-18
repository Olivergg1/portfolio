import ProjectBuilder from '@/classes/project.classes'

const RyggarProject = new ProjectBuilder()
  .setTitle('Ryggar')
  .setDescription('Drinking game with multiple gamemodes and languages')
  .setLink('https://ryggar.olivergg.xyz')
  // .setThumbnail('ryggar.png')
  .setRepository({ type: 'git', link: 'https://github.com/Olivergg1/Ryggar' })
  .build()

export const ProjectsList = [RyggarProject]
