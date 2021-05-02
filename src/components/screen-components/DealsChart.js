import React, {useState} from 'react'
import Chart from "react-apexcharts";
import { animated } from 'react-spring'


const DealsChart = ({DealsAnimation}) => {

    const [state, SetState] = useState({
        series: [{
            name: 'Deals',
            data: [50, 155, 55, 150]
          }],
          options: {
            chart: {
              // height: 300,
              width: '100%',
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-12-01", "2018-12-08", "2018-12-16", "2018-12-30"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy'
              },
            },
          }
    })

    return (<animated.div style={DealsAnimation} className="deals-wrapper">
              <div className="chart-header">
                <span className="font-15 black">Deals</span>
                <span className="chart-select">Show: Monthly</span>
              </div>
              <Chart options={state.options} series={state.series} type="area" />
          </animated.div>)
}

export default DealsChart
