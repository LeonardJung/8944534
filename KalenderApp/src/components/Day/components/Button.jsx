import React from "react";

const Button = ({ color, text, onClick }) => {
  // Render the button with the specified color, text, and click handler.
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

// Set default props for color and text.
Button.defaultProps = {
  color: "steelblue",
  text: "Button",
};

export default Button;
