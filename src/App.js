import React, { useState } from "react";
import "./App.css";
import Logo from "./namaste-icon.svg";

const App = () => {
  const [Loader, setLoader] = useState(null);

  const startLoader = async () => {
    const { Audio } = await import("react-loader-spinner");

    setLoader(<Audio />);

    setTimeout(() => {
      setLoader(null);
    }, 10000);
  };

  return (
    <div id="app">
      <img src={Logo} alt="" />
      <h1>Hey! Nice to meet you!</h1>
      <h2>This is your webpack starter...</h2>
      <button onClick={startLoader}>Start loader</button>
      {Loader ? Loader : null}
    </div>
  );
};

export default App;
