import { FaGithubSquare, FaJsSquare, FaReact } from 'react-icons/fa'
import View from '../../components/View/View'
import { BsTsunami } from 'react-icons/bs'

export default function AboutView() {
  return (
    <View>
      {/* <section>
        <h3>Links</h3>
        <ul>
          <a
            href='https://www.linkedin.com/in/oliver-gustafsson-708401202/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaLinkedin className='icon' />
          </a>
          <a
            href='https://github.com/Olivergg1'
            target='_blank'
            rel='noopener noreferrer'>
            <FaGithubSquare className='icon' />
          </a>
        </ul>
      </section> */}
      <section>
        <ul>
          <p>
            This portfolio was built using React <FaReact /> and TypeScript{' '}
            <FaJsSquare />.
          </p>
          <p>
            The CLI uses ReGex and custom hooks to break down and interpret a
            command <BsTsunami />.
          </p>
          <p>A command finds and executes an executable</p>
          <p>
            The source code for the portfolio can be seen on{' '}
            <a
              href='https://github.com/Olivergg1/portfolio'
              target='_blank'
              rel='noopener noreferrer'>
              my public repository on Github{' '}
              <FaGithubSquare className='icon' scale={3} />
            </a>
          </p>
        </ul>
      </section>
    </View>
  )
}
