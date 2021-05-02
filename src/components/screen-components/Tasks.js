import React from 'react'
import { animated } from 'react-spring'

const Tasks = ({TasksAnimation}) => {
    return (
        <animated.div style={TasksAnimation} className="tasks-wrapper">
            <div className="tasks-top">
                <div className="task-header">
                    <span className="font-13 dark-blue">8 Tasks completed out of 20</span>
                    <span className="chart-select">Show: This Week</span>
                </div>
                <div>
                    <progress max="10" value="8"></progress>
                </div>
                <div>
                    <div className="padding-20"><span className="font-15 black">23 December, Sunday</span></div>
                    <div className="calender-container">
                        <div>
                            <span className="font-13 dark-blue opacity-50">Sun</span>
                            <div className="date">
                                <span className="font-12 profile-grey">23</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-13 dark-blue opacity-50">Mon</span>
                            <div className="date">
                                <span className="font-12 profile-grey">24</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-13 dark-blue opacity-50">Tue</span>
                            <div className="date">
                                <span className="font-12 profile-grey">25</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-13 dark-blue opacity-50">Wed</span>
                            <div className="date">
                                <span className="font-12 profile-grey">26</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-13 dark-blue opacity-50">Thu</span>
                            <div className="date">
                                <span className="font-12 profile-grey">27</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-13 dark-blue opacity-50">Fri</span>
                            <div className="date">
                                <span className="font-12 profile-grey">28</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-13 dark-blue opacity-50">Sat</span>
                            <div className="date">
                                <span className="font-12 profile-grey">29</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* task calender bottom */}
            <div className="tasks-bottom">
                <div className="tasks-card">
                    <div className="tasks-card-top">
                        <span className="font-15 table-black">Send benefit review by Sunday</span>
                        <span className="font-12 grey">Reminder</span>
                    </div>
                    <div className="tasks-card-mid">
                        <span className="font-13 profile-grey opacity-50">Due date:</span>&nbsp;<span className="font-13 dark-grey">December 23, 2018</span>
                    </div>
                    <div  className="tasks-card-bottom">
                        <div className="tasks-card-profile-wrapper">
                            <img className="tasks-card-profile-image" src="/images/tasks-card/1.png" alt="profile-small" />
                            &nbsp;&nbsp;&nbsp;<span className="font-13 table-grey">George Fields</span>
                        </div>
                        <button className="tasks-card-button bg-green">Completed</button>
                    </div>
                </div>
                <div className="tasks-card">
                    <div className="tasks-card-top">
                        <span className="font-15 table-black">Invite to office meet-up</span>
                        <span className="font-12 grey">Call</span>
                    </div>
                    <div className="tasks-card-mid">
                        <span className="font-13 profile-grey opacity-50">Due date:</span>&nbsp;<span className="font-13 dark-grey">December 23, 2018</span>
                    </div>
                    <div  className="tasks-card-bottom">
                        <div className="tasks-card-profile-wrapper">
                            <img className="tasks-card-profile-image" src="/images/tasks-card/1.png" alt="profile-small" />
                            &nbsp;&nbsp;&nbsp;<span className="font-13 table-grey">Rebecca Moore</span>
                        </div>
                        <button className="tasks-card-button bg-red">Ended</button>
                    </div>
                </div>
                <div className="tasks-card">
                    <div className="tasks-card-top">
                        <span className="font-15 table-black">Office meet-up</span>
                        <span className="font-12 grey">Event</span>
                    </div>
                    <div className="tasks-card-mid">
                        <span className="font-13 profile-grey opacity-50">Due date:</span>&nbsp;<span className="font-13 dark-grey">December 23, 2018</span>
                    </div>
                    <div  className="tasks-card-bottom">
                        <div className="tasks-card-profile-wrapper">
                            <img className="tasks-card-profile-image" src="/images/tasks-card/1.png" alt="profile-small" />
                            &nbsp;&nbsp;&nbsp;<span className="font-13 table-grey">Lindsey Stroud</span>
                        </div>
                        <button className="tasks-card-button bg-green">Completed</button>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}

export default Tasks
