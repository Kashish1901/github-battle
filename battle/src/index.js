import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Battle from "./Battle";
import PopularRepos from "./Popular";

ReactDOM.render(
  <BrowserRouter>
    <Header />

    <Switch>
      <Route path="/">
        <App />
      </Route>
      <Route path="/battle">
        <Battle />
      </Route>
      <Route path="/popular">
        <PopularRepos />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
