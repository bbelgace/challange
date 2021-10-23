import React from "react";
import "./App.css";
import Navb from "./composants/Navb";
import Sec1 from "./composants/Sec1";
import Sec2 from "./composants/Sec2";
import Sec3 from "./composants/Sec3";
import Foot from "./composants/Foot";

const App = () => {
  return (
    <div>
      <Navb />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Foot />
    </div>
  );
};

export default App;
