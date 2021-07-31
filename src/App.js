import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import KartWidget from "./components/KartWidget/KartWidget";
import UnderConstructionView from "./components/UnderConstructionView/UnderConstructionView";
import ItemList from "./components/ItemList/ItemList";
import ShopItemCard from "./containers/ShopItemCard/ShopItemCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
	return (
		<div className="app-container">
			<Navbar brandName="Central-TCG" rightElement={<KartWidget />}>
				<SearchBar />
			</Navbar>
			<ItemList><ShopItemCard itemLabel="Trickster Magician" initQuantity={1} maxQuantity={3}/></ItemList>
		</div>
	);
}
