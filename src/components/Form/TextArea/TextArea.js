import React from "react";
import "./style.scss";

function TextArea({ label, onChangeText = () => {}, isMandatory, value = "" }) {
  return (
    <div className="textarea-container">
      <span className="label">
        {label} {isMandatory ? <span className="mandatory">*</span> : ""}
      </span>
      <textarea
        className="textarea-input"
        rows="4"
        cols="50"
        placeholder="Write here..."
        onChange={(event) => onChangeText(event.target.value)}
        value={value}
      />
    </div>
  );
}

export default TextArea;
