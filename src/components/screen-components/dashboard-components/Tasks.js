import React from "react";
import { animated } from "react-spring";

const Tasks = ({ TasksAnimation, slideUp, slideRightText }) => {
	return (
		<animated.div style={TasksAnimation} className="tasks-wrapper">
			<div className="tasks-top">
				<div className="task-header">
					<animated.span style={slideRightText} className="font-13 dark-blue">
						8 Tasks completed out of 20
					</animated.span>
					<animated.span style={slideRightText} className="chart-select">
						Show: This Week
					</animated.span>
				</div>
				<div>
					<animated.progress style={slideRightText} max="10" value={slideRightText.number}></animated.progress>
				</div>
				<div>
					<animated.div style={slideRightText} className="padding-20">
						<span className="font-15 black">23 December, Sunday</span>
					</animated.div>
					<animated.div style={slideUp} className="calender-container">
						<div className="center">
							<span className="font-13 dark-blue opacity-50">Sun</span>
							<div className="date">
								<span className="font-13">23</span>
							</div>
						</div>
						<div className="center">
							<span className="font-13 dark-blue opacity-50">Mon</span>
							<div className="date">
								<span className="font-12">24</span>
							</div>
						</div>
						<div className="center">
							<span className="font-13 dark-blue opacity-50">Tue</span>
							<div className="date">
								<span className="font-12">25</span>
							</div>
						</div>
						<div className="center">
							<span className="font-13 dark-blue opacity-50">Wed</span>
							<div className="date">
								<span className="font-12">26</span>
							</div>
						</div>
						<div className="center">
							<span className="font-13 dark-blue opacity-50">Thu</span>
							<div className="date">
								<span className="font-12">27</span>
							</div>
						</div>
						<div className="center">
							<span className="font-13 dark-blue opacity-50">Fri</span>
							<div className="date">
								<span className="font-12">28</span>
							</div>
						</div>
						<div className="center">
							<span className="font-13 dark-blue opacity-50">Sat</span>
							<div className="date">
								<span className="font-12">29</span>
							</div>
						</div>
					</animated.div>
				</div>
			</div>
			{/* task calender bottom */}
			<div className="tasks-bottom">
				<animated.div style={slideUp} className="tasks-card">
					<div className="tasks-card-top">
						<span className="font-15 table-black">Send benefit review by Sunday</span>
						<span className="font-12 grey">Reminder</span>
					</div>
					<div className="tasks-card-mid">
						<span className="font-13 profile-grey opacity-50">Due date:</span>&nbsp;<span className="font-13 dark-grey">December 23, 2018</span>
					</div>
					<div className="tasks-card-bottom">
						<div className="tasks-card-profile-wrapper">
							<img className="tasks-card-profile-image" src="/images/tasks-card/1.png" alt="profile-small" />
							&nbsp;&nbsp;&nbsp;<span className="font-13 table-grey">George Fields</span>
						</div>
						<button className="tasks-card-button bg-green">Completed</button>
					</div>
				</animated.div>
				<animated.div style={slideUp} className="tasks-card">
					<div className="tasks-card-top">
						<span className="font-15 table-black">Invite to office meet-up</span>
						<span className="font-12 grey">Call</span>
					</div>
					<div className="tasks-card-mid">
						<span className="font-13 profile-grey opacity-50">Due date:</span>&nbsp;<span className="font-13 dark-grey">December 23, 2018</span>
					</div>
					<div className="tasks-card-bottom">
						<div className="tasks-card-profile-wrapper">
							<img className="tasks-card-profile-image" src="/images/tasks-card/2.png" alt="profile-small" />
							&nbsp;&nbsp;&nbsp;<span className="font-13 table-grey">Rebecca Moore</span>
						</div>
						<button className="tasks-card-button bg-red">Ended</button>
					</div>
				</animated.div>
				<animated.div style={slideUp} className="tasks-card">
					<div className="tasks-card-top">
						<span className="font-15 table-black">Office meet-up</span>
						<span className="font-12 grey">Event</span>
					</div>
					<div className="tasks-card-mid">
						<span className="font-13 profile-grey opacity-50">Due date:</span>&nbsp;<span className="font-13 dark-grey">December 23, 2018</span>
					</div>
					<div className="tasks-card-bottom">
						<div className="tasks-card-profile-wrapper">
							<img className="tasks-card-profile-image" src="/images/tasks-card/3.png" alt="profile-small" />
							&nbsp;&nbsp;&nbsp;<span className="font-13 table-grey">Lindsey Stroud</span>
						</div>
						<button className="tasks-card-button bg-green">Completed</button>
					</div>
				</animated.div>
			</div>
		</animated.div>
	);
};

export default Tasks;
