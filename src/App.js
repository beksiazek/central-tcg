import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import KartWidget from "./components/KartWidget/KartWidget";
import UnderConstructionView from "./components/UnderConstructionView/UnderConstructionView";
import Shop from "./containers/Shop/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
	return (
		<Router>
			<div className="app-container">
				<Navbar brandName="Central-TCG" rightElement={<KartWidget />}>
					<SearchBar />
				</Navbar>
				<Switch>
					<Route path="/shop">	
						<Shop />
					</Route>
					<Route path="/trading"></Route>
				</Switch>
			</div>
		</Router>
	);
}
