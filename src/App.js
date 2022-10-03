import React from "react";
import Header from "./components/Header";
import Block from "./components/Block";
import "./App.css";
import Events from "./components/Events";

const App = () => {
  return (
    <div>
      <Header />
      <Block />
      <Events />
    </div>
  );
};

export default App;
