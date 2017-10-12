import React from 'react';
import CircularProgress from 'material-ui/CircularProgress/';

import theme from '../../config/themes';
import './styles.css';

const Loader = () => (
  <div className="loader-wrapper">
    <CircularProgress color={theme.palette.alternateTextColor} />
  </div>
);

export default Loader;