import React from "react";
import Header from "./Header";
import Totaldata from './Totaldata';
import Statewise from './Statewise';
import Minigraph from './components/Minigraph';
import Linedata from './components/Linedata';
import './App.css';

function Home() {

     return (
       <div>
         <Totaldata/>
         <Minigraph/>
         <Linedata/>
         <Statewise/>

       </div>
     );

 }

 export default Home;