import logo from './logo.svg';
import './App.css';

// Added this awesome import statement
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Play } from './Play.js';
import { Home } from './Home.js';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Link to Home</Link><br/>
        <Link to="/play">Link to Play</Link>
      </nav>

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
