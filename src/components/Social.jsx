import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Social() {
  return (
    <ul className="text-4xl text-gray-600 list-none pl-0 my-16">
      <li className="mr-2 inline-block hover:text-violet-600">
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li className="mx-2 inline-block hover:text-violet-600">
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li className="mx-2 inline-block hover:text-violet-600">
        <a href="#">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  );
}

export default Social;
