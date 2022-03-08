import React from "react";
import $ from "jquery";
import ReactDOM from "react-dom";

export default function AnmiDiscard(e) {
  console.log(e.clientX, "X", e.clientY, "Y");
  //GET THE POSITION OF CARD
  var hid_offset = $("#hiddenImage").offset();
  var hidden_left = e.offsetTop;
  var hidden_top = e.clientY + "px";

  var hid_width = parseInt($("#hiddenImage").width());
  var hid_height = parseInt($("#hiddenImage").height());
  var hid_left = hid_offset.left;
  var hid_top = hid_offset.top;
  var hid_right = Math.round(hid_left + hid_width);
  var hid_bottom = Math.round(hid_top + hid_height);

  //

  //GET THE POSITION OF DISCARD SECTION
  var deck_offset = $(".discard").position();
  var deck_width = parseInt($(".discard").width());
  var deck_height = parseInt($(".discard").height());
  var deck_left = deck_offset.left;
  var deck_top = deck_offset.top;
  var deck_right = Math.round(deck_left + deck_width);
  var deck_bottom = Math.round(deck_top + deck_height);
  //console.log("Deck Proper", deck_left, deck_top);
  //

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

          keyframe.style.left = deck_left + "px"; //10px of margin//
          keyframe.style.top = deck_top + "px";
          keyframe.style.width = deck_width + 350 + "px";
          keyframe.style.height = deck_height + "px";

          // console.log("AFTER LEFT", keyframe.style.left);
          // console.log("AFTER TOP", keyframe.style.top);

          // console.log("HIDDEN LEFT", deck_left);
          // console.log("HIDDEN TOP", deck_top);
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

          keyframe.style.left = hid_left + 20 + "px";
          keyframe.style.top = hid_top + 20 + "px";

          // console.log("AFTER LEFT", keyframe.style.left);
          // console.log("AFTER TOP", keyframe.style.top);

          console.log("HIDDEN LEFT", hid_left);
          console.log("HIDDEN TOP", hid_top);
          console.log("CLIENT LEFT", hidden_left);
          console.log("CLIENT TOP", hidden_top);
          break;
        }
      }

      break;
    }
  }
  $(".ufo").addClass("fly");
  setTimeout(() => $(".ufo").removeClass("fly"), 3000);
}
