import React, { useEffect, useRef } from "react";

import "../../assets/css/home/home.css";
import title from "../../assets/img/flipjack_title.png";
import rightArrow from "../../assets/img/right_arrow.png"

function Home() {

  const play = () => {
    // if (localStorage.getItem("name") === null) {
    //   window.location.href = "/user/signin";
    // } else {
      window.location.href = "/dice";
    // }
  };
  return (
    <div className="content-format content-format-home">
      <div style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center" }} className="logo-part">
          <img className="home-title-img" src={title} alt="" />
        </div>
        <h2 style={{color:"white",marginTop:"100px" }}>21 and then some</h2>
        <p className="main-font" style={{ marginTop: "20px", marginBottom:"0", color:"#98c0d9",fontSize:"22px" }}>
          where blackjack meets it’s match
        </p>
        <br />
        <p onClick={play} className="main-font play-link" style={{cursor:"pointer", color:"white",fontSize:"22px"}}>
          <img src={rightArrow} alt="" style={{ marginRight:"30px"}} /> let's play
        </p>
      </div>
    </div>
  );
}

export default Home;
