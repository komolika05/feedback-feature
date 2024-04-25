import React from "react";
import "./style.scss";

function FabButton({ iconUrl, onIconPress = () => {}, isActive = false }) {
  return (
    <div className={`fab-button-container`} onClick={onIconPress}>
      <img src={iconUrl} alt="icon" />
      {isActive ? <div className="fab-active"></div> : ""}
    </div>
  );
}

export default FabButton;
