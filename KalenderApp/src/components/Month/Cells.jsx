import React from "react";

//render a button with a border around it
function Cells({ children }) {
  return <button className="border">{children}</button>;
}

export default Cells;
