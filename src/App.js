import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Corona from "./pages/Corona";
import Flags from "./pages/Flags";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#000", cursor: "default" }}
        >
          <div className="navbar">
            <h1>Multi API App</h1>
          </div>
        </Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country">
            <Flags />
          </Route>
          <Route exact path="/covid">
            <Corona />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
