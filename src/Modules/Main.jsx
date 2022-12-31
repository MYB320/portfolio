import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Main({ page, onClickDown, onClickUp }) {
  const up = () => {
    if (!page.id <= 0)
      return (
        <button
          onClick={onClickUp}
          className="text-center text-4xl text-gray-400 hover:text-violet-800"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      );
  };
  const down = () => {
    if (page.id <= 4)
      return (
        <button
          onClick={onClickDown}
          className="text-center text-4xl text-gray-400 hover:text-violet-800"
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      );
  };

  return (
    <>
      <div className="flex flex-col w-[80vw] py-6 px-12 min-h-screen">
        {up()}
        <div className="my-auto mx-auto">{page.component}</div>
        {down()}
      </div>
    </>
  );
}

export default Main;
