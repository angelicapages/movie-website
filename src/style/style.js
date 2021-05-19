import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e1bee7',
      main: '#e040fb',
      dark: '#aa00ff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b9f6ca',
      main: '#69f0ae',
      dark: '#00e676',
      contrastText: '#000',
    },
  },
});


export default Theme