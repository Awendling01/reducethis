export type Item = {
	id: string;
};

export type ReducerState = {
	items: Item[];
	selectedItems: Item["id"][];
};
