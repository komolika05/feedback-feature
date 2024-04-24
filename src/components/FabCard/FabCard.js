import React from "react";
import "./style.scss";
import Button from "../Form/Button/Button";

function FabCard({ formDetails }) {
  return (
    <div className="fab-card-container">
      <div className="heading">{formDetails.title}</div>
      <div className="content">
        {formDetails.inputs}
        <Button />
      </div>
    </div>
  );
}

export default FabCard;
