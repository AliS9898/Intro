import React, { Component } from "react";

import _, { size } from "underscore";
import "./createdComponents/tni-common.css";
import "./createdComponents/tni-mobile.css";
import Menubar from "./createdComponents/MenuBar";
import Crown from "./createdComponents/Crown";
import Confetti from "react-dom-confetti";
import Disco from "./createdComponents/Disco";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";
import "react-toastify/dist/ReactToastify.css";
import Snackbar from "@material-ui/core/Snackbar";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import BugReportOutlinedIcon from "@material-ui/icons/BugReportOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarsOutlinedIcon from "@material-ui/icons/StarsOutlined";
import Sparkle from "react-sparkle";
import Cracker from "./createdComponents/Cracker";
import LaurelWrath from "./createdComponents/LaurelWreath";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default class SamlpeMainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Intro
      stepsEnabled: false,
      initialStep: 0,
      steps: [
        {
          element: ".active",
          intro: "Hey there Lee! Welcome to Truth & Insights"
        },
        {
          element: "#play",
          intro: "Navigate to play area",
          position: "right"
        },
        {
          element: "#help",
          intro: "How to play?",
          position: "right"
        },
        {
          element: "#reset",
          intro: "Reset the game",
          position: "right"
        },
        {
          element: ".tniDrawCircle",
          intro: "Draw cards using enter/space key"
        },
        {
          element: ".tniCardsInHand",
          intro:
            "Drag or double click on the cards to make a move. You can use enter/space keys to select a card and arrow keys to movearround and rearrange."
        },
        {
          element: ".tniFaceUpCards",
          intro:
            "Drop the cards from hand section to this area. Use enter/space key to drop a selected card"
        },
        {
          element: ".tniCardsInPile",
          intro: "Discarded cards will be stacked here"
        },
        {
          element: ".tniPlayers",
          intro: "Your co-players!"
        },
        {
          element: ".tniScoreCount",
          intro: "How many cards a player has?"
        },
        // {
        //   element: ".toastFab",
        //   intro: "Recent moves in the game.",
        //   position:"top-left"
        // },
        {
          element: ".tniGame",
          intro: "Let's Play!"
        }
      ],
      // TOAST TRACKER
      showToast: false,

      toastArray: [
        "You got 2 likes 0 dislikes",
        "Gisselle played a white card",
        "You got 3 likes",
        "Gisselle drew a card",
        "You Shared a story"
      ],

      openSnackbar: false,
      vertical: "top",
      horizontal: "center",

      toastMessage: "",

      radioButton: false,

      wonGame: false
    };
  }

  // INTRO
  startTour = () => {
    this.setState({ stepsEnabled: true, showTracker: false, showToast: false });
  };

  onExit = () => {
    this.setState(() => ({
      stepsEnabled: false,
      showTracker: false,
      showToast: false
    }));
  };

  onTourStepChange = (e) => {
    if (this.state.radioButton) {
      if (e === 5) {
        var focusableCards = document
          .querySelector(".tniCardsInHand")
          .querySelectorAll("[tabIndex='0']");
        var spaceEvent = new KeyboardEvent("keydown", {
          which: 32,
          keyCode: 32
        });
        var lefArrowEvent = new KeyboardEvent("keydown", {
          keyCode: 37,
          which: 37
        });
        var rightArrowEvent = new KeyboardEvent("keydown", {
          keyCode: 39,
          which: 39
        });
        var upArrowEvent = new KeyboardEvent("keydown", {
          keyCode: 38,
          which: 38
        });
        var dounArrowEvent = new KeyboardEvent("keydown", {
          keyCode: 40,
          which: 40
        });

        for (var counter = 1; counter <= 8; counter++) {
          (function (counter) {
            window.setTimeout(() => {
              if (counter === 1) {
                focusableCards[4].dispatchEvent(spaceEvent);
              }
              if (counter === 2) {
                focusableCards[4].dispatchEvent(lefArrowEvent);
              }
              if (counter === 3) {
                focusableCards[4].dispatchEvent(rightArrowEvent);
              }
              if (counter === 4) {
                focusableCards[4].dispatchEvent(rightArrowEvent);
              }
              if (counter === 5) {
                focusableCards[4].dispatchEvent(lefArrowEvent);
              }
              if (counter === 6) {
                focusableCards[4].dispatchEvent(upArrowEvent);
              }
              if (counter === 7) {
                focusableCards[4].dispatchEvent(dounArrowEvent);
              }
              if (counter === 8) {
                focusableCards[4].dispatchEvent(spaceEvent);
              }
            }, counter * 500);
          })(counter);
        }
      } else if (e === 4) {
        var element = document.querySelector(".tniDrawCircle");
        var op = 1;
        var count = false;
        var clear = 0;
        var timer = setInterval(() => {
          if (count) {
            clear += 1;
            element.style.opacity = op;
            element.style.filter = "alpha(opacity=" + op * 100 + ")";
            op -= op * 0.6;
          } else {
            clear += 1;
            element.style.opacity = op;
            element.style.filter = "alpha(opacity=" + op * 100 + ")";
            op += op * 0.6;
          }
          if (op < 0.5) {
            op = 1;
          }
          if (clear === 10) {
            clearInterval(timer);
          }
          count = !count;
        }, 200);
      }
    }
  };

  // // TOAST TRACKER
  // toastTracker = () => {
  //   this.setState({ showToast: true, openSnackbar: false });
  // };

  // generateToast = () => {
  //   var toastMessageString = this.state.toastArray[
  //     Math.floor(Math.random() * this.state.toastArray.length)
  //   ];
  //   this.setState({
  //     showToast: false,
  //     openSnackbar: true,
  //     toastMessage: toastMessageString
  //   });
  //   this.state.toastArray.push(toastMessageString);
  // };

  // dNd
  onDragStart = () => {};

  onDragEnd = () => {};

  radioChecked = () => {
    this.setState({ radioButton: !this.state.radioButton });
  };

  gameWon = () => {
    this.setState({ wonGame: !this.state.wonGame });
    // setTimeout(()=>{
    //  var crown = document.querySelector(".wonCrown");
    //  var destination = document.querySelector(".crown govtEdition");

    //  var rect = crown.getBoundingClientRect();
    //  var classes = this.classList;
    // this.appendChild(crown);
    // },2000)
  };

  render = () => {
    const {
      stepsEnabled,
      steps,
      initialStep,
      hintsEnabled,
      hints,
      vertical,
      horizontal
    } = this.state;

    const handCards = [
      <div
        className="tniCard tniCard-sm tniWhiteCard"
        style={{
          backgroundImage: `url(https://s.conceptjs.com/tni/WHITE.png)`
        }}
        tabIndex={0}
        id="one"
      >
        <div className="cardText">inefficient monitoring capabilities</div>
      </div>,

      <div
        className="tniCard tniCard-sm tniBlackCard"
        style={{
          backgroundImage: `url(https://s.conceptjs.com/tni/BLACK.png)`
        }}
        tabIndex={0}
        id="two"
      >
        <div className="cardText">My Business Concerns____</div>
      </div>,

      <div
        className="tniCard tniCard-sm tniWhiteCard"
        style={{
          backgroundImage: `url(https://s.conceptjs.com/tni/WHITE.png)`
        }}
        tabIndex={0}
        id="three"
      >
        <div className="cardText">
          innovatively creating value for all those involved in our customer
          ecosystem
        </div>
      </div>,

      <div
        className="tniCard tniCard-sm tniBlackCard"
        style={{
          backgroundImage: `url(https://s.conceptjs.com/tni/BLACK.png)`
        }}
        tabIndex={0}
        id="four"
      >
        <div className="cardText">
          For my insight needs, I wish I had _____.
        </div>
      </div>
    ];
    const confettiConfig = {
      angle: 90,
      spread: 180,
      startVelocity: 100,
      width: "10px",
      height: "10px",
      elementCount: 200,
      dragFriction: 0.12,
      stagger: 1,
      duration: 10000,
      perspective: 1000
    };

    let fxProps = {
      count: 3,
      interval: 200,
      colors: ["#CE2029", "#FFFCAF", "#FFE17C", "#FF664B", "#03172F"],
      calc: (props, i) => ({
        ...props,
        x: 200,
        y: 200
      })
    };

    return (
      <div className="tniGame">
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
          onChange={this.onTourStepChange}
        />
        {/* <Hints enabled={hintsEnabled} hints={hints} /> */}
        <div className="tniHeader">
          <img
            class="tniLogo"
            src="https://s.conceptjs.com/tni/TniBulbLogo.png"
            alt="Tni Logo"
          />
          <div className="tniMessage">
            <h1>Winners</h1>
          </div>
        </div>

        <div className="threeColsContainer">
          {this.state.wonGame && <Disco radius={100} />}
          {this.state.wonGame && (
            <Sparkle
              color={["#000000", "#E6E8FA", "#EOAA3E", "#AE8625", "#D4AF37"]}
              minSize={10}
              maxSize={20}
              flicker={true}
            />
          )}

          {this.state.wonGame && <Cracker />}

          <Menubar gameWon={this.gameWon} />
          <div className="tniMain">
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  height: "35%",
                  width: "80%",
                  backgroundColor: "#f2f1f0",
                  margin: "2%",
                  border: "2px solid #aaaaaa",
                  borderRadius: "15px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    height: "100%",
                    borderRight: "2px solid #aaaaaa",
                    flexDirection: "column",
                    position: "relative"
                  }}
                >
                  {/* <img
                    class="player"
                    src="https://thumbs.dreamstime.com/b/avatar-girl-short-hair-avatar-face-single-icon-cartoon-style-rater-bitmap-symbol-stock-illustration-web-91848067.jpg"
                    alt="player"
                    style={{ height: "120px", borderRadius: "100px" }}
                  /> */}
                  <LaurelWrath
                    size={300}
                    imageUrl={
                      "https://thumbs.dreamstime.com/b/avatar-girl-short-hair-avatar-face-single-icon-cartoon-style-rater-bitmap-symbol-stock-illustration-web-91848067.jpg"
                    }
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "30%"
                    }}
                  >
                    <span style={{ fontSize: "medium" }}>
                      <b>Truth Teller</b>
                    </span>
                    <span style={{ fontSize: "large" }}>Kathy</span>
                    <span>Played the max of Truth cards</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    height: "100%",
                    borderRight: "2px solid #aaaaaa",
                    flexDirection: "column",
                    position: "relative"
                  }}
                >
                  <LaurelWrath
                    size={300}
                    imageUrl={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuEoremt7NhDw5dXxwVT97Kk6lLBdk21r6KQ&usqp=CAU"
                    }
                  />
                  {/* <img
                    class="player"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuEoremt7NhDw5dXxwVT97Kk6lLBdk21r6KQ&usqp=CAU"
                    alt="player"
                    style={{ height: "120px", borderRadius: "100px" }}
                  /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "30%"
                    }}
                  >
                    <span style={{ fontSize: "medium" }}>
                      <b>Insight Digger</b>
                    </span>
                    <span style={{ fontSize: "large" }}>Brian</span>
                    <span>Played max of Insight cards</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    height: "100%",
                    flexDirection: "column",
                    position: "relative"
                  }}
                >
                  <LaurelWrath
                    size={300}
                    imageUrl={
                      "https://thumbs.dreamstime.com/b/young-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-adult-design-human-people-attractive-casual-guy-100786465.jpg"
                    }
                  />
                  {/* <img
                    class="player"
                    src="https://thumbs.dreamstime.com/b/young-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-adult-design-human-people-attractive-casual-guy-100786465.jpg"
                    alt="player"
                    style={{ height: "120px", borderRadius: "100px" }}
                  /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "30%"
                    }}
                  >
                    <span style={{ fontSize: "medium" }}>
                      <b>Story Teller</b>
                    </span>
                    <span style={{ fontSize: "large" }}>Jerry</span>
                    <span>Spoke the longest in the game</span>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "39%",
                    top: "-6%",
                    fontSize: "x-large",
                    backgroundColor: "#ff8c00",
                    padding: "10px",
                    borderRadius: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20%",
                    fontWeight: "600"
                  }}
                >
                  Truths Sharing
                </div>
              </div>

              <div
                style={{
                  height: "35%",
                  width: "80%",
                  backgroundColor: "#f2f1f0",
                  margin: "10% 0% 0% 0%",
                  border: "2px solid #aaaaaa",
                  borderRadius: "15px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    height: "100%",
                    borderRight: "2px solid #aaaaaa",
                    flexDirection: "column",
                    position: "relative"
                  }}
                >
                  <LaurelWrath
                    size={300}
                    imageUrl={
                      "https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-profile-icon-male-avatar-portrait-casual-person.jpg"
                    }
                  />
                  {/* <img
                    class="player"
                    src="https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-profile-icon-male-avatar-portrait-casual-person.jpg"
                    alt="player"
                    style={{ height: "120px", borderRadius: "100px" }}
                  /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "30%"
                    }}
                  >
                    <span style={{ fontSize: "medium" }}>
                      <b>Super Ally</b>
                    </span>
                    <span style={{ fontSize: "large" }}>Kathy</span>
                    <span>Played the max of Truth cards</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    height: "100%",
                    borderRight: "2px solid #aaaaaa",
                    flexDirection: "column",
                    position: "relative"
                  }}
                >
                  <LaurelWrath
                    size={300}
                    imageUrl={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqNkSe6vPDcKpJEEQhlsjELNh2trQseRTY-Q&usqp=CAU"
                    }
                  />
                  {/* <img
                    class="player"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqNkSe6vPDcKpJEEQhlsjELNh2trQseRTY-Q&usqp=CAU"
                    alt="player"
                    style={{ height: "120px", borderRadius: "100px" }}
                  /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "30%"
                    }}
                  >
                    <span style={{ fontSize: "medium" }}>
                      <b>Empathizer</b>
                    </span>
                    <span style={{ fontSize: "large" }}>Brian</span>
                    <span>Played the max of Truth cards</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    height: "100%",
                    flexDirection: "column",
                    position: "relative"
                  }}
                >
                  <LaurelWrath
                    size={300}
                    imageUrl={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsRUiAI7fVb-u_D70fxIshUFLPrn7bSaNNiA&usqp=CAU"
                    }
                  />
                  {/* <img
                    class="player"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsRUiAI7fVb-u_D70fxIshUFLPrn7bSaNNiA&usqp=CAU"
                    alt="player"
                    style={{ height: "120px", borderRadius: "100px" }}
                  /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "30%"
                    }}
                  >
                    <span style={{ fontSize: "medium" }}>
                      <b>Open Minded</b>
                    </span>
                    <span style={{ fontSize: "large" }}>Jerry</span>
                    <span>Played the max of Truth cards</span>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "39%",
                    top: "-6%",
                    fontSize: "x-large",
                    backgroundColor: "#ff8c00",
                    padding: "10px",
                    borderRadius: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20%",
                    fontWeight: "600"
                  }}
                >
                  Allyship
                </div>
              </div>

              <Confetti active={this.state.wonGame} config={confettiConfig} />
            </div>

            {/* <Confetti
              // style={{ transform: "rotate(-45deg)", top: "0px", left: "0px" }}
              numberOfPieces={50}
              drawShape={(ctx) => {
                ctx.beginPath();
                for (let i = 0; i < 22; i++) {
                  const angle = 0.35 * i;
                  const x = (0.2 + 1.5 * angle) * Math.cos(angle);
                  const y = (0.2 + 1.5 * angle) * Math.sin(angle);
                  ctx.lineTo(x, y);
                  ctx.fillRect(1, 1, 5, 5);
                  ctx.clearRect(5, 5, 30, 30);
                  ctx.strokeRect(20, 20, 20, 20);
                  ctx.fill();
                }
                ctx.stroke();
                ctx.closePath();
              }}
              // initialVelocityX={10}
              // initialVelocityY={1}
              frictio={0.99}
              recycle={true}
              tweenDuration={5000}
            /> */}

            {/*<DragDropContext 
              onDragStart={this.onDragStart}
              onDragEnd={this.onDragEnd}
            >
              <div className="tniTable">
                <div className="tniDrawPile">
                  <div className="tniBackCard">
                    <div
                      className="tniCard tniCard-sm tniBlackCard"
                      style={{
                        backgroundImage: `url(https://s.conceptjs.com/tni/BACK.png)`
                      }}
                    />
                    <div className="tniDrawCircle" onClick={this.generateToast}>
                      +1
                      <br />
                      Draw a card
                    </div>
                  </div>
                  <h4>Draw Pile</h4>
                </div>

                <div className="tniCardsInPlay">
                  <Droppable droppableId="table" direction="horizontal">
                    {(provided, snapshot) => (
                      <div
                        className="tniFaceUpCards"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <div
                          className="tniCard tniCard-md tniBlackCard"
                          style={{
                            backgroundImage: `url(https://s.conceptjs.com/tni/BLACK.png)`
                          }}
                        >
                          <div className="cardText">
                            For my insight needs, I wish I had _____.
                          </div>
                        </div>
                      </div>
                    )}
                  </Droppable>
                  <h4>Cards in play</h4>
                </div>

                <div className="tniCardsInPile">
                  <div
                    className="tniCard tniCard-sm tniWhiteCard tniDiscardBg"
                    style={{
                      backgroundImage: `url(https://s.conceptjs.com/tni/WHITE.png)`
                    }}
                  />
                  <div className="tniDiscard">
                    <div
                      className="tniCard tniCard-sm tniWhiteCard"
                      style={{
                        backgroundImage: `url(https://s.conceptjs.com/tni/WHITE.png)`
                      }}
                    >
                      <div className="cardText">
                        insufficient threat protection
                      </div>
                    </div>
                  </div>
                  <h4>Discard Pile</h4>
                </div>
              </div>

              <div className="tniChair">
                <Droppable droppableId="hand" direction="horizontal">
                  {(provided, snapshot) => (
                    <div
                      className="tniCardsInHand"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {handCards.map((item, index) => (
                        <Draggable
                          draggableId={"j" + index + "k"}
                          index={index}
                          tabIndex={-1}
                        >
                          {(provided, snapshot) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              {item}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>      
                  )}
                </Droppable> 
                <h4>Cards in Hand</h4>
              </div>
            </DragDropContext> */}
          </div>
          <div className="tniSidebar">
            <div className="tniMyself" onClick={this.startTour}>
              <img
                className="active profile"
                src="data:image/png;base64,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"
                height="128px"
                width="128px"
                alt="Active player"
              />
              <div
                style={{
                  position: "absolute",
                  top: "-27px",
                  transform: "rotate(-31deg)",
                  padding: "20px 0px 0px 20px"
                }}
              >
                <Crown size={130} color={"#f99004"} />
              </div>
              <div className="tniAutoReload">
                <AutorenewIcon />
              </div>
              <h2>Lee</h2>
            </div>
            <ul className="tniPlayers">
              <li>
                {/* <div style={{position:"absolute",top:"-27px",transform:"rotate(-31deg)",padding:"20px 0px 0px 20px"}}> */}
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "-31px",
                      transform: "rotate(-31deg)"
                    }}
                  >
                    <Crown size={65} color={"#f99004"} />
                  </div>
                  <img
                    class="player"
                    src="data:image/png;base64,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"
                    alt="player"
                  />
                </div>
                {/* </div> */}

                <div className="tniScore">
                  <h4>Gisselle</h4>
                  <div className="tniScoreCount">7</div>
                </div>
              </li>
            </ul>
          </div>

          {/* <Players players={players} activeIdx={1} playingIdx={1} /> */}
        </div>

        {/* <Fab
          style={{
            position: "fixed",
            bottom: 50,
            right: 40,
            zIndex: 2,
            color: "#f99004"
          }}
          className="toastFab"
          onClick={this.toastTracker}
        >
          <Badge badgeContent={this.state.toastArray.length} color="error">
            <NavigationIcon />
          </Badge>
        </Fab>

        {this.state.showToast ? ( 
          <ToastTracker
            hideProgressBar={false}
            toastArray={this.state.toastArray} 
          />
        ) : (
          ""
        )} */}

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={this.state.openSnackbar}
          autoHideDuration={3000}
          message={this.state.toastMessage}
          key={vertical + horizontal}
          onClose={() => this.setState({ openSnackbar: false })}
        />
        {/* <input
          type="radio"
          style={{ position: "absolute" }}
          checked={this.state.radioButton}
          onClick={this.radioChecked}
        /> */}
        {/* {(this.state.wonGame)?<div className="wonCrown">
                                            <Crown size={400}/>
                              </div>
                              :""} */}
      </div>
    );
  };
}

// class ToastTracker extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showTracker: false
//     };
//   }

//   render() {
//     this.props.toastArray.map(val => {
//       return toast(val, {
//         position: "bottom-right",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined
//       });
//     });
//     return (
//       <div>
//         <ToastContainer position="bottom-right" style={{ bottom: 50 }} />
//       </div>
//     );
//   }
// }
