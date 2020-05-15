import React from 'react';
import logo from './logo.svg';
import './App.css';
import Totaldata from './Totaldata';
import Statewise from './Statewise';
import Minigraph from './components/Minigraph';


function App() {
  return (
    <div className="App">
      
    <Totaldata/>
    <Minigraph/>
    <Statewise/>
    </div>
  );
}

export default App;
