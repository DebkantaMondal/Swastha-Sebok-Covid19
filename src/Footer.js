import React from 'react';
import logo from './logo.svg';
import './App.css';

function Footer(){
    return(
        <div class="container">
            <div class="card mt-5 shadow-lg border border-dark bg-light rounded justify-content-center">
                <center>
            <div class="card-body text-center bg-white">
                
                    <p>Data Source : <a href="https://github.com/covid19india/api">https://github.com/covid19india/api</a></p>
                    <p>Want to Collaborate in Open Project ? <a href="#">Join this Group</a></p>
                    <p>Open Sourced in <a href="https://github.com/DebkantaMondal/Swastha-Sebok-Covid19" target="blank">Github</a></p>
                    <p>View Updates on Your Messenger <a href="#">Accept Bot</a></p>
                    <p>Data Accuracy : Given Soon</p>
                    
            </div>
            <div class="card-footer text-white font-weight-bold bg-primary">
             This is a Project developed by Debkanta Mondal [<a class="text-white" href="#" target="_blank">Open Development Project</a>]
            </div>
            </center>
            </div>
        </div>
    );
}
export default Footer;