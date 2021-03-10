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
        startDateTime: Date.now()
        , endDateTime: Date.now()
        , gameResult: "W"
      }
      , {
        startDateTime: Date.now()
        , endDateTime: Date.now()
        , gameResult: "L"
      }
    ]
    , currentGameStartTime: null
  }
  ;

  const [appData, updateAppData] = useState(initialAppData);

  console.log(appData);

  const startGame = () => {
    updateAppData({
      ...appData
      , currentGameStartTime: Date.now() 
    });

    console.log("App.startGame()", appData.currentGameStartTime);

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
            appStartGame={startGame}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
