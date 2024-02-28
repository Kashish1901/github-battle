import React from "react";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import PopularRepos from "./Popular";
import Battle from "./Battle";

export default function App() {
  return (
    <>
      <div className="container">
        <header>
          <Router>
            <div>
              <nav className="flex">
                <ul className="flex">
                  <li>
                    <NavLink to="/" activeClassName="active">
                      Popular
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/battle" activeClassName="active">
                      Battle
                    </NavLink>
                  </li>
                </ul>

                <div className="torch">🔦</div>
              </nav>

              <Switch>
                <Route path="/battle">
                  <Battle />
                </Route>
                <Route path="/">
                  <PopularRepos />
                </Route>
              </Switch>
            </div>
          </Router>
        </header>
      </div>
    </>
  );
}
