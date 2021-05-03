import React from "react";
import { useSpring } from "react-spring";

import Tasks from "./dashboard-components/Tasks";
import DealsChart from "./dashboard-components/DealsChart";
import TasksChart from "./dashboard-components/TasksChart";

import { useDashboardSpringAnimations } from "../../animations";

const DashBoard = ({ isSideBarOpen }) => {
	const { slideRight, slideLeft, slideUp, slideRightText, slideLeftText } = useDashboardSpringAnimations();

	return (
		<div className={`dashboard-container ${isSideBarOpen ? "three-two" : "nine-five"}`}>
			<Tasks TasksAnimation={slideRight} slideUp={slideUp} slideRightText={slideRightText} />
			<DealsChart DealsAnimation={slideLeft} slideLeftText={slideLeftText} />
			<TasksChart TasksChartAnimation={slideLeft} slideLeftText={slideLeftText} />
		</div>
	);
};

export default DashBoard;
