import React, { useState } from "react";
import { useSpring } from "react-spring";

import Screen from "./components/Screen";
import SideBar from "./components/SideBar";

function App() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(true);

	const slideRightSideBar = useSpring({
		from: { transform: "translateX(-256px)" },
		to: { transform: "translateX(0px)", width: `${isSideBarOpen ? "256px" : "68px"}` },
	});

	const slideDownSearchBar = useSpring({ from: { transform: "translateY(-60px)" }, to: { transform: "translateY(0px)" } });

	return (
		<div className={`container ${isSideBarOpen ? "one-five" : "one-twenty"}`}>
			<SideBar slideRightSideBar={slideRightSideBar} isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
			<Screen slideDownSearchBar={slideDownSearchBar} isSideBarOpen={isSideBarOpen} />
		</div>
	);
}

export default App;
