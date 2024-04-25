import React from "react";
import "./style.scss";

function TextInput({
  label,
  onChangeText,
  isMandatory,
  placeholder = "Enter your input",
}) {
  return (
    <div className="textinput-container">
      <span className="label">
        {label} {isMandatory ? <span className="mandatory">*</span> : ""}
      </span>
      <input className="input" rows="4" cols="50" placeholder={placeholder} onChange={(event) => onChangeText(event.target.value)} />
    </div>
  );
}

export default TextInput;
