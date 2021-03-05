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

export default function App() {

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
   
  const winGame = () => {
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

    console.log(appData);
  };

  const loseGame = () => {
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

  const setCurrentGameOpponents = (opponents) => {
    console.log(opponents);

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
              availablePlayersProp={getAvailablePlayers(appData.gameResults)}
              setCurrentGameOpponentsProp={setCurrentGameOpponents} 
            />
          </Route>
          <Route path="/play">
            <PlayGame 
              propWinGameFunction={winGame} 
              propLoseGameFunction={loseGame} 
            />
          </Route>
          <Route path="/">
            <Home 
              appData={appData} 
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home({appData}) {
  
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

      <h3>
        Losses: { appData.gameResults.filter(x => x.result == "L").length }
      </h3>

      <Link to="/setup">
        Play Game
      </Link>
      <br />
      <br />
      <button
        onClick={() => history.push("/setup")}
      >
        Play Game
      </button>
    </>
  );
}

function SetupGame({availablePlayersProp, setCurrentGameOpponentsProp}) {

  // Want a checked property on the AvailablePlayers...
  const availablePlayersWithChosenProperty = availablePlayersProp.map(x => ({
    name: x
    , chosen: false
  }));

  const [availablePlayers, updateAvailablePlayers] = useState(availablePlayersWithChosenProperty);

  const handleAdd = (name) => {
    console.log(name);
    updateAvailablePlayers([
      ...availablePlayers.map(x => x.name == name ? {...x, chosen: true } : x)
    ]);
  };

  const handleRemove = (name) => {
    updateAvailablePlayers([
      ...availablePlayers.map(x => x.name == name ? {...x, chosen: false } : x)
    ]);
  };

  const history = useHistory();
  
  const localStartGameFunction = () => {
    setCurrentGameOpponentsProp(
      availablePlayers
        .filter(x => x.chosen)
        .map(x => x.name)
      );
    history.push("/play");
  };

  return (
    <>
      <h2>
        Setup Game
      </h2>

      <ul>
        { 
          availablePlayers.map(x => (
            <li key={x.name}>
              {x.name}
              &nbsp;
              &nbsp;
              {x.chosen || <button onClick={() => handleAdd(x.name)}>Add</button>}

              {!x.chosen || <button onClick={() => handleRemove(x.name)}>Remove</button>}

            </li>
            )
          ) 
        }
      </ul>

      <button
        onClick={() => localStartGameFunction()}
      >
        Start Game
      </button>

    </>
  );
}

function PlayGame({propWinGameFunction, propLoseGameFunction}) {
  
  const history = useHistory();
  
  const localWinGameFunction = () => {
    propWinGameFunction();
    history.push("/");
  };

  const localLoseGameFunction = () => {
    propLoseGameFunction();
    history.push("/");
  };

  return (
    <>
      <h2>
        Play
      </h2>

      <button
        onClick={() => localWinGameFunction()}
      >
        Win
      </button>
    
      <button
        onClick={() => localLoseGameFunction()}
      >
        Lose
      </button>
    </>
  );
}