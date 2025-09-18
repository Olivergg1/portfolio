import { LinkButton } from '@/components/Button/Button'
import { BsGithub } from 'react-icons/bs'

type Link = `https://${string}`

type RepopsitoryType = 'git' | 'unknown'
type Repository = { type: RepopsitoryType; link: string }

// TODO: Add support for thumbnail + fullscreen view for images

class ProjectBuilder {
  private title: string = 'No project title'

  private thumbnail?: string
  private description?: string
  private link?: Link
  private repository?: Repository

  public setTitle(title: string) {
    this.title = title

    return this
  }

  public setDescription(text: string) {
    this.description = text

    return this
  }

  public setThumbnail(text: string) {
    this.thumbnail = process.env.PUBLIC_URL + '/thumbnails/' + text

    return this
  }

  public setRepository(repository: Repository) {
    this.repository = repository

    return this
  }

  public setLink(to: Link) {
    this.link = to

    return this
  }

  public build() {
    return () => {
      return (
        <section className="project">
          <article className="project-meta">
            {this.title && <h3>{this.title}</h3>}
            {this.description && <p>{this.description}</p>}
            {this.link && (
              <LinkButton className="link" to={this.link}>
                Go to project
              </LinkButton>
            )}
            {this.repository && (
              <LinkButton to={this.repository.link}>
                {this.repository.type == 'git' && <BsGithub />}
                Visit repository
              </LinkButton>
            )}
          </article>
          <article className="thumbnail-container">
            {this.thumbnail && (
              <img className="thumbnail" src={this.thumbnail} />
            )}
          </article>
        </section>
      )
    }
  }
}

export default ProjectBuilder
