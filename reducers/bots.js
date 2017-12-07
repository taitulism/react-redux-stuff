// import initialState from './initial-state';
import {
	ADD_BOT,
	RENAME_BOT,
	CLONE_BOT,
	EXPORT_BOT,
	DELETE_BOT
} from '../constants/ActionTypes';

const initialState = [{
		botName: 'A Bot',
		description: 'Bot bot bot',
		isOnline: true,
		platforms: ['web', 'android', 'ios', 'sms', 'facebook']
	}, {
		botName: 'Another Bot',
		description: 'Yadi yada',
		isOnline: true,
		platforms: ['web', 'facebook']
	},{
		botName: 'My Bot',
		description: 'is better than yours',
		isOnline: true,
		platforms: ['web', 'sms']
	}, {
		botName: 'Your Bot',
		description: 'bla bla bla',
		isOnline: true,
		platforms: ['android', 'ios', 'facebook']
}];

export default function bots (state = initialState, action) {
	switch (action.type) {
		case ADD_BOT:
			return [{
				isOnline    : action.isOnline,
				botName     : action.botName,
				description : action.description,
				platforms   : action.platforms
			}, ...state];

		case RENAME_BOT:
			console.log(action);

			const editedBotData = {
				botName: action.botName,
				description: action.description
			};

			const newState = state.map((bot, index) =>
			index === action.index
				? Object.assign({}, bot, editedBotData)
				: bot
		);

			console.log(newState);
			
			return newState;

		case CLONE_BOT:
			const clonedBot = Object.assign({}, state[action.index]);

			return state.concat(clonedBot);

		case DELETE_BOT:
			return state.filter((bot, index) =>
				index !== action.index
			);

		default:
			return state;
	}
}
