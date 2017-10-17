const FILTER_BY_ACCOUNT = 'FILTER_BY_ACCOUNT';
const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
const FILTER_BY_DATE = 'FILTER_BY_DATE';
const SELECT_DATE_START = 'SELECT_DATE_START';
const SELECT_DATE_END = 'SELECT_DATE_END';
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

export function updateFilterByDate() {
  return {
    type: FILTER_BY_DATE
  };
}


export function selectDateStart(date) {
  return {
    type: SELECT_DATE_START,
    payload: date
  }
}

export function selectDateEnd(date) {
  return {
    type: SELECT_DATE_END,
    payload: date
  }
}

export function completeDateSelection(date) {
  return function(dispatch) {
    dispatch(selectDateEnd(date));
    dispatch(updateFilterByDate());
  }
}

export function setInitialDates(start, end) {
  return function(dispatch) {
    dispatch(selectDateStart(start));
    dispatch(selectDateEnd(end));
  }
}

export function findStartAndEndDates(data) {
  return function(dispatch) {
    data.sort((a, b) => {
      return a.dateObject - b.dateObject
    })
    let startDate = data[0].dateObject;
    let endDate = data[data.length - 1].dateObject;
    dispatch(setInitialDates(startDate, endDate));
  }
}

export function clearFilterState() {
  return {
    type: CLEAR_FILTERS
  }
}

const initialState = {
  accountFilters: [],
  categoryFilters: [],
  dateStart: {},
  dateEnd: {},
  filterByDate: false
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_BY_ACCOUNT:
      return { ...state, accountFilters: action.payload };
    case FILTER_BY_CATEGORY:
      return { ...state, categoryFilters: action.payload};
    case FILTER_BY_DATE:
      const filterState = {...state};
      filterState.filterByDate = !filterState.filterByDate;
      return filterState;
    case SELECT_DATE_START:
      return {...state, dateStart: action.payload};
    case SELECT_DATE_END:
      return {...state, dateEnd: action.payload};
    case CLEAR_FILTERS:
      return {
        ...state,
        accountFilters: [],
        categoryFilters: []
      }
    default:
      return state;
  }
}