import React, { Component } from "react";
import "./tni-common.css";
import _ from "underscore";
export default class Players extends Component {
  render() {
    const { players, activeIdx, playingIdx, onClick } = this.props;
    const className = _.isUndefined(onClick) ? "" : "clickable";
    return (
      <ul className="tniPlayers">
        {players.map((x, idx) => (
          <li
            className={
              className +
              (idx == activeIdx ? " active" : "") +
              (idx == playingIdx ? " playing" : "")
            }
            onClick={() => {
              /*onClick(idx);*/ return false;
            }}
          >
            <img className="player" src={x.img} />

            <h4>
              {x.name} {x.count}&nbsp;&nbsp;
              <div
                style={{
                  border: "1px solid orange",
                  display: "flex",
                  backgroundColor: "white",
                  width: "30px",
                  height: "15px",
                  fontSize: "10px",
                  padding: "2px 10px 2px 5px",
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                  borderRight: "none",
                  float: "right"
                }}
              >
                1
              </div>
            </h4>
          </li>
        ))}
      </ul>
    );
  }
}
