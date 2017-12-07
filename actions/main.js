import * as types from '../constants/ActionTypes';

export function openDialog (dialogType, index) {
	return {
		type: types.TOGGLE_DIALOG,
		isOpen: true,
		dialogType,
		index
	};
}

export function closeDialog () {
	return {
		type: types.TOGGLE_DIALOG,
		isOpen: false
	};
}

export function findBotByName (query) {
	return {
		type: types.SEARCH,
		query
	};
}
