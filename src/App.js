import { useState, useEffect } from 'react'

import Nav from './Modules/Nav'
import Main from './Modules/Main'
import pages from './pages'

function App() {
  let [pageId, setpageId] = useState(0)
  let [darkToggle, setDarkToggle] = useState(false)

  const toggleDark = () => setDarkToggle(!darkToggle)
  const GoToPage = (id) => setpageId(id)

  const Next = () => {
    const newId = pageId + 1
    setpageId(newId)
    console.log(newId)
    console.log(pageId)
    if (newId >= pages.length + 1) {
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

  const [color, setcolor] = useState(
    'bg-svg-blob-white-indigo-600 dark:bg-svg-blob-dark-indigo-600'
  )
  const pbgc = pages[pageId].bgColor
  useEffect(() => {
    setcolor(pbgc)
  }, [pbgc])

  return (
    <div className={`${darkToggle && 'dark'}`}>
      <div
        className={`transition-all flex h-screen w-screen bg-img transition-all ${color}`}
      >
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
