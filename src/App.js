import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import Platform from "./components/Platform";
// import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <Sidebar />
              <Platform />
              <Cards />
            </div>
          </Route>
          {/* <Route path="/search">
            <Search />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
