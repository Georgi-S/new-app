import React, { useState } from "react";
import "./style/Inputwithbutton.css";

function InputWithButton(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        placeholder="Ihre Sensor-Id:"
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="form-input"
      />
      <button type="submit" className="form-button">
        Enter
      </button>
    </form>
  );
}

export default InputWithButton;
