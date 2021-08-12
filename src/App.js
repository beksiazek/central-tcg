import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import KartWidget from "./components/KartWidget/KartWidget";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import UnderConstructionView from "./components/UnderConstructionView/UnderConstructionView";
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
						<ItemListContainer />
					</Route>
					<Route path="/category/:categoryId">	
						<ItemListContainer />
					</Route>
					<Route path="/item/:itemId">
						<ItemDetailContainer kartItemCount={kartItemCount} setKartItemCount={setKartItemCount} />
					</Route>
					<Route path="/kart">
						<UnderConstructionView />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
