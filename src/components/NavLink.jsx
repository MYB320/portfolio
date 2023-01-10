const NavLink = ({ onClick, page, Id }) => {
  let color = 'text-slate-300 hover:text-white'

  if (Id === page.id) {
    color = 'text-white scale-125'
  }
  return (
    <button
      className={
        'p-2 transition-all transform hover:scale-150 uppercase text-base font-semibold ' +
        color
      }
      onClick={onClick}
    >
      {page.name}
    </button>
  )
}

export default NavLink
