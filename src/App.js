import {useSpring} from 'react-spring'

import Screen from './components/Screen'
import SideBar from './components/SideBar'

function App() {

  const slideRightSideBar = useSpring({from: {transform: "translateX(-256px)"}, to: {transform: "translateX(0px)"}})
  const slideDownSearchBar = useSpring({from: {transform: "translateY(-60px)"}, to: {transform: "translateY(0px)"}})

  return (
    <div className="container">
      <SideBar slideRightSideBar={slideRightSideBar} />
      <Screen slideDownSearchBar={slideDownSearchBar}/>
    </div>
  );
}

export default App;
