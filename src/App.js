import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Summary from './components/summary/Summary';
import ScoreBoard from './components/scoreBoard/ScoreBoard';
import NavbarComponent from './components/features/NavbarComponent';

export default function App() {
  return (
    <Router>
      <div>
        <NavbarComponent/>
        <Switch>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/">
            <ScoreBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
