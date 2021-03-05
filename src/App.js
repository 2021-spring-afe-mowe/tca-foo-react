import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  const sharedAppData = [
    { 
      result: "W"
      , opponents: [
          "Taylor"
        ]
    }
    , { 
      result: "L"
      , opponents: [
        "Jack"
      ]
    }
    , { 
      result: "W"
      , opponents: [
        "Taylor"
        , "Jack"
      ]
    }
  ];

  const getAvailablePlayers = (results) => {

    const arrayOfPlayerArraysForEachGameResult = results.map(x => x.opponents);
    const flattenedArrayOfArrays = arrayOfPlayerArraysForEachGameResult.reduce(
        (acc, x) => [...acc, ...x]
        , []
    );

    const uniquePlayerNames = new Set(flattenedArrayOfArrays);

    return [...uniquePlayerNames];
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/setup">
            <SetupGame AvailablePlayers={getAvailablePlayers(sharedAppData)} />
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

function SetupGame({AvailablePlayers}) {
  return (
    <>
      <h2>
        Setup Game
      </h2>

      <ul>
        { AvailablePlayers.map(x => <li>{x}</li>) }
      </ul>

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