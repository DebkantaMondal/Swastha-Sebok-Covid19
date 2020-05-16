import React from 'react';
import logo from './logo.svg';
import './App.css';
import Totaldata from './Totaldata';
import Statewise from './Statewise';
import Minigraph from './components/Minigraph';
import Linedata from './components/Linedata';


function App() {
  return (
    <div className="App">
      
    <Totaldata/>
    <Minigraph/>
    <Linedata/>
    <Statewise/>
    </div>
  );
}

export default App;
