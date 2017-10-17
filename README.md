# My Transactions App

## Description
This web application displays a list of a user's financial account information and their transacations.

On intial load of the app, the user is displayed their account information as well as their total balance across all accounts.

![Screenshot of Accounts](/accounts-screenshot.png?raw=true)

To view their transactions, the user can select Transactions in the sidebar navigation.

![Screenshot of Transactions](/transactions-screenshot.png?raw=true)

A user is then able to:
- Filter the transactions by multiple accounts
- Filter the transactions by multiple categories
- Filter the transactions by dates
- Sort the transactions by oldest to newest and vice versa
- Clear all filters

## Getting Started
This app requires a local server running to fetch the data. To get this project up and running, first start the [mytransactions server](https://github.com/jesstice/mytransactions-server) and then follow the steps below:

```
cd mytransactions-app
npm install
npm start
```

## Dependencies
- React
- Redux
- Material UI
- Momemnt