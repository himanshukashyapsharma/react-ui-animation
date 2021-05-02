import React from 'react'
import {useSpring} from 'react-spring'

import Tasks from './screen-components/Tasks'
import SearchBar from './screen-components/SearchBar'
import DealsChart from './screen-components/DealsChart'
import TasksChart from './screen-components/TasksChart'

const Screen = ({slideDownSearchBar}) => {

    const slideRight = useSpring({from: {transform: "translateX(-100%)"}, to: {transform: "translateX(0px)"}})
    const slideLeft = useSpring({from: {transform: "translateX(100%)"}, to: {transform: "translateX(0px)"}})

    return (
        <div className="screen-container">
            <SearchBar slideDownSearchBar={slideDownSearchBar} />
            <div className="dashboard-container">
                <Tasks TasksAnimation={slideRight} />
                <DealsChart  DealsAnimation={slideLeft} />
                <TasksChart  TasksChartAnimation={slideLeft}/>
            </div>
        </div>
    )
}

export default Screen
