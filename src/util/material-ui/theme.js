import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        height: 88
      }
    },
    MuiButton: {
      label: {
        textTransform: "none"
      }
    },
    MuiListItemIcon: {
      root: {
        color: "inherit"
      }
    }
  },
  palette: {
    primary: {
      main: "#1f6a53"
    },
    secondary: {
      main: "#ff3333"
    }
  }
});

export default theme;
