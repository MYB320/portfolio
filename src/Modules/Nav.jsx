import PImg from "../components/ProfileImage";
import NavLink from "../components/NavLink";
import img from "../assets/img.jpg";

function Nav({ pages, showPage }) {
  return (
    <>
      <div className="bg-violet-500 flex flex-col px-4 w-[16rem] text-center top-0 left-0">
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
      </div>
    </>
  );
}

export default Nav;
