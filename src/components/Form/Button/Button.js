import React from "react";
import "./style.scss";

function Button({ text = "Submit" }) {
  return <div className="button">{text}</div>;
}

export default Button;
