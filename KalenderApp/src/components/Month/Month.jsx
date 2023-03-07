import React from "react";
import "./Month.css";

function Month() {
  return (
    <div className="topbar">
      <div className="columns">
        <div>{"<<"}</div>
        <div>{"<"}</div>
        <div className="col-span-3">August 2022</div>
        <div>{">"}</div>
        <div>{">>"}</div>
      </div>
    </div>
  );
}

export default Month;
