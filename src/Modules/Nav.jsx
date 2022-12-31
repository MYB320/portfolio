import PImg from "../components/ProfileImage";
import NavLink from "../components/NavLink";
import Social from "../components/Social";
import img from "../assets/img.jpg";

function Nav({ pages, showPage }) {
  return (
    <>
      <div className="bg-violet-500 flex flex-col px-4 w-[16rem] h-screen text-center top-0 left-0">
        <div className="mx-auto mt-auto mb-0 py-2">
          <PImg src={img} />
        </div>
        <div className="flex flex-col mx-auto mb-auto mt-0">
          {pages.map((page) => (
            <NavLink
              key={page.id}
              onClick={() => showPage(page.id)}
              name={page.name}
            />
          ))}
        </div>
        <Social />
      </div>
    </>
  );
}

export default Nav;
