import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Works from './Works'
import Intersts from './Intersts'

const pages = [
  {
    id: 0,
    name: 'About',
    component: <About />,
    navColor: 'bg-indigo-600',
    bgColor: 'bg-svg-blob-white-indigo-600 dark:bg-svg-blob-dark-indigo-600',
  },
  {
    id: 1,
    name: 'Experience',
    component: <Experience />,
    navColor: 'bg-violet-600',
    bgColor: 'bg-svg-blob-white-violet-600 dark:bg-svg-blob-dark-violet-600',
  },
  {
    id: 2,
    name: 'Education',
    component: <Education />,
    navColor: 'bg-indigo-600',
    bgColor: 'bg-svg-blob-white-indigo-600 dark:bg-svg-blob-dark-indigo-600',
  },
  {
    id: 3,
    name: 'Skills',
    component: <Skills />,
    navColor: 'bg-violet-600',
    bgColor: 'bg-svg-blob-white-violet-600 dark:bg-svg-blob-dark-violet-600',
  },
  {
    id: 4,
    name: 'Works',
    component: <Works />,
    navColor: 'bg-indigo-600',
    bgColor: 'bg-svg-blob-white-indigo-600 dark:bg-svg-blob-dark-indigo-600',
  },
  {
    id: 5,
    name: 'Intersts',
    component: <Intersts />,
    navColor: 'bg-violet-600',
    bgColor: 'bg-svg-blob-white-violet-600 dark:bg-svg-blob-dark-violet-600',
  },
]

export default pages
