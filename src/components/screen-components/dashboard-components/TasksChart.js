import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useTransition, config, animated } from "react-spring";

const TasksChart = ({ TasksChartAnimation, slideLeftText }) => {
	const [showChart, SetShowChart] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			SetShowChart(true);
		}, 2000);
	}, []);

	const [state, SetState] = useState({
		series: [26, 59, 15],
		options: {
			chart: {
				type: "donut",
			},
			labels: ["Active", "Completed", "Ended"],
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: "bottom",
						},
					},
				},
			],
		},
	});

	///////////////////
	const transitions = useTransition(showChart, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		delay: 2000,
		config: config.molasses,
	});
	///////////////////

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
							<Chart options={state.options} series={state.series} type="donut" />
						</animated.div>
					)
			)}
		</animated.div>
	);
};

export default TasksChart;
