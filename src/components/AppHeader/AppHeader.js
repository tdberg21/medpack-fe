import React, { Component } from "react";
import {
  AppBar,
  InputBase,
  MenuItem,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "recompose";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import logo from "../../Assets/logo.png";

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1
  },
  filler: {
    height: theme.overrides.MuiAppBar.root.height
  },
  grow: {
    flexGrow: 1
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 140,
      "&:focus": {
        width: 220
      }
    }
  },
  search: {
    display: "flex",
    alignItems: "vertical",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 8,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  toolBar: {
    height: "100%"
  }
});

class AppHeader extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      suggestions: false
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ search: value });
    if (value.length) {
      this.setState({ suggestions: true });
    }
  };

  renderSuggestions = () => {
    const suggestions = this.props.patients.filter(
      patient => patient.id === this.state.search
    );
    console.log(this.props);
    return suggestions.map(patient => {
      console.log(patient);
      const { id } = patient;
      return (
        <MenuItem key={id} component="div">
          {id}
        </MenuItem>
      );
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.filler} />
        <AppBar position="fixed" className={classes.root}>
          <Toolbar className={classes.toolBar}>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              <img src={logo} alt="logo" height="50"></img>
              {/* Provider Minder */}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                onChange={this.handleChange}
                value={this.state.search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
              {this.state.suggestions && this.renderSuggestions()}
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patients
});

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(AppHeader);
