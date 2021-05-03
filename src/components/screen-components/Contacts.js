import React from "react";
import TableItem from "./contacts-components/table-item";

import { useTrail, useSpring, animated } from "react-spring";

import { contacts } from "../../data";

const Contacts = ({ isSideBarOpen }) => {
	const slideLeft = useSpring({ from: { transform: "translateX(100%)", opacity: 0 }, to: { transform: "translateX(0px)", opacity: 1 }, delay: 500 });

	const [trail, api] = useTrail(contacts.length, () => ({
		from: { transform: "translateY(10px)", opacity: 0 },
		to: { transform: "translateY(0px)", opacity: 1 },
		delay: 1000,
	}));

	return (
		<animated.div style={slideLeft} className="contacts-container">
			<div className="contacts-top">
				<span className="font-12 filter-grey">Company All</span>
				<button className="add-contact">Add Contact</button>
			</div>
			<div className="contact-list-container">
				<TableItem contacts={contacts} slideLeft={slideLeft} trail={trail} />
			</div>
		</animated.div>
	);
};

export default Contacts;

{
	/* <div className={`dashboard-container ${isSideBarOpen ? "three-two" : "nine-five"}`}> */
}
