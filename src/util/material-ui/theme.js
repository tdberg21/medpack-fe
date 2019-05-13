import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        height: 88,
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
  },
  palette: {
    primary: {
      main: '#1f6a53',
    },
    secondary: {
      main: '#6a1f50',
    },
  },
});

export default theme;
