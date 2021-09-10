import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import c3 from 'c3';
import axios from 'axios';

class Dashboard extends Component {
  componentDidMount = async () =>{
    let chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x', '2020-1-1', '2020-2-2'],
          ['Sales', 100, 200],
        ],
        types:{
          Sales: 'bar'
        }

      },
      axis:{
        x: {
          type: 'timeseries',
          tick: {
            format: '%d-%m-%Y'
          }
        }
      }
    });

    const response = await axios.get('chart');

    const records: {date: string, sum: number}[] = response.data.data;

    console.log(records)

    chart.load({
      columns:[
        ['x', ...records.map(record => record.date)],
        ['Sales', ...records.map(record => record.sum)]
      ]
    })
  }
  
  render() {
    return (
      <Wrapper>
        <h2>Daily Sales</h2>
        <div id="chart"/>
      </Wrapper>
    )
  }
}

export default Dashboard;