import React, { useState } from "react";
import { useSpring } from "react-spring";

import Screen from "./components/Screen";
import SideBar from "./components/SideBar";

const App = () => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(true);

	const slideRightSideBar = useSpring({
		from: { transform: "translateX(-256px)" },
		to: { transform: "translateX(0px)", width: `${isSideBarOpen ? "256px" : "68px"}` },
	});

	return (
		<div className={`container ${isSideBarOpen ? "one-five" : "one-twenty"}`}>
			<SideBar slideRightSideBar={slideRightSideBar} isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
			<Screen />
		</div>
	);
};

export default App;
