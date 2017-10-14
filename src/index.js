import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

import Routes from './routes/';
import store from './redux/store';
import './index.css';
import muiTheme from './config/themes';
import registerServiceWorker from './registerServiceWorker';

const MyTransactions = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router>
          <Routes />
      </Router>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(<MyTransactions />, document.getElementById('root'));
registerServiceWorker();
