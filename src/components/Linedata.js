import React from 'react';
import axios from "axios";

class Linedata extends React.Component{
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
      items:res.data.cases_time_series[0]
      });
      }).catch((error)=>{
      //on error
      
      });
      }
}

export default Linedata;