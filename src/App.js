import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
  , Switch
  , Route
} from 'react-router-dom';

import { Home } from './Home';
import { Play } from './Play';

function App() {
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
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
