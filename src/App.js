import * as React from "react";
import Header from "./component/Header";
import Kacheln from "./component/Kacheln";
import Main from "./component/Main";
import Textfield from "./component/Textfield";
import "./component/index.css";

function App() {
  let name = "Dashboard";
  return (
    <div className="center container">
      <Header name={name} />
      <Textfield />
      <Main />
      <Kacheln />
    </div>
  );
}

export default App;
