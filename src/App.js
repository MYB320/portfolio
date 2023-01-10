import { useState } from 'react'

import Nav from './Modules/Nav'
import Main from './Modules/Main'

import pages from './pages'

function App() {
  let [pageId, setpageId] = useState(0)
  let [darkToggle, setDarkToggle] = useState(false)

  const toggleDark = () => setDarkToggle(!darkToggle)
  const GoToPage = (id) => {
    setpageId(id)
  }
  const Next = () => {
    const newId = pageId + 1
    setpageId(newId)
    if (newId >= 6) {
      setpageId(0)
    }
  }
  const Prev = () => {
    const newId = pageId - 1
    setpageId(newId)
    if (newId <= 0) {
      setpageId(0)
    }
  }
  return (
    <div className={`${darkToggle && 'dark'}`}>
      <div className='bg-white dark:bg-slate-800 flex h-screen w-screen'>
        <Nav
          pages={pages}
          GoToPage={GoToPage}
          pageId={pageId}
          toggleDark={toggleDark}
        />
        <Main page={pages[pageId]} onClickNext={Next} onClickPrev={Prev} />
      </div>
    </div>
  )
}

export default App
