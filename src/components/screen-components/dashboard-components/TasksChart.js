import React from "react";
import Chart from "react-apexcharts";
import { animated } from "react-spring";

import { tasksChartState } from "../../../data";

import { useChartTransition } from "../../../animations";

const TasksChart = ({ TasksChartAnimation, slideLeftText }) => {
	const transitions = useChartTransition(2000);

	return (
		<animated.div style={TasksChartAnimation} className="tasks-pie-chart-wrapper">
			<div className="chart-header">
				<animated.span style={slideLeftText} className="font-15 black">
					Tasks
				</animated.span>
				<animated.span style={slideLeftText} className="chart-select">
					Show: Monthly
				</animated.span>
			</div>
			{transitions(
				(style, item) =>
					item && (
						<animated.div style={style}>
							<Chart options={tasksChartState.options} series={tasksChartState.series} type="donut" />
						</animated.div>
					)
			)}
		</animated.div>
	);
};

export default TasksChart;
