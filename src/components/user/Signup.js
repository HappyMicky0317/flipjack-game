import "../../assets/css/user/login.css";

import { API } from "../../constants";

import React, { useState } from "react";
import axios from "axios";

import rightArrow from "../../assets/img/right-arrow.png";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emialVali, setEmailVali] = useState("");
  const [passwordVali, setPasswordVali] = useState("");
  const [nameVali, setNameVali] = useState("");

  const goHome = () => {
    window.location.href = "/";
  };

  const validateEmail = (email) => {
    // Regular expression to validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const singup = async () => {
    if (name === "") {
      setNameVali("Input your name");
      return;
    }
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
      const response = await axios.post(`${API}/api/users/signup`, {
        name: name,
        email: email,
        password: password,
      });
      var data = response.data;
      if (data.success === false) {
        alert(data.msg);
      } else {
        if(data.msg) {
          setEmailVali(data.msg);
        } else {   
          var time = Date.now();
          localStorage.setItem("time", time);       
          localStorage.setItem("name", data.name);
          localStorage.setItem("email", data.email);
          window.location.href = "/dice";
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userInput = (e) => {
    if (e.target.id === "name") {
      if (e.target.value !== "") setNameVali("");
      setName(e.target.value);
    } else if (e.target.id === "email") {
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
                id="name"
                type="text"
                placeholder="name"
                data-listener-added_26d40521="true"
                onChange={userInput}
              />
              <p className="worning message">{nameVali}</p>
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
              <button onClick={singup}>Sign Up</button>
              <p className="message">
                Already registered? <a href="/user/signin">Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
