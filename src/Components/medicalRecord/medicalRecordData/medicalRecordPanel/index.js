import React from "react";
import "./index.css";
import Dot from "./dot";

function MedicalPanel() {
  return (
    <div className="panel-content">
      <div className="panel-row">
        <span className="panel-col">
          <Dot color="#FF0000" />
          Before BreakFast
        </span>

        <span className="panel-col">
          <Dot color="#FFFFFF" />
          After BreakFast
        </span>
      </div>
      <div className="panel-row">
        <span className="panel-col">
          <Dot color="#01F219" />
          Before Lunch
        </span>

        <span className="panel-col">
          <Dot color="#01F219" />
          After Lunch
        </span>
      </div>
      <div className="panel-row">
        <span className="panel-col">
          <Dot color="#FF0000" />
          Before Dinner
        </span>

        <span className="panel-col">
          <Dot color="#FFFFFF" />
          After Dinner
        </span>
      </div>
    </div>
  );
}

export default MedicalPanel;
