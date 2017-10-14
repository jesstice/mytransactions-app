import { combineReducers } from 'redux';

import { transactionsReducer } from './modules/transactions';

export default combineReducers({
    transactions: transactionsReducer
});
