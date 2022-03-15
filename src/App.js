import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Corona from "./pages/Corona";
import Country from "./pages/Country";
import Flags from "./pages/Flags";
import Home from "./pages/Home";
import { Redirect } from "react-router-dom";

const App = () => {
  const countries = useSelector((state) => state.countriesCounter.countries);

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
          <Route exact path="/country/:name">
            {countries.length === 0 ? <Redirect to="/country" /> : <Country />}
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
