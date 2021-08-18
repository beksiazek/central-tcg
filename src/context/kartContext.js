import { useState, createContext } from "react";
import _ from "lodash";

const kartContext = createContext();

export const { Consumer, Provider } = kartContext;

export function KartContextProvider({ children }) {
	const [kartItemList, setKartItemList] = useState([]);
	const [kartItemCount, setKartItemCount] = useState(0);

	console.log(kartItemList);

	function setKartItems(itemList) {
		setKartItemList(itemList);
		const itemCount = _.sumBy(itemList, "quantity");
		setKartItemCount(itemCount);
	}

	function addItemToKart(item, quantity) {
		
		const kartItem = _.find(kartItemList, ({item:{id}}) => id === item.id);

		if (kartItem) {
			kartItem.quantity += quantity;
			setKartItems(kartItemList);
		}
		else {
			const kartItem = { item, quantity };
			setKartItems(_.concat(kartItemList, kartItem));
		}
	}

	function removeItemFromKart(itemId) {
        const newItemList = _.reject(kartItemList, ({item}) => item.id === itemId);
		setKartItems(newItemList);
	}

	function clearKart() {
		setKartItemList([]);
		setKartItemCount(0);
	}

	return (
		<kartContext.Provider
			value={{
				kartItemList,
				kartItemCount,
				addItemToKart,
				removeItemFromKart,
				clearKart,
			}}
		>
			{children}
		</kartContext.Provider>
	);
}

export default kartContext;
