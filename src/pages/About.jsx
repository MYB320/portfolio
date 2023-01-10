import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faMessage } from '@fortawesome/free-solid-svg-icons'
import resume from '../assets/profile.jpg'
import ContactMe from '../components/ContactMe'

function About() {
  let [isOpen, setIsOpen] = useState(false)
  const contactMe = () => setIsOpen(!isOpen)

  return (
    <div>
      <ContactMe isOpen={isOpen} onClose={contactMe} />
      <h1 className='about text-8xl font-bold	text-slate-800 dark:text-white'>
        Mohamed Yasser{' '}
        <span className='text-indigo-500 transition-all hover:underline'>
          Boureghida
        </span>
      </h1>
      <div className='about mb-5 text-xl font-medium uppercase text-slate-500 dark:text-slate-300'>
        <>Collo · Skikda, Algeria · +213 (0) 667 56 90 32 · </>
        <a
          className='text-indigo-500 transition-all hover:text-indigo-600 hover:underline'
          href='mybdev20@gmail.com'
        >
          mybdev20@gmail.com
        </a>
      </div>
      <p className='my-5 text-slate-500 dark:text-slate-300 w-[64rem]'>
        A forward-thinking Software Engineer with background working
        productively in dynamic environments. Experience in leveraging agile
        frameworks to provide a robust synopsis for high level overviews.
      </p>
      <div className='flex w-96 about mt-12'>
        <a href={resume} download>
          <button className='text-2xl uppercase text-slate-600 dark:text-slate-300 transition-all hover:text-indigo-600 hover:underline mr-6'>
            <FontAwesomeIcon className='mr-2' icon={faDownload} />
            Download Resume
          </button>
        </a>
        <button
          className='text-2xl uppercase text-slate-600 dark:text-slate-300 transition-all hover:text-indigo-600 hover:underline ml-6'
          onClick={contactMe}
        >
          <FontAwesomeIcon className='mr-2' icon={faMessage} />
          Contact me
        </button>
      </div>
    </div>
  )
}

export default About
