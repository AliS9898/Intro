import React from "react";
import "./tni-common.css";

export default class Disco extends React.Component {
  componentDidMount() {
    var t = 1;
    var radius = this.props.radius ? this.props.radius : 50;
    var squareSize = radius / 10;
    var prec = 19.55;
    var fuzzy = 0.001;
    var inc = (Math.PI - fuzzy) / prec;
    var discoBall = document.getElementById("discoBall");

    for (var t = fuzzy; t < Math.PI; t += inc) {
      var z = radius * Math.cos(t);
      var currentRadius =
        Math.abs(
          radius * Math.cos(0) * Math.sin(t) -
            radius * Math.cos(Math.PI) * Math.sin(t)
        ) / 2.5;
      var circumference = Math.abs(2 * Math.PI * currentRadius);
      var squaresThatFit = Math.floor(circumference / squareSize);
      var angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
      for (var i = angleInc / 2 + fuzzy; i < Math.PI * 2; i += angleInc) {
        var square = document.createElement("div");
        var squareTile = document.createElement("div");
        squareTile.style.width = squareSize + "px";
        squareTile.style.height = squareSize + "px";
        squareTile.style.transformOrigin = "0 0 0";
        squareTile.style.webkitTransformOrigin = "0 0 0";
        squareTile.style.webkitTransform =
          "rotate(" + i + "rad) rotateY(" + t + "rad)";
        squareTile.style.transform =
          "rotate(" + i + "rad) rotateY(" + t + "rad)";
        if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
          squareTile.style.backgroundColor = randomColor("bright");
        } else {
          squareTile.style.backgroundColor = randomColor("any");
        }
        square.appendChild(squareTile);
        square.className = "square";
        squareTile.style.webkitAnimation = "reflect 2s linear infinite";
        squareTile.style.webkitAnimationDelay =
          String(randomNumber(0, 20) / 10) + "s";
        squareTile.style.animation = "reflect 2s linear infinite";
        squareTile.style.animationDelay =
          String(randomNumber(0, 20) / 10) + "s";
        squareTile.style.backfaceVisibility = "hidden";
        var x = radius * Math.cos(i) * Math.sin(t);
        var y = radius * Math.sin(i) * Math.sin(t);
        square.style.webkitTransform =
          "translateX(" +
          Math.ceil(x) +
          "px) translateY(" +
          y +
          "px) translateZ(" +
          z +
          "px)";
        square.style.transform =
          "translateX(" +
          x +
          "px) translateY(" +
          y +
          "px) translateZ(" +
          z +
          "px)";
        discoBall.appendChild(square);
      }
    }

    function randomColor(type) {
      var colors = [
        "#B51D05",
        "#ED7627",
        "#FFDC40",
        "#73BD37",
        "#1D808B",
        "#FC3756",
        "#81217C",
        "#24AD2D",
        "#E3092F",
        "#D13189",
        "#C0C0C0",
        "#808080",
        "#e6e8fa"
      ];

      return colors[Math.floor(Math.random() * colors.length)];
    }

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="bounce">
          <div id="discoBallLight"></div>
          <div id="discoBall" className="ball">
            <div id="discoBallMiddle"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
