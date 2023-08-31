import React, { useEffect } from "react";

const Modal = (props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const hideDiv = document.getElementById("hideDiv");
      if (hideDiv) {
        hideDiv.style.opacity = 0;
        setTimeout(() => {
          hideDiv.style.display = "none";
        }, 1500);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const divStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "30px",
    background: "#f12d2d",
    width: "400px",
    margin: "0 auto",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <div id="hideDiv" style={divStyle}>
      {props.msg}
    </div>
  );
};

export default Modal;
