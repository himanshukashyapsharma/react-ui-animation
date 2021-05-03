import React from "react";
import Chart from "react-apexcharts";
import { animated } from "react-spring";

import { dealsChartState } from "../../../data";

import { useChartTransition } from "../../../animations";

const DealsChart = ({ DealsAnimation, slideLeftText }) => {
	const transitions = useChartTransition(1500);

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
							<Chart options={dealsChartState.options} series={dealsChartState.series} type="area" />
						</animated.div>
					)
			)}
		</animated.div>
	);
};

export default DealsChart;
