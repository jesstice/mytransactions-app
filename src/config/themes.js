import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  deepOrange200,
  blueGrey800,
  lightBlue600,
  lightBlue900,
  white
} from 'material-ui/styles/colors';

export default getMuiTheme({
  palette: {
    textColor: blueGrey800,
    alternateTextColor: white,
    primary1Color: lightBlue600,
    accent1Color: deepOrange200,
    secondaryColor: lightBlue900,
    primary2Color: lightBlue600,
    pickerHeaderColor: lightBlue600
  },
});
