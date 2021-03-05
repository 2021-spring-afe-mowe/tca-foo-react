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

  const [appData, updateAppData] = useState([]);

  useEffect(
    () => {
      updateAppData( 
        [
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
      );
    }
    , []
  );
   
  const winGame = () => {
    updateAppData(
      [
        ...appData
        , {
          result: "W"
          , opponents: [
            "Larry"
            , "Curly"
            , "Moe"
          ]
        }
      ]
    );

    console.log(appData);
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

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/setup">
            <SetupGame AvailablePlayers={getAvailablePlayers(appData)} />
          </Route>
          <Route path="/play">
            <PlayGame propWinGameFunction={winGame} />
          </Route>
          <Route path="/">
            <Home appData={appData} />
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
        Total games: { appData.length }
      </h3>

      <h3>
        Wins: { appData.filter(x => x.result == "W").length }
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

function SetupGame({AvailablePlayers}) {
  return (
    <>
      <h2>
        Setup Game
      </h2>

      <ul>
        { AvailablePlayers.map(x => <li key={x}>{x}</li>) }
      </ul>

      <Link to="/play">
        Start
      </Link>
    </>
  );
}

function PlayGame({propWinGameFunction}) {
  
  const history = useHistory();
  
  const localWinGameFunction = () => {
    propWinGameFunction();
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
    </>
  );
}