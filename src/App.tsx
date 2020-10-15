import React, { useReducer, useState } from "react";
import "./App.css";

import { Item, ReducerState } from "./types";
import { itemsReducer } from "./reducer";

const initialState: ReducerState = {
	items: [{ id: "1" }, { id: "2" }, { id: "6" }, { id: "9" }],
	selectedItems: ["1", "6"],
};

const App = () => {
	const [state, dispatch] = useReducer(itemsReducer, initialState);

	const { items, selectedItems } = state;

	// const [{items, selectedItems}, dispatch] = useReducer(itemsReducer, initialState);

	const unselectItem = (item: Item) => {
		dispatch({ type: "removeSelectedItem", payload: { item } });
	};

	const selectItem = (item: Item) => {
		dispatch({ type: "addSelectedItem", payload: { item } });
	};

	const toggleSelected = (itemId: string) => {
		const item = items.find((i) => i.id === itemId);

		if (!item) return;

		const isSelected = selectedItems.includes(itemId);

		if (isSelected) {
			unselectItem(item);
		} else {
			selectItem(item);
		}
	};

	return (
		<div>
			<div>
				{items.map((item, itemIndex) => (
					<div
						key={`Item${itemIndex}`}
						onClick={() => toggleSelected(item.id)}
						style={{
							background: selectedItems.includes(item.id) ? "pink" : "gray",
						}}
					>
						{item.id}
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
