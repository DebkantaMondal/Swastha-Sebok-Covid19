import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class Statewise extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        items: [],
        lastUpdate : null
      };
    }
  
    
componentDidMount(){
    axios.get("https://api.covid19india.org/data.json",{}).then((res)=>{
    //on success
    this.setState({
    items:res.data.statewise,
    lastUpdate:res.data.statewise[0].lastupdatedtime
    });
    }).catch((error)=>{
    //on error
    
    });
    }
  
    render() {
      const { error, isLoaded, items,lastUpdate } = this.state;
      //console.log(items);
      if (error) {
        return <div>Error Occurred....</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div class="container">
            <div class="card text-center mt-5 mb-3 ml-1 mr-1 shadow bg-white">
            <div class="card-header bg-dark text-light">
              COVID Updates (STATE WISE)
            </div>
            <div class="card-body text-center">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="text-dark" colSpan="4">Name of State</th>
                </tr>
              </thead>
              <tbody>
              { items.map(function(dict,index){
                  if(index>=1 && index<=items.length){
                return(
                    
                    //console.log(dict.state)
                
                <div>
                <tr>
                    <td scope="col" colSpan="4" style="bg-dark font-weight-bold"><button class="btn btn-dark mr-1">{dict.state}</button></td>
                </tr>
                <tr>
                    <th scope="col" class="text-primary">Active</th>
                    <th scope="col" class="text-warning">Confirmed</th>
                    <th scope="col" class="text-success">Recovered</th>
                    <th scope="col" class="text-danger">Deceased</th>
                </tr>
                <tr>
                    <td scope="col"><p class="text-primary font-weight-bold">{dict.active}</p></td>
                    <td scope="col"><p class="text-warning font-weight-bold">{dict.confirmed}<span class="badge badge-light ml-2 text-danger">{dict.deltaconfirmed} &#x21E7;</span></p></td>
                    <td scope="col"><p class="text-success font-weight-bold">{dict.recovered}<span class="badge badge-light ml-2 text-success">{dict.deltarecovered} &#x21E7;</span></p></td>
                    <td scope="col"><p class="text-danger font-weight-bold">{dict.deaths}<span class="badge badge-light ml-2 text-danger">{dict.deltadeaths} &#x21E7;</span></p></td>
                </tr>
                </div>
                
                    
                    )}
                })}
              
                  
              
              </tbody>
            </table>
            </div>
            </div>
            <div class="card-footer text-success">
             Last Updated at {lastUpdate}
            </div>
            </div>
            </div>
            
        );
      }
    }
  }

export default Statewise;