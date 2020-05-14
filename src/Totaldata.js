import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class Totaldata extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        items: []
      };
    }
  
    
componentDidMount(){
    axios.get("https://api.covid19india.org/data.json",{}).then((res)=>{
    //on success
    this.setState({
    items:res.data.statewise[0]
    });
    }).catch((error)=>{
    //on error
    
    });
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      //console.log(items.deltaconfirmed-(items.deltadeaths+items.deltarecovered));
      if (error) {
        return <div>Error Occurred....</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div class="container">
            <div class="card text-center mt-5 mb-3 ml-5 mr-5 shadow bg-white">
            <div class="card-header bg-dark text-light">
              COVID Updates (INDIA)
            </div>
            <div class="card-footer text-success">
             Last Updated at {items.lastupdatedtime}
            </div>
            </div>

          
            
                
            <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="text-primary">Active</th>
                  <th scope="col" class="text-warning">Confirmed</th>
                  <th scope="col" class="text-success">Recovered</th>
                  <th scope="col" class="text-danger">Deceased</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td scope="col"><button class="btn btn-primary mr-2">{items.active}</button></td>
                <td scope="col"><button class="btn btn-warning mr-2 text-dark">{items.confirmed}<span class="badge badge-light ml-2 text-danger">{items.deltaconfirmed} &#x21E7;</span></button></td>
                <td scope="col"><button class="btn btn-success mr-2">{items.recovered}<span class="badge badge-light ml-2 text-success">{items.deltarecovered} &#x21E7;</span></button></td>
                <td scope="col"><button class="btn btn-danger mr-2">{items.deaths}<span class="badge badge-light ml-2 text-danger">{items.deltadeaths} &#x21E7;</span></button></td>
              </tr>
              </tbody>
            </table>
            </div>
            

            </div>
            

          
        );
      }
    }
  }

export default Totaldata;
