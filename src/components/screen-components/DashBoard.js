import React from "react";
import { useSpring } from "react-spring";

import Tasks from "./dashboard-components/Tasks";
import DealsChart from "./dashboard-components/DealsChart";
import TasksChart from "./dashboard-components/TasksChart";

const DashBoard = ({ isSideBarOpen }) => {
	const slideRight = useSpring({ from: { transform: "translateX(-100%)", opacity: 0 }, to: { transform: "translateX(0px)", opacity: 1 }, delay: 500 });
	const slideLeft = useSpring({ from: { transform: "translateX(100%)", opacity: 0 }, to: { transform: "translateX(0px)", opacity: 1 }, delay: 500 });
	const slideUp = useSpring({ from: { transform: "translateY(10px)", opacity: 0 }, to: { transform: "translateY(0px)", opacity: 1 }, delay: 1000 });
	const slideRightText = useSpring({ from: { transform: "translateX(-50px)", opacity: 0, number: 4 }, to: { transform: "translateX(0px)", opacity: 1, number: 8 }, delay: 1500 });
	const slideLeftText = useSpring({ from: { transform: "translateX(50px)", opacity: 0, number: 4 }, to: { transform: "translateX(0px)", opacity: 1, number: 8 }, delay: 1500 });

	return (
		<div className={`dashboard-container ${isSideBarOpen ? "three-two" : "nine-five"}`}>
			<Tasks TasksAnimation={slideRight} slideUp={slideUp} slideRightText={slideRightText} />
			<DealsChart DealsAnimation={slideLeft} slideLeftText={slideLeftText} />
			<TasksChart TasksChartAnimation={slideLeft} slideLeftText={slideLeftText} />
		</div>
	);
};

export default DashBoard;
