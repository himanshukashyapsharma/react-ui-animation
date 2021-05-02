import React, {useState} from 'react'
import Chart from "react-apexcharts";
import { animated } from 'react-spring'


const TasksChart = ({TasksChartAnimation}) => {

    const [state, SetState] = useState({
          
        series: [26,59,15],
        options: {
            chart: {
              type: 'donut',
            },
            labels: ['Active', 'Completed', 'Ended'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        
        
    })
    
    return (<animated.div style={TasksChartAnimation} className="tasks-pie-chart-wrapper">
              <div className="chart-header">
                <span className="font-15 black">Tasks</span>
                <span className="chart-select">Show: Monthly</span>
              </div>
              <Chart options={state.options} series={state.series} type="donut" />
          </animated.div>)
}

export default TasksChart
