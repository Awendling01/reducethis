import { Item, ReducerState } from "./types";

export const itemsReducer = (
	state: ReducerState,
	action: { type: string; payload: any }
): ReducerState => {
	const { type, payload } = action;

	const { item } = payload;

	switch (type) {
		case "addSelectedItem":
			return { ...state, selectedItems: [...state.selectedItems, item] };
		case "removeSelectedItem":
			return {
				...state,
				selectedItems: [...state.selectedItems.filter((i) => i !== item)],
			};
		default:
			return state;
	}
};
