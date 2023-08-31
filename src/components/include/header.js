import React, { useState, useEffect, useRef } from "react";

import Modal from "../include/Modal";

import "../../assets/css/include/header.css";
import logo from "../../assets/img/header_logo.png";
import userAvatar from "../../assets/img/user_avatar.png";
import menuIcon from "../../assets/img/menu_icon.png";

function Header(props) {
  const [isMenu, setIsMenu] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorReturned, setErrorReturned] = useState("");
  const ref = useRef(null);

  const menuClick = () => {
    var temp = !isMenu;
    setIsMenu(temp);
    console.log(isMenu);
  };

  useEffect(() => {
    initial();
    function handleClickOutside(e) {
      const x = e.pageX;
      const y = e.pageY;
      const rect = ref.current.getBoundingClientRect();
      if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
        console.log("Click occurred inside the target div");
        return;
      }
      setIsMenu(false);
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const initial = async () => {
    var name = localStorage.getItem("name");
    if (name !== null) {
      setUserName(name);
      setIsSignin(true);
    } else {
      setIsSignin(false);
    }
    var time = localStorage.getItem("time");
    if(time) {
      var today = Date.now();
      var cookie_duration = 60*60*1000*20 // 20 hours
      if(today - time > cookie_duration) {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("time");
        setIsSignin(false);
      } 

    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("time");
      setIsSignin(false);
    }
    // console.log(signed);
  };

  const signout = () => {
    setErrorReturned("You have signed out.");
    setShowModal(false);
    setShowModal(true);
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("time");
    setIsSignin(false);
    window.location.href = "/";
  };

  const goMypage = () => {
    window.location.href = "/user/mypage";
  };

  const goHome = () => {
    window.location.href = "/";
  }

  return (
    <div className="inside-header">
      {showModal && <Modal msg={errorReturned} />}
      <div className="header-content">
        <div className="header-left">
          <img onClick={goHome} src={logo} alt="" className="main-logo" style={{cursor:"pointer"}} />
          <p className="main-font default-padding" style={{ color: "white", marginTop:"5px",fontSize:"20px" }}>flipgames</p>
          {isSignin ? (
            <div className="avatar-container" onClick={goMypage}>
              <img src={userAvatar} alt="" className="home-arrow-img" />
              <p className="main-font default-padding">{userName}</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div ref={ref}>
          <div className="header-menu">
            <p className="main-font default-padding" style={{ color: "white",fontSize:"20px" }}>
              flipjack
            </p>
            <img
              src={menuIcon}
              alt=""
              className="home-menu-img"
              onClick={menuClick}
            />
          </div>
          <div
            id="myDropdown"
            className="dropdown-content"
            style={{ display: isMenu ? "block" : "none" }}
          >
            <a href="/">Home</a>
            <a href="/howtoplay">How to play</a>
            {isSignin === true ? (
              <a href="/user/mypage" onClick={goMypage}>
                My Page
              </a>
            ) : (
              <a href="/user/signin" style={{ display: "none" }}>
                Sign In
              </a>
            )}
            {isSignin === true ? (
              <a href="/" onClick={signout}>
                Sign Out
              </a>
            ) : (
              <a href="/user/signin">
                Sign In
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
