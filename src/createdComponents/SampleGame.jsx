import React, { Component } from "react";
import Drawer from "./Drawer";
import FooterContainer from "./FooterContainer";
import SelectCards from "./SelectCard";
import "./tni-common.css";
import { Grid, Typography, Dialog, Button, TextField } from "@material-ui/core";
import Menubar from "./MenuBar";

import { withStyles } from "@material-ui/core/styles";
import ListIcon from "@material-ui/icons/List";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HomeIcon from "@material-ui/icons/Home";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import MicIcon from "@material-ui/icons/Mic";
import StopIcon from "@material-ui/icons/Stop";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class SampleGame extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container style={{ backgroundColor: "#f2f1ef", height: "100vh" }}>
          {/* for menu bar */}

          <Grid item xs={1} style={{ backgroundColor: "#ff8b00" }}>
            <Menubar />
          </Grid>
          {/* for center container */}
          <Grid item xs={10}>
            {/* for header */}
            <Grid
              container
              style={{ height: "10%", justifyContent: "space-around" }}
            >
              {/* <HeaderContent></HeaderContent> */}
            </Grid>
            {/* for middile container */}
            <Grid container style={{ height: "50%", justifyContent: "center" }}>
              <SelectCards />
            </Grid>
            {/* for footer */}
            <Grid container style={{ height: "40%" }}>
              <FooterContainer />
            </Grid>
          </Grid>
          {/* for drawer container */}
          <Grid item xs={1}>
            <Drawer />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
