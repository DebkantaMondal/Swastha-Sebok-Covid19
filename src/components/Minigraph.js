import React from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';

const Minigraph = () => {

  const dateset = []
  const dailyconfirmedset = []
  const dailyrecoveredset = []
  const dailydeceasedset = []

  axios.get("https://api.covid19india.org/data.json").then((res) => {
    res.data.cases_time_series.map(val => {
      dateset.push(val.date)
    })
    res.data.cases_time_series.map(value => {
      dailyconfirmedset.push(value.dailyconfirmed)
    })
    res.data.cases_time_series.map(value => {
      dailyrecoveredset.push(value.dailyrecovered)
    })
    res.data.cases_time_series.map(value => {
      dailydeceasedset.push(value.dailydeceased)
    })
  }).catch((error) => {

  })

  const data = {
    labels: dateset,
    datasets: [
      {
        label: 'Daily Confirmed Cases',
        backgroundColor: 'rgb(0, 102, 255)',
        borderColor: 'rgb(0, 102, 255)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(0, 102, 255)',
        hoverBorderColor: 'rgb(0, 102, 255)',
        data: dailyconfirmedset
      },
    
      {
        label: 'Daily Recovered Cases',
        backgroundColor: 'rgb(0, 153, 51)',
        borderColor: 'rgb(0, 153, 51)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(0, 153, 51)',
        hoverBorderColor: 'rgb(0, 153, 51)',
        data: dailyrecoveredset
      },
      {
        label: 'Daily Death Cases',
        backgroundColor: 'rgb(153, 0, 0)',
        borderColor: 'rgb(153, 0, 0)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(153, 0, 0)',
        hoverBorderColor: 'rgb(153, 0, 0)',
        data: dailydeceasedset
      }
    ]
  };

  return(
    <div>
      <div class="card mt-5 mb-2 ml-3 mr-3 shadow-lg border border-dark mb-5 bg-light rounded">
        <div class="card-header bg-primary text-light font-weight-bold">
           COVID Daily Confirmed vs Recovered vs Death Graph (INDIA)
        </div>
        <div class="card-body text-center bg-white">
          <Bar data={data}
          width={200}
          height={350}
          options={{
            maintainAspectRatio: false
          }} />
        </div>
      </div>
      
    </div>
  )
}

export default Minigraph;