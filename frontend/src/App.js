import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
// import News from './News';

function App() {
  const [currentUser,setCurrentUser]=useState(false)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home currentUser={currentUser}/>
          </Route>
          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/home">
            <Main  />
          </Route>
          {/* <Route exact path="/news">
            <News />
          </Route> */}
          <Sidebar />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
