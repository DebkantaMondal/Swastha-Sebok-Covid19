import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';


function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Switch>
      <Route path="/Swastha-Sebok-Covid19" exact component={Home}></Route>
      <Route path="/Swastha-Sebok-Covid19/about" exact component={About}></Route>
    </Switch>
    <Footer/>
    
    </div>
    </Router>
  );
}



export default App;
