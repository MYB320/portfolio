import NextPage from '../components/NextPage'
import PrevPage from '../components/PrevPage'

function Main({ page, onClickNext, onClickPrev }) {
  return (
    <>
      <div className={`flex flex-col container px-10 min-h-screen `}>
        <PrevPage pageId={page.id} onClick={onClickPrev} />
        <div className='my-auto '>{page.component}</div>
        <NextPage pageId={page.id} onClick={onClickNext} />
      </div>
    </>
  )
}

export default Main
