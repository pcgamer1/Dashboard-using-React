import React from 'react'
import { Bar } from 'react-chartjs-2'
import { data2 } from '../assets/randomData'

class Chart2 extends React.Component {

    constructor(props) {
        super(props)
        this.data = {labels:['India', 'Russia', 'USA', 'Canada', 'Japan', 'China'], 
        datasets: [
            {
              label: 'Random Data',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: data2
            }
          ]
        } 
    }

    render() {
        return (
            <Bar data={this.data} />
        )
    }
}

export default Chart2