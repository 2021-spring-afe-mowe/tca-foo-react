import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Play } from './Play';
import { 
  Route
  , Switch
  , Link
  , BrowserRouter as Router
} from 'react-router-dom';

import { useState } from 'react';

function App() {
  const initialAppData = {
    gameResults: [
      {
        startDateTime: "noon on christmas"
        , endDateTime: "noon thirty on christmas"
        , gameResult: "w"
      }
      , {
        startDateTime: "blah"
        , endDateTime: "blah +1"
        , gameResult: "l"
      }
    ]
    , currentGameStartTime: ""
  };

  console.log(initialAppData);

  const [appData, updateAppData] = useState(initialAppData);

  const notifyAppUpdateCurrentGameStartTime = (newStartTime) => {
    console.log(newStartTime);
    updateAppData({
      ...appData
      , currentGameStartTime: newStartTime
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/play">
          Play
        </Link>
      </nav>

      <Switch>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/">
          <Home 
            totalNumberOfGames={appData.length}
            notifyNewGameStartTime={notifyAppUpdateCurrentGameStartTime}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
