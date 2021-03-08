import logo from './logo.svg';
import './App.css';

// Added this awesome import statement
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Play } from './Play.js';
import { Home } from './Home.js';

function App() {
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
