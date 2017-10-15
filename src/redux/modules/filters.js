const FILTER_BY_ACCOUNT = 'FILTER_BY_ACCOUNT';
const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
const FILTER_BY_DATE = 'FILTER_BY_DATE';
const CLEAR_FILTERS = 'CLEAR_FILTERS';

export function filterByAccount(filters) {
  return {
    type: FILTER_BY_ACCOUNT,
    payload: filters
  };
}

export function filterByCategory(filters) {
  return {
    type: FILTER_BY_CATEGORY,
    payload: filters
  };
}

export function filterByDate(filters) {
  return {
    type: FILTER_BY_DATE,
    payload: filters
  };
}

export function clearFilterState() {
  return {
    type: CLEAR_FILTERS
  }
}

const initialState = {
  accountFilters: [],
  categoryFilters: [],
  dateFilters: []
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_BY_ACCOUNT:
      return { ...state, accountFilters: action.payload };
    case FILTER_BY_CATEGORY:
      return { ...state, categoryFilters: action.payload};
    case FILTER_BY_DATE:
      return {...state, dateFilters: action.payload };
    case CLEAR_FILTERS:
      return {
        ...state,
        accountFilters: [],
        categoryFilters: [],
        dateFilters: []
      }
    default:
      return state;
  }
}