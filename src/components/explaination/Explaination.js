import "../../assets/css/explaination/explaination.css";

import React, { useState, useEffect } from "react";

import title from "../../assets/img/explain_title.png";

function Explaination() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const inputText = `The object of the game is to achieve a total of 21 from the value of the cards delt to you from a dealer or a higher card value total than the dealer. If you bust then the game is over. Should your card value total equal less than the dealer you can duel the dealer for a match pair. You are dealt one card and the dealer is delt one card. You must get the matching pair before the dealer gets its matching pair to win. If the dealer achieves the matching pair before you, then you can further duel the dealer by rolling the dice to see who can achieve the higher total of the face value of the dice. The highest total is the winner!`;

  useEffect(() => {
    if (index < inputText.length) {
      const timer = setInterval(() => {
        setText((prevText) => prevText + inputText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 30); // Adjust the interval to control the typing speed

      return () => {
        clearInterval(timer);
      };
    }
  }, [index, inputText]);

  return (
    <div className="content-format">
      <div className="inner-explaination">
        <div style={{ textAlign: "center" }} className="logo-part">
          <img className="explain-title-img" src={title} alt="" />
        </div>
        <div className="main-description">
          <p className="main-font description">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Explaination;
