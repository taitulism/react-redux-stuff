import { createStore } from 'redux';
import rootReducer from '../reducers';

const UNDEFINED = void 0;

export default function configureStore (initialState) {
	const devToolsExtension = window.devToolsExtension 
		? window.devToolsExtension()
		: UNDEFINED;
	
	const store = createStore(rootReducer, initialState, devToolsExtension);
	
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers');

			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
