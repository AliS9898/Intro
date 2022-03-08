//test
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import "./index.css";

class Backcard extends Component {
  render() {
    return (
      <div
        class="container"
        style={{
          backgroundImage: `url(http://s.conceptjs.com/tni/BACK.png)`,
          height: this.props.height ? this.props.height : "635px",
          width: this.props.width ? this.props.width : "30em",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}
      >
        {/* <div style= {{color:"white",position:"relative" ,top:"33%",left:"16%",fontFamily:"Segoe UI",width:"9em",fontSize:"2em",height:"7em",display:"flex",alignItems:"center"}}>{this.props.text}</div> */}
      </div>
    );
  }
}
export default Backcard;
