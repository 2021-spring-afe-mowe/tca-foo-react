import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
  , Switch
  , Route
} from 'react-router-dom';

import { Home } from './Home';
import { Play } from './Play';

import { useState } from 'react';

function App() {

  const initialAppData = [
    {
      startDateTime: "Noon on Christmas of last year"
      , endDateTime: "Noon thirty on Christmas of last year"
      , gameResult: "W"
    }
    , {
      startDateTime: "Blah"
      , endDateTime: "Blah + 1"
      , gameResult: "L"
    }
  ];

  const [appData, updateAppData] = useState(initialAppData);

  console.log(appData);

  return (
    <Router>
      <Switch>
        <Route
          path="/play"
        >
          <Play />
        </Route>
        <Route
          path="/"
        >
          <Home
            totalNumberOfGames={appData.length}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
