import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/App.css";
import Menu from "./components/Menu";
import Page from "./components/Page";

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        {/* Create 2 router components inside Page wrapping component*/}
        <Page />
      </div>
    </Router>
  );
}

export default App;
