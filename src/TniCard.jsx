import React, { Component } from "react";
import "./createdComponents/tni-common.css";
import _ from "underscore";
export default class TniCard extends Component {
  constructor(props) {
    super(props);
    this.state = { borderHandStyle: "" };
  }

  componentDidMount() {
    console.log(this.props.time, "time");
    setTimeout(() => {
      let borderHandStyle = this.props.borderHand;
      this.setState({ borderHandStyle });
    }, this.props.time * 1000);
    setTimeout(() => {
      this.setState({ borderHandStyle: "" });
    }, (this.props.time + 1) * 1000);
  }

  render = () => {
    const { type, text, size, onClick, borderDeck, borderHand } = this.props;
    var { borderHandStyle } = this.state;
    console.log(borderHandStyle, "borderHandStyle", this.props.time);
    const className =
      "tniCard tniCard-" +
      (size ? size : "md") +
      (_.isUndefined(onClick) ? "" : " clickable");
    const imageUrl = "http://s.conceptjs.com/tni/" + type + ".png";
    switch (type) {
      case "WHITE":
        return (
          <div
            className={className + " tniWhiteCard"}
            style={{
              border: borderHandStyle,
              backgroundImage: "url(" + imageUrl + ")"
            }}
            onClick={onClick}
          >
            <div className="cardText">{text}</div>
          </div>
        );

      case "BLACK":
        return (
          <div
            className={className + " tniBlackCard"}
            style={{
              border: borderHandStyle,
              backgroundImage: "url(" + imageUrl + ")"
            }}
            onClick={onClick}
          >
            <div className="cardText">{text}</div>
          </div>
        );

      case "BACK":
        return (
          <div
            className={className + " tniBlackCard"}
            style={{
              border: borderHandStyle,
              backgroundImage: "url(" + imageUrl + ")"
            }}
            onClick={onClick}
          />
        );

      case "Deck":
        return (
          <div
            className={className + " tniDeckCard"}
            style={{
              border: borderDeck,
              backgroundImage: "url(" + imageUrl + ")"
            }}
            onClick={onClick}
          />
        );

      default:
        return (
          <div
            className={className + " tniWhiteCard"}
            style={{
              border: borderHandStyle,
              backgroundImage: "url(" + imageUrl + ")"
            }}
            onClick={onClick}
          />
        );
    }
  };
}
