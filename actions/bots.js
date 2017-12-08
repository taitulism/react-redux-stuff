import * as types from '../constants/ActionTypes';

export function addBot (botName, description) {
	return {
		type: types.ADD_BOT,
		botName,
		description,
		platforms: ['web', 'ios']
	};
}

export function deleteBot (index) {
	return { type: types.DELETE_BOT, index };
}

export function renameBot (index, botName, description) {
	return { type: types.RENAME_BOT, index, botName, description };
}

export function cloneBot (index) {
	return { type: types.CLONE_BOT, index };
}
