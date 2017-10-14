import { combineReducers } from 'redux';

import { dataReducer } from './modules/data';

export default combineReducers({
    data: dataReducer
});
