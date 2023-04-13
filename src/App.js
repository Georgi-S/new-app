import * as React from "react";
import Header from "./component/Header";
import Kacheln from "./component/Kacheln";
import InputWithButton from "./component/Inputwithbutton";
import "./component/index.css";

function App() {
  const [id, setId] = React.useState("");
  // console.log(id);

  let name = "Dashboard";

  function handleSubmit(e) {
    setId(e);
  }

  return (
    <div className="center container">
      <Header name={name} />
      {/* <Loadfunction /> */}
      {/* <InputWithButton onSubmit={e => console.log(e)} /> */}
      {/* <InputWithButton onSubmit={function(e){
        console.log(e)
      }} /> */}
      <InputWithButton onSubmit={handleSubmit} />
      <Kacheln id={id} />
    </div>
  );
}

export default App;
