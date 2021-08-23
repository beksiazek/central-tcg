import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
	return (
		<CartContextProvider>
			<Router>
				<div className="app-container">
					<Navbar
						brandName="Central-TCG"
						rightElement={<CartWidget />}
					>
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
							<ItemDetailContainer />
						</Route>
						<Route path="/cart">
							<Cart />
						</Route>
					</Switch>
				</div>
			</Router>
		</CartContextProvider>
	);
}
