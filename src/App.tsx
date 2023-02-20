import React from "react";
import InputField from "./components/InputField";
import "./App.css";

function App(): React.ReactNode {
  return (
    <div className="App">
      <span className="heading">TypeScript Todo</span>
      <InputField/>
    </div>
  );
}

export default App;
