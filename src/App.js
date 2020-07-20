import React from "react";
import "./scss/style.scss";

import { TheFooter, TheHeader } from "./containers/index";

function App(props) {
  return (
    <div>
      <TheHeader />
      {props.children}
      <TheFooter />
    </div>
  );
}

export default App;
