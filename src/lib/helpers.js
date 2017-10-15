export const addAccountName = (data, accounts) => {
  return data.map(trn => {
    const accountName = accounts.find(acct => acct.accountId === trn.accountId);
    trn.accountName = accountName.accountName; // add account name to transactions
    return trn;
  })
}

export const createAccountsList = (accounts) => {
  let accountsList = [];
  accounts.map(account => accountsList.push(account.accountName));
  return accountsList;
}