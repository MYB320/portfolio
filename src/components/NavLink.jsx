const NavLink = ({ onClick, name }) => {
  return (
    <button
      className="p-2 text-gray-300 hover:text-white hover:scale-125 uppercase text-base font-semibold"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default NavLink;
