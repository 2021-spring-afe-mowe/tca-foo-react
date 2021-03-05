import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/setup">
            <SetupGame />
          </Route>
          <Route path="/play">
            <PlayGame />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>
        Home
      </h2>

      <Link to="/setup">
        Play Game
      </Link>
    </>
  );
}

function SetupGame() {
  return (
    <>
      <h2>
        Setup Game
      </h2>

      <Link to="/play">
        Start
      </Link>
    </>
  );
}

function PlayGame() {
  return (
    <>
      <h2>
        Play
      </h2>

      <Link to="/">
        Win, Lose, or Quit
      </Link>
    </>
  );
}