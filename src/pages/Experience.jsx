function Experience() {
  return (
    <div>
      <h1 className='pb-10 text-6xl uppercase font-bold text-slate-800 dark:text-white font-Saira'>
        Experience
      </h1>
      <div>
        <div>
          <h3 className='pb-5 text-4xl uppercase font-semibold text-slate-800 dark:text-white font-Saira'>
            Freelance Web Developer
          </h3>
          <div className='flex justify-between w-[73rem]'>
            <div className='pb-3 text-2xl uppercase font-semibold text-slate-800 dark:text-white font-Saira'>
              35mm.pro -{' '}
              <span className=' text-violet-500 text-xl'>Riyadh, KSA</span>
            </div>
            <div>
              <span className='text-violet-800 dark:text-violet-300'>
                Feb 2022 – Oct 2022
              </span>
            </div>
          </div>
          <div className='my-5 text-lg text-slate-500 dark:text-slate-400 w-[73rem]'>
            <p>
              Planned website development, converting mockups into usable web
              presence with HTML, CSS, and JavaScript coding. Provided front-end
              website development using ReactJS and Strapi CMS, PostgreSQL for
              the back-end.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 className='pb-5 text-4xl uppercase font-semibold text-slate-800 dark:text-white font-Saira'>
            Freelance Software Developer
          </h3>
          <div className='flex justify-between w-[73rem]'>
            <div className='pb-3 text-2xl uppercase font-semibold text-slate-800 dark:text-white font-Saira'>
              BM-Cork SARL -{' '}
              <span className=' text-violet-500 text-xl'>Skikda, DZ</span>
            </div>
            <div>
              <span className='text-violet-800 dark:text-violet-300'>
                Dec 2019 – Apr 2020
              </span>
            </div>
          </div>
          <p className='my-5 text-lg text-slate-500 dark:text-slate-400 w-[73rem]'>
            Provided Software development using Java, JavaFX, and SQL.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Experience
