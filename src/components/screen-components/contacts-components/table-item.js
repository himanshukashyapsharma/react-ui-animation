import React from "react";

import { animated } from "react-spring";

const TableItem = ({ contacts, slideLeft, trail }) => {
	return (
		<table className="contacts-table">
			<animated.thead style={slideLeft}>
				<tr>
					<th className="checkbox-wrapper">
						<input className="contact-checkbox" type="checkbox" />
					</th>
					<th className="th">
						<span className="th-text dark-blue">Name</span>
					</th>
					<th className="th">
						<span className="th-text dark-blue">Email</span>
					</th>
					<th className="th">
						<span className="th-text dark-blue">Company name</span>
					</th>
					<th className="th">
						<span className="th-text dark-blue">Role</span>
					</th>
					<th className="th">
						<span className="th-text dark-blue">Forecast</span>
					</th>
					<th className="th">
						<span className="th-text dark-blue">Recent activity</span>
					</th>
				</tr>
			</animated.thead>
			<tbody>
				{trail.map((style, i) => (
					<animated.tr key={i} style={style}>
						<td className="checkbox-wrapper">
							<input className="contact-checkbox" type="checkbox" />
						</td>
						<td className="td">
							<div className="tasks-card-profile-wrapper">
								<img className="contacts-card-profile-image" src={contacts[i].image} alt="profile-small" />
								<span className="font-15 table-black">&nbsp;&nbsp;{contacts[i].name}</span>
							</div>
						</td>
						<td className="td">
							<span className="td-text table-grey">{contacts[i].email}</span>
						</td>
						<td className="td">
							<span className="td-text table-grey">{contacts[i].company}</span>
						</td>
						<td className="td">
							<span className="td-text table-grey">{contacts[i].role}</span>
						</td>
						<td className="td">
							<span className="td-text table-grey">{contacts[i].forecast}</span>
						</td>
						<td className="td">
							<span className="td-text table-grey">{contacts[i].recentActivity}</span>
						</td>
					</animated.tr>
				))}
			</tbody>
		</table>
	);
};

export default TableItem;

{
	/* <tr>
				<td className="checkbox-wrapper">
					<input className="contact-checkbox" type="checkbox" />
				</td>
				<td className="td">
					<div className="tasks-card-profile-wrapper">
						<img className="contacts-card-profile-image" src="/images/tasks-card/3.png" alt="profile-small" />
						<span className="font-15 table-black">&nbsp;&nbsp;Lindsey Stroud</span>
					</div>
				</td>
				<td className="td">
					<span className="td-text table-grey">lindsey.stroud@gmail.com</span>
				</td>
				<td className="td">
					<span className="td-text table-grey">Hatchbuck</span>
				</td>
				<td className="td">
					<span className="td-text table-grey">Manager</span>
				</td>
				<td className="td">
					<span className="td-text table-grey">50 %</span>
				</td>
				<td className="td">
					<span className="td-text table-grey">5 Minutes ago</span>
				</td>
			</tr> */
}
