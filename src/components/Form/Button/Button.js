import React from "react";
import "./style.scss";

function Button({ text = "Submit", disabled = true, onPress = () => {} }) {
  return (
    <div
      className={`button ${disabled && "button-disabled"}`}
      onClick={() => {
        if (!disabled) {
          onPress();
        }
      }}
    >
      {text}
    </div>
  );
}

export default Button;
