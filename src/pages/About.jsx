/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faMessage } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div>
      <h1 className="about text-8xl font-bold	text-gray-800">
        Mohamed Yasser <span className="text-violet-500">Bourehida</span>
      </h1>
      <div className="about mb-5 text-xl font-medium uppercase text-gray-500">
        <>Collo · Skikda, Algeria · +213 (0) 667 56 90 32 · </>
        <a
          className="text-violet-500 hover:text-violet-600 hover:underline"
          href="mybdev20@gmail.com"
        >
          mybdev20@gmail.com
        </a>
      </div>
      <p className="my-5 text-gray-500">
        A forward-thinking Software Engineer with background working
        productively in dynamic environments. Experience in leveraging agile
        frameworks to provide a robust synopsis for high level overviews.
      </p>
      <div className="flex w-96 about mt-12">
        <button className="text-2xl uppercase text-gray-600 hover:text-violet-600 hover:underline mr-6">
          <FontAwesomeIcon className="mr-2" icon={faDownload} />
          Download Resume
        </button>
        <button className="text-2xl uppercase text-gray-600 hover:text-violet-600 hover:underline ml-6">
          <FontAwesomeIcon className="mr-2" icon={faMessage} />
          Contact me
        </button>
      </div>
    </div>
  );
}

export default About;
