import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none'
      }
    }
  },
  palette: {
    primary: {
      main: '#1f6a53',
    },
    secondary: {
      main: '#6a2c1f',
    }
  }
})

export default theme;