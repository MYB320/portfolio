import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function PrevPage({ pageId, onClick }) {
  if (!pageId <= 0)
    return (
      <button
        onClick={onClick}
        className='transition-all hover:animate-bounce p-4 text-center text-4xl text-slate-500 hover:text-indigo-600'
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    )
}

export default PrevPage
