import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import Platform from "./components/Platform";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Platform />
        <Cards />
      </Router>
    </>
  );
}

export default App;
