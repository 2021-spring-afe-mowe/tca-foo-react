import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
  , Switch
  , Route
  , Link
} from 'react-router-dom';

import { Home } from './Home';
import { Play } from './Play';

function App() {
  return (
    <Router>
      <nav>
        <Link
          to="/"
        >
          Home
        </Link>
        <br />
        <Link
          to="/play"
        >
          Play
        </Link>
      </nav>
      <Switch>
        <Route
          path="/play"
        >
          <Play />
        </Route>
        <Route
          path="/"
        >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
