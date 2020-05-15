import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import About from './About'



function Header(){
    return(
        <div className="App">
            <nav class="navbar navbar-expand-lg text-primary shadow-lg">
  <a class="navbar-brand font-weight-bold" href="#">Swastha Sebok</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler text-primary">Menu</span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">COVID Status</a>
          <a class="dropdown-item" href="#">Self Assess</a>
          <div class="dropdown-divider">Media</div>
          <a class="dropdown-item" href="#">Govt Rules & FAQs</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Helpline</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
}

export default Header;