import {
  DiHtml5,
  DiCss3,
  DiJava,
  DiRust,
  DiGo,
  DiPython,
  DiNodejs,
  DiReact,
  DiMongodb,
  DiMysql,
} from 'react-icons/di'
import {
  SiArduino,
  SiExpress,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiVisualstudiocode,
  SiLinux,
  SiRedhat,
  SiDocker,
  SiKubernetes,
  SiWindows,
  SiEclipseide,
  SiCheckmarx,
} from 'react-icons/si'

function Skills() {
  return (
    <div>
      <h1 className='pb-8 text-6xl uppercase font-bold text-slate-800 dark:text-white font-Saira'>
        Skills
      </h1>
      <div>
        <div>
          <h2 className='text-2xl uppercase font-semibold text-slate-800 dark:text-white font-Saira'>
            Programming languages
          </h2>
          <ul className='flex list-none my-6 text-6xl items-center'>
            <li>
              <DiHtml5 className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <DiCss3 className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiJavascript className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiC className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiCplusplus className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <DiJava className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <DiPython className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <DiGo className=' fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <DiRust className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl uppercase font-semibold text-slate-800 dark:text-white font-Saira'>
            Tools
          </h2>
          <ul className='flex list-none my-6 text-6xl items-center'>
            <li>
              <SiLinux className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiWindows className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiRedhat className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiDocker className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiKubernetes className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiVisualstudiocode className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiEclipseide className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiArduino className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <DiNodejs className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <DiReact className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <SiExpress className=' fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <DiMongodb className='fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
            <li>
              <DiMysql className='mr-2 fill-slate-800 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' />
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl uppercase font-semibold text-slate-800 dark:text-white font-Saira'>
            WorkFlow
          </h2>
          <ul className='list-none ml-4 flex justify-between w-[45rem]'>
            <div>
              <li className='my-5 text-lg text-slate-500 dark:text-slate-400 flex items-center'>
                <SiCheckmarx className='fill-slate-800 dark:fill-white mr-2' />
                <p>Agile Development & Scrum</p>
              </li>
              <li className='my-5 text-lg text-slate-500 dark:text-slate-400 flex items-center'>
                <SiCheckmarx className='fill-slate-800 dark:fill-white mr-2' />
                <p>robust Programming & data structuring</p>
              </li>
            </div>
            <div>
              <li className='my-5 text-lg text-slate-500 dark:text-slate-400 flex items-center'>
                <SiCheckmarx className='fill-slate-800 dark:fill-white mr-2' />
                <p>Cross platforms Testing & Debugging</p>
              </li>
              <li className='my-5 text-lg text-slate-500 dark:text-slate-400 flex items-center'>
                <SiCheckmarx className='fill-slate-800 dark:fill-white mr-2' />
                <p>Cross Functional Teams</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
