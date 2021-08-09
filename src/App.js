import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import KartWidget from "./components/KartWidget/KartWidget";
import UnderConstructionView from "./components/UnderConstructionView/UnderConstructionView";
import Shop from "./containers/Shop/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
	const [kartItemCount, setKartItemCount] = useState(0);

	return (
		<Router>
			<div className="app-container">
				<Navbar brandName="Central-TCG" rightElement={<KartWidget kartItemCount={kartItemCount} setKartItemCount={setKartItemCount} />}>
					<SearchBar />
				</Navbar>
				<Switch>
					<Route exact path="/">
						<UnderConstructionView />
					</Route>
					<Route path="/shop">	
						<Shop kartItemCount={kartItemCount} setKartItemCount={setKartItemCount}/>
					</Route>
					<Route path="/trading"></Route>
				</Switch>
			</div>
		</Router>
	);
}
