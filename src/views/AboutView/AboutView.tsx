import { FaGithubSquare, FaReact } from 'react-icons/fa'
import View from '../../components/View/View'
import { AboutComponent } from '@/config/about.config'

export default function AboutView() {
  return (
    <View>
      <AboutComponent />
      {/* <section>
        <ul>
          <p>
            This portfolio was built using React <FaReact /> and TypeScript
          </p>
          <p>
            The CLI uses ReGex and custom hooks to break down and interpret a
            command.
          </p>
          <p>A command finds and executes an executable</p>
          <p>
            The source code for the portfolio can be seen on{' '}
            <a
              href="https://github.com/Olivergg1/portfolio"
              target="_blank"
              rel="noopener noreferrer">
              my public repository on Github{' '}
              <FaGithubSquare className="icon" scale={3} />
            </a>
          </p>
        </ul>
      </section> */}
    </View>
  )
}
