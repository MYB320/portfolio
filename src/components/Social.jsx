/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function Social() {
  return (
    <ul className='text-2xl text-slate-300 list-none pl-0 py-8'>
      <li className='mx-2 inline-block transition-all transform hover:text-white hover:scale-150'>
        <a href='#'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li className='mx-2 inline-block transition-all transform hover:text-white hover:scale-150'>
        <a href='#'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li className='mx-2 inline-block transition-all transform hover:text-white hover:scale-150'>
        <a href='#'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  )
}

export default Social
