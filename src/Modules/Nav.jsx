import NavLink from '../components/NavLink'
import Social from '../components/Social'
import img from '../assets/logo.png'

function Nav({ pages, GoToPage, pageId, toggleDark }) {
  return (
    <>
      <div className='bg-indigo-600 flex flex-col px-4 w-[16rem] h-screen text-center top-0 left-0'>
        <div className='mx-auto mt-auto mb-0 py-2'>
          <img
            className='shadow rounded-full max-w-[10rem] max-h-[10rem] align-middle border-8 border-solid border-indigo-300'
            src={img}
            alt='ProfileImage'
            onClick={toggleDark}
          />
        </div>
        <div className='flex flex-col mx-auto mb-auto mt-0'>
          {pages.map((page) => (
            <NavLink
              key={page.id}
              onClick={() => GoToPage(page.id)}
              page={page}
              Id={pageId}
            />
          ))}
        </div>
        <Social />
      </div>
    </>
  )
}

export default Nav
