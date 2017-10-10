import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blue500,
  indigo500,
  grey700,
  white
} from 'material-ui/styles/colors';

export default getMuiTheme({
  palette: {
    textColor: blue500,
    alternateTextColor: white,
    primary1Color: indigo500,
    accent1Color: blue500,
    secondaryColor: grey700
  }
});
