import "../../assets/css/play/dice.css";

// import Modal from "../include/Modal";
import Loading from "../include/Loading";
import Cards from "../include/Cards";

// import { API } from "../../constants";

import title from "../../assets/img/explain_title.png";
import React, { useEffect, useState } from "react";
// import axios from "axios";

function Dice() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      setIsLoading(false);
    }
    fetch();
  }, []);

  return (
    <div>
      {isLoading ?
        <Loading />
        :
        <div className="content-format">
          <div style={{ textAlign: "center" }} className="logo-part">
            <img className="mainplay-title-img" src={title} alt="" />
          </div>
          <div className="random-card-container">
            <div className="card-container">
              <Cards blank={false} rank="A" suit="hearts" times={1} />
            </div>
            <div className="card-container">
              <Cards blank={false} rank="2" suit="clubs" times={2} />
            </div>
            <div className="card-container">
              <Cards blank={false} rank="3" suit="diamonds" times={3} />
            </div>
            <div className="card-container">
              <Cards blank={false} rank="4" suit="spades" times={4} />
            </div>
            <div className="card-container">
              <Cards blank={false} rank="Q" suit="hearts" times={4} />
            </div>
            <div className="card-container">
              <Cards blank={false} rank="Q" suit="hearts" times={4} />
            </div>
            <div className="card-container">
              <Cards blank={false} rank="Q" suit="hearts" times={4} />
            </div>
          </div>

          <div className="tournament-part">
            <div className="dealer-container">
              <p className="main-font" style={{textAlign:"center"}}>dealer</p>
              <div className="cart-outline">
                <div className="card-container">
                  <Cards blank={true} rank="Q" suit="spades" times={4} />
                </div>
                <div className="card-container">
                  <Cards blank={true} rank="8" suit="hearts" times={8} />
                </div>
              </div>
            </div>
            <div className="user-container">
              <p className="main-font" style={{textAlign:"center"}}>you</p>
              <div className="cart-outline">
                <div className="card-container">
                  <Cards blank={true} rank="A" suit="diamonds" times={1} />
                </div>
                <div className="card-container">
                  <Cards blank={true} rank="5" suit="diamonds" times={5} />
                </div>
                <div className="card-container">
                  <Cards blank={true} rank="3" suit="spades" times={3} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      }
    </div>
  );
}

export default Dice;
