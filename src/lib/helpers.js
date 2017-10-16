const addAccountName = (id, accounts) => {
  const accountName = accounts.find(acct => acct.accountId === id);
  return accountName.accountName;
}

const roundecimal = (num) => {
  return parseFloat(Math.round(num * 100) / 100).toFixed(2);
}

const removeUnderscoreCaps = (string) => {
  return string.replace(/_/g, " ").split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

export const formatTransactionData = (data, accounts) => {
  return data.map(trn => {
    trn.accountName = addAccountName(trn.accountId, accounts);
    trn.category = trn.category ? removeUnderscoreCaps(trn.category) : null;
    (trn.withdrawal) ? trn.withdrawal = roundecimal(trn.withdrawal) : trn.deposit = roundecimal(trn.deposit);
    trn.runningBalance = roundecimal(trn.runningBalance);
    return trn;
  })
}

export const formatCategoriesList = (list) => {
  return list.map(item => removeUnderscoreCaps(item));
}

export const formatAccountData = (data) => {
  return data.map(acct => {
    acct.balance = roundecimal(acct.balance);
    return acct;
  })
}

export const createAccountsList = (accounts) => {
  let accountsList = [];
  accounts.map(account => accountsList.push(account.accountName));
  return accountsList;
}

export const calculateAccountsTotal = (accounts) => {
  return accounts.reduce((acc, val) => {
    return acc + parseFloat(val.balance)
  }, 0);
}