/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Main() {
  return (
    <>
      <div className="flex flex-col p-12 min-h-screen">
        <div className="my-auto ">
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
            productively in dynamic environments. Fluent in JavaScript, C++,
            Rust and Go programming languages
          </p>
          <ul className="text-4xl text-gray-600 list-none pl-0 mt-9">
            <li className="mr-2 inline-block">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="mx-2 inline-block">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="mx-2 inline-block">
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
