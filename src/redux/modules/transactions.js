export const LOAD_DATA_START = 'LOAD_DATA_START';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_ERROR = 'LOAD_DATA_ERROR';

export function loadDataStart() {
  return {
    type: LOAD_DATA_START
  }
}

export function loadDataSuccess(transactions) {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: transactions
  }
}

export function loadDataError(error) {
  return {
    type: LOAD_DATA_ERROR,
    payload: error
  }
}

export function getTransactionData() {
  return function(dispatch) {
      dispatch(loadDataStart())
      fetch('http://localhost:4400/transactions')
        .then(response => {
          return response.json()})
        .then(json => dispatch(loadDataSuccess(json)))
        .catch(e => dispatch(loadDataError(e)))
  }
}

const initialState = {
  isLoading: true,
  transactions: {},
  error: null
}

export function transactionsReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_DATA_START:
      return {...state, isLoading: true};
    case LOAD_DATA_SUCCESS:
      return {...state, isLoading: false, transactions: action.payload};
    case LOAD_DATA_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
}