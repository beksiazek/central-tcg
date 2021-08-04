import { React, useState, useEffect } from 'react';
import _ from "lodash";
import ShopItemList from '../ShopItemList/ShopItemList';
import ItemDetailModal from "../../components/ItemDetailModal/ItemDetailModal";
import getItems from "../../services/ygoapi.call";

export default function Shop() {
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);
	const [modalItemId, setModalItemId] = useState(0);

	function setModalItemAndShow(id) {
		setModalItemId(id);
		setShowModal(true);
	}

	useEffect(() => {
		getItems()
			.then((result) => {
				setItems(_.drop(result.data, 7));
			})
			.catch(() => {
				console.log("No se pudo completar la petición.");
			});
	}, []);

	console.log(items);

    return (
        <div className="shop-container">
            <ShopItemList items={items} setModalItemAndShow={setModalItemAndShow} />
            <ItemDetailModal item={_.find(items, {"id": modalItemId})} show={showModal} setShow={setShowModal}/>
        </div>
    )
}
