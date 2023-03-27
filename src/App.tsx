import React from "react";
import Header from "./components/Header";
import RefiningSettings from "./components/RefiningSettings";
import "./styles/index.css";
import "./styles/index.scss"

function App() {
  return (
    <div className="app">
      <Header />
      <RefiningSettings />
    </div>
  );
}

export default App;
