import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Works from "./Works";
import Intersts from "./Intersts";

const pages = [
  { id: 0, name: "About", component: <About /> },
  { id: 1, name: "Experience", component: <Experience /> },
  { id: 2, name: "Education", component: <Education /> },
  { id: 3, name: "Skills", component: <Skills /> },
  { id: 4, name: "Works", component: <Works /> },
  { id: 5, name: "Intersts", component: <Intersts /> },
];

export default pages;
