import NImg from "../components/NavImage";
import NLinks from "../components/NavLinks";

function Nav() {
  return (
    <>
      <div className="bg-violet-500 flex flex-col px-4 w-[17rem] text-center top-0 left-0">
        <NImg></NImg>
        <NLinks></NLinks>
      </div>
    </>
  );
}

export default Nav;
