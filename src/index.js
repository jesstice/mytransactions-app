import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './routes/';
import './index.css';
import muiTheme from './config/themes';
import registerServiceWorker from './registerServiceWorker';

const MyTransactions = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
        <Routes />
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<MyTransactions />, document.getElementById('root'));
registerServiceWorker();
