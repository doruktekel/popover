import React from "react";
import "./index.scss";
import { useState } from "react";

const Popover = ({ buttonText, text }) => {
  const [isVisible, setisVisible] = useState(false);

  const show = () => {
    setisVisible((prevState) => !prevState);
  };

  const notall = () => {
    setisVisible(false);
  };

  return (
    <div className="popover">
      <button className="popover-btn" onClick={show} onBlur={notall}>
        {buttonText}
      </button>
      {isVisible && <div className="popover-text"> {text} </div>}
    </div>
  );
};

export default Popover;
