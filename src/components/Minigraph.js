import React, { useState } from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';




  //const dateset = []
  //const dailyconfirmedset = []
  //const dailyrecoveredset = []
  //const dailydeceasedset = []

  class Minigraph extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          da :[],
          c:[],
          d:[],
          r:[],
          de:[],
          
      }
    }
  

  componentDidMount(){
    axios.get("https://api.covid19india.org/data.json").then((res) => {
      const dates = []
      const con = []
      const rec = []
      const dea = []
      res.data.cases_time_series.map(val=>{dates.push(val.date)})
      res.data.cases_time_series.map(val=>{con.push(val.dailyconfirmed)})
      res.data.cases_time_series.map(val=>{rec.push(val.dailyrecovered)})
      res.data.cases_time_series.map(val=>{dea.push(val.dailydeceased)})
       this.setState({
         da : res.data.cases_time_series,
         d : dates,
         c : con,
         r : rec,
         de : dea
         
       });
      //console.log(da)
      
    }).catch((error) => {
  
  
    });
  }
 


  
 
  



  

  //console.log(dailyconfirmedset);

  

 // console.log(data);
  
    render(){
      const {da,d,c,r,de} = this.state;
      //const {data} = this.graphdata;
     //console.log(da);
     //console.log(data);
     
  return(
    <div>
      
      <div class="card mt-5 mb-2 ml-3 mr-3 shadow-lg border border-dark mb-5 bg-light rounded">
        <div class="card-header bg-primary text-light font-weight-bold">
           COVID Daily Confirmed vs Recovered vs Death Graph (INDIA)
        </div>
        <div class="card-body text-center bg-white">
          <Line data={{
  labels: d,
  datasets: [
    {
      label: 'Daily Confirmed Cases',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgb(128, 179, 255)',
      borderColor: '	rgb(43, 121, 238)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(0, 92, 230)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(0, 92, 230)',
      pointHoverBorderColor: 'rgb(0, 61, 153)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: c
    },{
      label: 'Daily Recovered Cases',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgb(0, 204, 68)',
      borderColor: 'rgb(11, 142, 55)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(0, 128, 43)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(11, 142, 55)',
      pointHoverBorderColor: 'rgb(0, 102, 34)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: r
    },{
      label: 'Daily Death Cases',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgb(204, 0, 0)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(204, 0, 0)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(204, 0, 0)',
      pointHoverBorderColor: 'rgb(128, 0, 0)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: de
    }
  ]
}}
          width={100}
          height={350}
          options={{
            maintainAspectRatio: false,
            responsive: true
          }} />
        </div>
      </div>
      
    </div>
  )
        }

  
}

export default Minigraph;