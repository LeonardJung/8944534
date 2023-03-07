import React from "react";
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  // Render the header with the app title and an "Add" or "Close" button.
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        // color and Text of the button depends on the value of showAdd prop.
        color={showAdd ? "blue" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
