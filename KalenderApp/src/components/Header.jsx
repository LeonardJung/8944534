import React from "react";
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={showAdd ? "blue" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
