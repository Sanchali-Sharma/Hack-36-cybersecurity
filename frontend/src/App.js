import './App.css';
import ContactUs from './components/ContactUs';
import Login from './Login';
import { useState } from 'react';
import axios from 'axios'



function App() {
  const mystorage=window.localStorage
  const [currentUser, setCurrentUser]=useState(mystorage.getItem("user"))
  return (
    <div className="App">
     <Login setCurrentUser={setCurrentUser} mystorage={mystorage}/>
    </div>
  );
}

export default App;
