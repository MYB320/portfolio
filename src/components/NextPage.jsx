import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function NextPage({ pageId, onClick }) {
  if (pageId <= 4)
    return (
      <button
        onClick={onClick}
        className={`transition-all transform p-4 text-center text-4xl text-slate-500 hover:text-indigo-600 ${
          pageId === 0 ? 'animate-bounce' : 'hover:animate-bounce'
        }`}
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
    )
}

export default NextPage
