//test
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import "./index.css";

class BlackCard extends Component {
  render() {
    return (
      <div
        class="container"
        style={{
          backgroundImage: `url(http://s.conceptjs.com/tni/BLACK.png)`,
          height: this.props.height ? this.props.height : "95%",
          width: this.props.width ? this.props.width : "25%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}
      >
        <div
          style={{
            color: "white",
            position: "relative",
            top: "33%",
            left: "16%",
            fontFamily: "Segoe UI",
            width: "9em",
            fontSize: this.props.fontSize ? this.props.fontSize : "2em",
            height: "7em",
            display: "flex",
            alignItems: "center"
          }}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}
export default BlackCard;
