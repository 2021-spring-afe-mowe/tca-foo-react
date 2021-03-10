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
    gameResults: []
    , currentGameStartTime: null
  }
  ;

  const [appData, updateAppData] = useState(initialAppData);

  console.log(appData);

  //
  // App notification functions...
  //

  const startGame = () => {
    updateAppData({
      ...appData
      , currentGameStartTime: Date.now() 
    });

    console.log("App.startGame()", appData.currentGameStartTime);

  };

  const winGame = () => {
    updateAppData({
      ...appData
      , gameResults: [
        ...appData.gameResults
        , {
          startDateTime: appData.currentGameStartTime
          , endDateTime: Date.now()
          , gameResult: "W"
        }
      ]
    });
  };

  const loseGame = () => {
    updateAppData({
      ...appData
      , gameResults: [
        ...appData.gameResults
        , {
          startDateTime: appData.currentGameStartTime
          , endDateTime: Date.now()
          , gameResult: "L"
        }
      ]
    });
  };

  //
  // Helper functions...
  //
  const calculateGameTimeFacts = () => {
    
    const gameTimes = appData.gameResults.map(x => x.endDateTime - x.startDateTime);

    return {
      longest: Math.max(...gameTimes)
      , shortest: Math.min(...gameTimes)
    };
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/play"
        >
          <Play 
            appWinGame={winGame}
            appLoseGame={loseGame}
          />
        </Route>
        <Route
          path="/"
        >
          <Home
            totalNumberOfGames={appData.gameResults.length}
            appStartGame={startGame}
            gameTimeFacts={calculateGameTimeFacts()}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
