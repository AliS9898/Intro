//test
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import "./index.css";

class WhiteCard extends Component {
  render() {
    return (
      <div
        class="container"
        style={{
          backgroundImage: `url(http://s.conceptjs.com/tni/WHITE.png)`,
          height: this.props.height ? this.props.height : "95%",
          width: this.props.width ? this.props.width : "25%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}
      >
        <div
          style={{
            color: "black",
            position: "relative",
            top: "33%",
            left: "16%",
            fontFamily: "Segoe UI",
            width: "9em",
            fontSize: this.props.fontSize ? this.props.fontSize : "2em",
            height: "7em",
            display: "flex",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}
export default WhiteCard;
