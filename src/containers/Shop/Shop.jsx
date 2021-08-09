import { React, useState, useEffect } from "react";
import {
	Switch,
	Route,
	useRouteMatch,
} from "react-router-dom";
import _ from "lodash";
import ShopItemList from "../ShopItemList/ShopItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import getItems from "../../services/ygoapi.call";

export default function Shop(props) {
	let { path, url } = useRouteMatch();

	const [items, setItems] = useState([]);

	useEffect(() => {
		getItems()
			.then((result) => {
				setItems(_.drop(result.data, 7));
			})
			.catch(() => {
				console.log("No se pudo completar la petición.");
			});
	}, []);

	return (
		<div className="shop-container">
			<Switch>	
				<Route exact path={path}>
					<ShopItemList
						items={items}
						url={url}
						{...props}
					/>
				</Route>
				<Route path={`${path}/:itemId`}>
					<ItemDetailContainer />
				</Route>
			</Switch>
		</div>
	);
}
