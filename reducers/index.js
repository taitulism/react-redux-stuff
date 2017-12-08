import { combineReducers } from 'redux';
import mainReducer from './main';
import botsReducer from './bots';

/* 
    const rootReducer = combineReducers({
        main,
        bots
    });
*/

const rootReducer = (state = {}, action) => ({
    main: mainReducer(state.main, action, state),
    bots: botsReducer(state.bots, action, state)
});

export default rootReducer;
