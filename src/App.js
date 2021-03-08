import logo from './logo.svg';
import './App.css';

// Added this awesome import statement
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// 'useState': When something changes, react will know to update 
import {
  useState
} from 'react';

import { Play } from './Play.js';
import { Home } from './Home.js';

function App() {

  // Here's our primary data structure
  const initialAppData = [
    {
      startDateTime: "12/25/2020T11:00:00Z",
      endDateTime: "12/25/2020T12:00:00Z",
      gameResult: "W"
    }
  ];

  const [appData, updateAppData] = useState(initialAppData);
  console.log(appData);


  return (
    <Router>
      <Switch>
        <Route path="/play">
        <Play></Play>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
