//test
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BlackCard from "./BlackCard";
import Backcard from "./BackCard";
import WhiteCard from "./WhiteCard";
export default class FooterContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <Grid
            container
            style={{
              justifyContent: "space-around",
              alignItems: "flex-end",
              height: "70%"
            }}
          >
            <img
              src=" http://s.conceptjs.com/tni/you.png"
              height="50%"
              width="49%"
            />
          </Grid>
          <Grid
            container
            style={{
              background: "#ed8b1c",
              justifyContent: "space-around",
              alignItems: "flex-start",
              height: "10%"
            }}
          >
            you 7
          </Grid>
        </Grid>
        <Grid
          item
          xs={10}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <BlackCard
              height="85%"
              width="90%"
              text="I feel lost in _____"
              fontSize=".8vw"
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <WhiteCard
              height="85%"
              width="90%"
              text="overcoming legacy solutions"
              fontSize=".8vw"
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <BlackCard
              height="85%"
              width="90%"
              text="My biggest relies on _____"
              fontSize=".8vw"
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <WhiteCard
              height="85%"
              width="90%"
              text="freemium with pay to upgrade"
              fontSize=".8vw"
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <BlackCard
              height="85%"
              width="90%"
              text="I'd like to tranform our _____"
              fontSize=".8vw"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
