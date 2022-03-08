import React from "react";
import $ from "jquery";
import ReactDOM from "react-dom";

var top = "100px";
var left = "45px";

function Toggle() {
  //SPREAD THE CARDS ON HOVER (FOR THE DECK OF OVERLAPED CARDS)
  // const hover_class = document.querySelector("#card_layout");
  // hover_class.classList.add("dynamic_hover", "new_card");
  // const hover_holder = document.querySelector("#cardlayout_holder");
  // hover_holder.classList.add("c_h");
  // setTimeout(
  //   () => hover_class.classList.remove("dynamic_hover", "new_card"),
  //   2000
  // );
  // setTimeout(() => hover_holder.classList.remove("c_h"), 2000);
  //

  //-----GET THE POSITION OF THE DECK (Animation Starting Point) ---------//
  var deck_offset = $(".tniDeck").position();
  var deck_width = parseInt($(".tniDeck").width());
  var deck_height = parseInt($(".tniDeck").height());
  var deck_left = deck_offset.left;
  var deck_top = deck_offset.top;
  var deck_right = Math.round(deck_left + deck_width);
  var deck_bottom = Math.round(deck_top + deck_height);
  console.log("Deck Proper", deck_left, deck_top);
  //----------------------------------------------------------------------//

  //------GET THE POSITION OF THE LAST ELEMENT OR CARD (Animation Ending Point) -----//
  var hidden_offset = $("#hiddenImage").position();
  var hidden_width = parseInt($("#hiddenImage").width());
  var hidden_height = parseInt($("#hiddenImage").height());
  var hidden_left = hidden_offset.left;
  var hidden_top = hidden_offset.top;
  var hidden_right = Math.round(hidden_left + hidden_width);
  var hidden_bottom = Math.round(hidden_top + hidden_height);
  console.log("Hidden Proper" + hidden_width, hidden_height);
  //---------------------------------------------------------------------------------//

  /*-------------------------CHANGE THE CSS KEYFRAME VALUES DYNAMICALLY ----------------------------
                this block of code will dynamically change the keyframe values which are initially
               hardcoded in css file(tni-common.css) to the position cordinates of target element
  -------------------------------------------------------------------------------------------------*/
  var stylesheet = document.styleSheets[0],
    rules = stylesheet.rules,
    i = rules.length,
    keyframes,
    keyframe;
  while (--i) {
    keyframes = rules.item(i);

    if (
      (keyframes.type === keyframes.KEYFRAMES_RULE ||
        keyframes.type === keyframes.WEBKIT_KEYFRAMES_RULE) &&
      keyframes.name === "flyby"
    ) {
      rules = keyframes.cssRules;
      i = rules.length;

      //LOOP TO CHANGE THE KEYFRAME-100%'s i.e THE TARGET CORDINATES
      while (i--) {
        keyframe = rules.item(i);

        if (
          (keyframe.type === keyframe.KEYFRAME_RULE ||
            keyframe.type === keyframe.WEBKIT_KEYFRAME_RULE) &&
          keyframe.keyText === "100%"
        ) {
          // console.log("BEFORE LEFT", keyframe.style.left);
          // console.log("BEFORE TOP", keyframe.style.top);

          keyframe.style.left = hidden_right + 10 + "px"; //10px of margin//
          keyframe.style.top = hidden_top + "px";
          keyframe.style.width = hidden_width + 500 + "px";
          keyframe.style.height = hidden_height + "px";

          // console.log("AFTER LEFT", keyframe.style.left);
          // console.log("AFTER TOP", keyframe.style.top);

          // console.log("HIDDEN LEFT", hidden_left);
          // console.log("HIDDEN TOP", hidden_top);
          break;
        }
      }

      //LOOP TO CHANGE THE KEYFRAME-0% i.e STARTING POSITIONS CORDINATES
      while (i--) {
        keyframe = rules.item(i);

        if (
          (keyframe.type === keyframe.KEYFRAME_RULE ||
            keyframe.type === keyframe.WEBKIT_KEYFRAME_RULE) &&
          keyframe.keyText === "0%"
        ) {
          // console.log("BEFORE LEFT", keyframe.style.left);
          // console.log("BEFORE TOP", keyframe.style.top);

          keyframe.style.left = deck_left + "px";
          keyframe.style.top = deck_top + "px";

          // console.log("AFTER LEFT", keyframe.style.left);
          // console.log("AFTER TOP", keyframe.style.top);

          // console.log("DECK LEFT", hidden_left);
          // console.log("DECK TOP", hidden_top);
          break;
        }
      }

      break;
    }
  }
  //----------------ADD THE ANIMATED CLASS TO THE ANIMATION ELEMENT-------------------------//
  $(".ufo").addClass("fly");
  //----------------------------------------------------------------------------------------//

  //----------------REMOVE THE CLASS AFTER THE GIVEN INTERVAL-----------------------------//
  setTimeout(() => $(".ufo").removeClass("fly"), 3000);
  //--------------------------------------------------------------------------------------//

  //--CODE THAT CLONES THE CARD TO handCard SECTION(JUST TO CHECK THE RESPONSIVENESS OF ANIM)- ------//
  setTimeout(
    () =>
      $("#hiddenImage")
        .clone()
        .appendTo(".tniHand"),
    1000
  );
  //--------------------------------------------------------------------------------------//
}

function Animate() {
  console.log("HEllo");
}

export default Toggle;
