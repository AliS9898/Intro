//test
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BlackCard from "./BlackCard";
import Backcard from "./BackCard";
import WhiteCard from "./WhiteCard";

export default class SelectCards extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid
          item
          xs={3}
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          <Backcard height="45%" width="40%" />
        </Grid>
        <Grid
          item
          xs={9}
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          <BlackCard
            height="84%"
            width="25%"
            text="My biggest business concerns are_____"
            fontSize="1vw"
          />
        </Grid>
      </React.Fragment>
    );
  }
}
