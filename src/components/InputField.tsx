import React from "react";
import "./InputField.css";

export default function InputField() {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a Todo"
        className="input__box "
      ></input>
      <button className="input__submit">Add</button>
    </form>
  );
}
