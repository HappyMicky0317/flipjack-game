import "../../assets/css/user/login.css";

import { API } from "../../constants";
import Modal from "../include/Modal";

import React, { useState } from "react";
import axios from "axios";

import rightArrow from "../../assets/img/right-arrow.png";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emialVali, setEmailVali] = useState("");
  const [passwordVali, setPasswordVali] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorReturned, setErrorReturned] = useState("");

  const goHome = () => {
    window.location.href = "/";
  };

  const validateEmail = (email) => {
    // Regular expression to validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const singin = async () => {
    if (email === "") {
      setEmailVali("Input your email address");
      return;
    } else if (!validateEmail(email)) {
      setEmailVali("Email is not valid");
      return;
    }
    if (password === "") {
      setPasswordVali("Input your password");
      return;
    }
    try {
      const response = await axios.post(`${API}/api/users/signin`, {
        email: email,
        password: password,
      });
      var data = response.data;
      if (data.success === false) {
        setErrorReturned(data.msg);
        setShowModal(false);
        setShowModal(true);
      } else {
        var time = Date.now();
        localStorage.setItem("time", time);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userInput = (e) => {
    if (e.target.id === "email") {
      if (validateEmail(e.target.value)) setEmailVali("");
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      if (e.target.value !== "") setPasswordVali("");
      setPassword(e.target.value);
    }
  };

  return (
    <div>
      <div className="over-video">
        {showModal && <Modal msg={errorReturned} />}
        <div className="home-link" onClick={goHome}>
          <img src={rightArrow} alt="" className="home-arrow-img" />
          <p className="main-font default-padding" style={{ color: "white" }}>
            Home
          </p>
        </div>
        <div className="login-container">
          <div className="grid">
            <div className="form-login">
              <input
                id="email"
                type="text"
                placeholder="email address"
                data-listener-added_26d40521="true"
                onChange={userInput}
              />
              <p className="worning message">{emialVali}</p>
              <input
                id="password"
                type="password"
                placeholder="password"
                onChange={userInput}
              />
              <p className="worning message">{passwordVali}</p>
              <button onClick={singin}>login</button>
              <p className="message">
                Not registered? <a href="/user/signup">Create an account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
