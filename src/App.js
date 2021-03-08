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

function App() {
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
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
