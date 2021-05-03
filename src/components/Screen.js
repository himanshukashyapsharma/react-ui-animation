import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SearchBar from "./screen-components/SearchBar";
import DashBoard from "./screen-components/DashBoard";
import Contacts from "./screen-components/Contacts";

const Screen = ({ slideDownSearchBar, isSideBarOpen }) => {
	return (
		<div className="screen-container">
			<SearchBar slideDownSearchBar={slideDownSearchBar} />
			<Switch>
				<Route exact path="/">
					<Redirect to="/dashboard" />
				</Route>
				<Route exact path="/dashboard">
					<DashBoard isSideBarOpen={isSideBarOpen} />
				</Route>
				<Route exact path="/contacts">
					<Contacts isSideBarOpen={isSideBarOpen} />
				</Route>
			</Switch>
		</div>
	);
};

export default Screen;
