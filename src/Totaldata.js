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
            <div class="card mt-5 mb-2 ml-1 mr-1 shadow-lg border border-dark mb-5 bg-light rounded">
            <div class="card-header bg-primary text-light font-weight-bold">
              COVID Updates (INDIA)
            </div>
            <div class="card-body text-center bg-white">

          
            
                
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
                <td scope="col"><p class="text-primary font-weight-bold">{items.active}</p></td>
                <td scope="col"><p class="text-warning font-weight-bold">{items.confirmed}<span class="badge badge-light ml-2 text-danger">{items.deltaconfirmed} &#x21E7;</span></p></td>
                <td scope="col"><p class="text-success font-weight-bold">{items.recovered}<span class="badge badge-light ml-2 text-success">{items.deltarecovered} &#x21E7;</span></p></td>
                <td scope="col"><p class="text-danger font-weight-bold">{items.deaths}<span class="badge badge-light ml-2 text-danger">{items.deltadeaths} &#x21E7;</span></p></td>
              </tr>
              </tbody>
            </table>
            </div>
            </div>
            <div class="card-footer text-black font-weight-bold bg-warning">
             Last Updated at {items.lastupdatedtime}
            </div>
            
            </div>
            

            </div>
            

          
        );
      }
    }
  }

export default Totaldata;
