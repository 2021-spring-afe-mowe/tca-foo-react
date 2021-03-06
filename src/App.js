import 
  React 
  ,{
    useState
    , useEffect
  } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export const App = () => {

  const [appData, updateAppData] = useState({
    gameResults: [
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
    ]
    , currentGame: {
      opponents: []
    }
  });
   
  const notifyAppWinGame = () => {
    updateAppData({
      ...appData
      , gameResults: [
        ...appData.gameResults
        , {
          result: "W"
          , opponents: appData.currentGame.opponents
        }
      ]
    });
  };

  const notifyAppLoseGame = () => {
    updateAppData({
      ...appData
      , gameResults: [
        ...appData.gameResults
        , {
          result: "L"
          , opponents: appData.currentGame.opponents
        }
      ]
    });
  };

  const getAvailablePlayers = (results) => {

    const arrayOfPlayerArraysForEachGameResult = results.map(x => x.opponents);
    const flattenedArrayOfArrays = arrayOfPlayerArraysForEachGameResult.reduce(
        (acc, x) => [...acc, ...x]
        , []
    );

    const uniquePlayerNames = new Set(flattenedArrayOfArrays);

    return [...uniquePlayerNames];
  };

  const notifyAppSetCurrentGameOpponents = (opponents) => {
    updateAppData({
      ...appData
      , currentGame: {
        opponents: opponents
      }
    });
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/setup">
            <SetupGame 
              availablePlayers={getAvailablePlayers(appData.gameResults)}
              notifyAppSetCurrentGameOpponents={notifyAppSetCurrentGameOpponents} 
            />
          </Route>
          <Route path="/play">
            <PlayGame 
              notifyAppWinGame={notifyAppWinGame} 
              notifyAppLoseGame={notifyAppLoseGame} 
            />
          </Route>
          <Route path="/">
            <Home 
              appData={appData}
              lossesVersus={getAvailablePlayers(appData.gameResults.filter(x => x.result == "L"))} 
              winsVersus={getAvailablePlayers(appData.gameResults.filter(x => x.result == "W"))} 
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = ({
  appData
  , lossesVersus
  , winsVersus
}) => {
  
  const history = useHistory();
  
  return (
    <>
      <h2>
        Home
      </h2>

      <h3>
        Total games: { appData.gameResults.length }
      </h3>

      <h3>
        Wins: { appData.gameResults.filter(x => x.result == "W").length }
      </h3>

      <ul>
        { winsVersus.map(x => <li key={x}>{x}</li>)}
      </ul>

      <h3>
        Losses: { appData.gameResults.filter(x => x.result == "L").length }
      </h3>

      <ul>
        { lossesVersus.map(x => <li key={x}>{x}</li>)}
      </ul>
      
      <button
        onClick={() => history.push("/setup")}
      >
        Play Game
      </button>
    </>
  );
}

const SetupGame = ({
  availablePlayers
  , notifyAppSetCurrentGameOpponents
}) => {

  // Want a checked property on the AvailablePlayers...
  const availablePlayersWithChosenProperty = availablePlayers.map(x => ({
    name: x
    , chosen: false
  }));

  const [availableOpponents, updateAvailableOpponents] = useState(availablePlayersWithChosenProperty);

  const handleAddOpponent = (name) => {
    updateAvailableOpponents([
      ...availableOpponents.map(x => x.name == name ? {...x, chosen: true } : x)
    ]);
  };

  const handleRemoveOpponent = (name) => {
    updateAvailableOpponents([
      ...availableOpponents.map(x => x.name == name ? {...x, chosen: false } : x)
    ]);
  };

  const history = useHistory();
  
  const startGame = () => {
    notifyAppSetCurrentGameOpponents(
      availableOpponents
        .filter(x => x.chosen)
        .map(x => x.name)
      );
    history.push("/play");
  };

  const [newPlayerName, updateNewPlayerName] = useState("");

  const handleNameChange = (e) => {
    updateNewPlayerName(e.target.value);
  };

  const addNewPlayer = () => {
    updateAvailableOpponents([
      ...availableOpponents
      , {
        name: newPlayerName
        , chosen: true
      }
    ]);
  };

  return (
    <>
      <h2>
        Setup Game
      </h2>

      <ul>
        { 
          availableOpponents.map(x => (
            <li key={x.name}>
              {x.name}
              &nbsp;
              &nbsp;
              {x.chosen || <button onClick={() => handleAddOpponent(x.name)}>Add</button>}

              {!x.chosen || <button onClick={() => handleRemoveOpponent(x.name)}>Remove</button>}

            </li>
            )
          ) 
        }
      </ul>

      <br />

      <input
        value={newPlayerName}
        onChange={handleNameChange} 
      />
      <button
        onClick={() => addNewPlayer()}
      >
        +
      </button>

      <br />
      <br />

      <button
        onClick={() => startGame()}
      >
        Start Game
      </button>

    </>
  );
}

const PlayGame = ({
  notifyAppWinGame
  , notifyAppLoseGame
}) => {
  
  const history = useHistory();
  
  const winGame = () => {
    notifyAppWinGame();
    history.push("/");
  };

  const loseGame = () => {
    notifyAppLoseGame();
    history.push("/");
  };

  return (
    <>
      <h2>
        Play
      </h2>

      <button
        onClick={() => winGame()}
      >
        Win
      </button>
    
      <br />
      <br />

      <button
        onClick={() => loseGame()}
      >
        Lose
      </button>
    </>
  );
}