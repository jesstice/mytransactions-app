export const LOAD_DATA_START = 'LOAD_DATA_START';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_ERROR = 'LOAD_DATA_ERROR';

export function loadDataStart() {
  return {
    type: LOAD_DATA_START
  }
}

export function loadDataSuccess(updatedTransactionData, accounts, categories) {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: {
      updatedTransactionData,
      accounts,
      categories
    }
  }
}

export function loadDataError(error) {
  return {
    type: LOAD_DATA_ERROR,
    payload: error
  }
}

export function getData() {
  return function(dispatch) {
      dispatch(loadDataStart())
      fetch('http://localhost:4400/transactions')
        .then(response => response.json())
        .then(json => {
          const {accounts, transactionData, categories} = json;
          const { transactions } = transactionData;
          let updatedTransactionData = transactions.map(trn => {
            const accountName = accounts.find(acct => acct.accountId === trn.accountId);
            trn.accountName = accountName.accountName; // add account name to transactions
            return trn;
          })
          dispatch(loadDataSuccess(updatedTransactionData, accounts, categories))
        })
        .catch(e => dispatch(loadDataError(e)))
  }
}

const initialState = {
  isLoading: true,
  accounts: {},
  categories: {},
  transactions: {},
  error: null
}

export function dataReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_DATA_START:
      return {...state, isLoading: true};
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactions: action.payload.updatedTransactionData,
        accounts: action.payload.accounts,
        categories: action.payload.categories
      };
    case LOAD_DATA_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
}