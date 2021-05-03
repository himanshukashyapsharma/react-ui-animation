import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { animated } from "react-spring";

import { useTransition, config } from "react-spring";

const DealsChart = ({ DealsAnimation, slideLeftText }) => {
	const [showChart, SetShowChart] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			SetShowChart(true);
		}, 1500);
	}, []);

	const [state, SetState] = useState({
		series: [
			{
				name: "Deals",
				data: [50, 155, 55, 150],
			},
		],
		options: {
			chart: {
				// height: 300,
				width: "100%",
				type: "area",
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
			},
			xaxis: {
				type: "datetime",
				categories: ["2018-12-01", "2018-12-08", "2018-12-16", "2018-12-30"],
			},
			tooltip: {
				x: {
					format: "dd/MM/yy",
				},
			},
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
		<animated.div style={DealsAnimation} className="deals-wrapper">
			<div className="chart-header">
				<animated.span style={slideLeftText} className="font-15 black">
					Deals
				</animated.span>
				<animated.span style={slideLeftText} className="chart-select">
					Show: Monthly
				</animated.span>
			</div>
			{transitions(
				(style, item) =>
					item && (
						<animated.div style={style}>
							<Chart options={state.options} series={state.series} type="area" />
						</animated.div>
					)
			)}
		</animated.div>
	);
};

export default DealsChart;
