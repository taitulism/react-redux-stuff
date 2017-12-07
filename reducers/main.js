import { TOGGLE_DIALOG, SEARCH } from '../constants/ActionTypes';

const initialState = {
	isDialogOpen: false,
	dialogType: null,
	editBotIndex: null,
	searchQuery: '',
	filteredBots: null
};

export default function main (state = initialState, action, root) {
	switch (action.type) {
		case TOGGLE_DIALOG:
			return Object.assign({}, state, {
				isDialogOpen: action.isOpen,
				dialogType: action.dialogType,
				editBotIndex: action.index
			});
			
		case SEARCH:
			const normalizedQuery = action.query.toLowerCase();

			const filteredBots = root.bots.filter((bot) => {
				const normalizedBotName = bot.botName.toLowerCase();
				const hasQuery = normalizedBotName.indexOf(normalizedQuery) > -1;
				
				return hasQuery;
			});

			return Object.assign({}, state, {
				filteredBots,
				searchQuery: action.query
			})

		default:
			return state;
	}
}
