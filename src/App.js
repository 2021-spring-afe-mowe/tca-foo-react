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

  const initialAppData = {
    gameResults: [
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
    ]
    , currentGameStartTime: ""
  }
  ;

  const [appData, updateAppData] = useState(initialAppData);

  console.log(appData);

  const notifyAppUpdateCurrentGameStartTime = (newStartTime) => {
    console.log(newStartTime);
    updateAppData({
      ...appData
      , currentGameStartTime: newStartTime 
    });
  };

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
            totalNumberOfGames={appData.gameResults.length}
            notifyNewGameStartTime={notifyAppUpdateCurrentGameStartTime}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
