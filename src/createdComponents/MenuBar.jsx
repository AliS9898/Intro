import React, { Component } from "react";
import "./tni-common.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import Drawer from "./Drawer";

export default class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
  }

  onClose = () => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  };
  render = () => {
    // const { gameClick, resetClick, helpClick, quitClick } = this.props;
    const menuIconStyle = { fontSize: 32 };

    return (
      <React.Fragment>
        <ul className="tniMenu">
          <li tabIndex={0}>
            <div className="tniMenuItem" id="play">
              <GamesIcon size={32} />
              <h3>Play</h3>
            </div>
          </li>
          <li tabIndex={0} onClick={this.props.gameWon}>
            <div className="tniMenuItem" id="help">
              <HelpOutlineIcon style={menuIconStyle} />
              <h3>Help</h3>
            </div>
          </li>

          <li
            tabIndex={0}
            onClick={() => this.setState({ isDrawerOpen: true })}
          >
            <div className="tniMenuItem" id="help">
              <AnnouncementOutlinedIcon style={menuIconStyle} />
              <h3>Announcements</h3>
            </div>
          </li>

          <li tabIndex={0} className="reset">
            <div className="tniMenuItem" id="reset">
              <ReplayRoundedIcon style={menuIconStyle} />
              <h3>Reset</h3>
            </div>
          </li>

          {/*}
            <li>
                <div className="tniMenuItem">
                    <ExitToAppRoundedIcon style={menuIconStyle} />
                    <h3>Quit</h3>
                </div>
            </li>
*/}
        </ul>
        {this.state.isDrawerOpen ? (
          <Drawer open={this.state.isDrawerOpen} onClose={this.onClose} />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  };
}

class GamesIcon extends React.Component {
  render = () => {
    const size = this.props.size ? this.props.size : 24;
    const color = this.props.color ? this.props.color : "#000000";

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-label="Games Icon"
        alt="Games Icon"
      >
        <g
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          <path d="M3.5 20.5H12.5V23.5H3.5z" />
          <path d="M4.472 20.5L2.5 14 6.5 3.417" />
          <path d="M10.5 15.5L15.5 15.5 15.5 1.5 6.5 1.5 6.5 14.5 6.632 15.165 9.5 10.5 11 11 10.5 15.5 11.5 17.5 11.5 20.5" />
          <path d="M11.062 16.625L18 18.5 21.5 4.985 15.5 3.318" />
        </g>
        <path fill="none" d="M0 0H24V24H0z" />
      </svg>
    );
  };
}
