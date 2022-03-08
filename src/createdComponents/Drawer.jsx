import React, { Component } from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: {
    background: "white",
    width: "15%",
    padding: "5px 30px",
    justifyContent: "center",
    alignItems: "center"
  }
};
class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: this.props.open
    };
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div>
        <List>
          {[
            "You joined the game",
            "You got 5 votes!",
            "Giselle drew a card",
            "You won the game!",
            "You joined the game",
            "You got 5 votes!",
            "Giselle drew a card",
            "You won the game!",
            "You joined the game",
            "You got 5 votes!",
            "Giselle drew a card",
            "You won the game!",
            "You joined the game",
            "You got 5 votes!",
            "Giselle drew a card",
            "You won the game!",
            "You joined the game",
            "You got 5 votes!",
            "Giselle drew a card",
            "You won the game!",
            "You joined the game",
            "You got 5 votes!",
            "Giselle drew a card",
            "You won the game!"
          ].map((text, index) => (
            <ListItem
              button
              key={text}
              style={{
                marginBottom: "5px",
                background: "white",
                borderRadius: "10px",
                marginTop: "5px"
              }}
              onClick={this.props.onClose}
              className="toastTrackerList"
            >
              <ListItemText
                primary={text}
                style={{ textDecoration: "bold", fontWeight: 800 }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.props.onClose}
          onOpen={() => {
            this.setState({ left: true });
          }}
          classes={{ paper: classes.paper }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              this.setState({ left: false });
            }}
            onKeyDown={() => {
              this.setState({ left: false });
            }}
          >
            {sideList}
          </div>
          <IconButton
            style={{
              position: "fixed",
              top: "45%",
              left: "calc(100% - 83%)",
              color: "#ff8c00"
            }}
            onClick={this.props.onClose}
            color={"#ff8c00"}
          >
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Drawer);
