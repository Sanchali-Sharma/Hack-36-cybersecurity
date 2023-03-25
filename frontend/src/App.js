import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import News from './News';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Main />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
