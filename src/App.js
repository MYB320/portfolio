import { useState } from "react";

import Nav from "./Modules/Nav";
import Main from "./Modules/Main";

import pages from "./pages";

function App() {
  const [pageId, setpageId] = useState(0);
  const showPage = (id) => {
    setpageId(id);
  };
  const down = () => {
    const newId = pageId + 1;
    setpageId(newId);
    if (newId >= 6) {
      setpageId(0);
    }
  };
  const up = () => {
    const newId = pageId - 1;
    setpageId(newId);
    if (newId <= 0) {
      setpageId(0);
    }
  };
  return (
    <div className="flex h-screen w-screen">
      <Nav pages={pages} showPage={showPage} />
      <Main page={pages[pageId]} onClickDown={down} onClickUp={up} />
    </div>
  );
}

export default App;
