import { combineReducers } from 'redux';

import { dataReducer } from './modules/data';
import { filtersReducer } from './modules/filters';

export default combineReducers({
  data: dataReducer,
  filters: filtersReducer
});
