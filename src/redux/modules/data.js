import { addAccountName, createAccountsList } from '../../lib/helpers';

export const LOAD_DATA_START = 'LOAD_DATA_START';
export const LOAD_TRANSACTIONS_SUCCESS = 'LOAD_TRANSACTIONS_SUCCESS';
export const LOAD_ACCOUNTS_SUCCESS = 'LOAD_ACCOUNTS_SUCCESS';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_DATA_ERROR = 'LOAD_DATA_ERROR';

export function loadDataStart() {
  return {
    type: LOAD_DATA_START
  }
}

export function loadTransactionsSuccess(data) {
  return {
    type: LOAD_TRANSACTIONS_SUCCESS,
    payload: data
  }
}

export function loadAccountsSuccess(data, list) {
  return {
    type: LOAD_ACCOUNTS_SUCCESS,
    payload: {
      data,
      list
    }
  }
}

export function loadCategoriesSuccess(data) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    payload: data
  }
}

export function loadDataSuccess(updatedTransactionData, accounts, categories, accountsList) {
  return function(dispatch) {
    dispatch(loadAccountsSuccess(accounts, accountsList));
    dispatch(loadTransactionsSuccess(updatedTransactionData));
    dispatch(loadCategoriesSuccess(categories));
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
          const updatedTransactionData = addAccountName(transactions, accounts);
          const accountsList = createAccountsList(accounts);
          dispatch(loadDataSuccess(updatedTransactionData, accounts, categories, accountsList))
        })
        .catch(e => dispatch(loadDataError(e)))
  }
}

const initialState = {
  isLoading: true,
  accounts: {},
  accountsList: [],
  categoriesList: {},
  transactions: {},
  error: null
}

export function dataReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_DATA_START:
      return {...state, isLoading: true};
    case LOAD_ACCOUNTS_SUCCESS:
      return {...state, isLoading: false, accounts: action.payload.data, accountsList: action.payload.list};
    case LOAD_CATEGORIES_SUCCESS:
      return {...state, isLoading: false, categoriesList: action.payload};
    case LOAD_TRANSACTIONS_SUCCESS:
      return {...state, isLoading: false, transactions: action.payload};
    case LOAD_DATA_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
}