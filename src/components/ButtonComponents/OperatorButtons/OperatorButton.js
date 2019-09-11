import React from "react";

const OperatorButton = (props) => {
  return (
    <div className = "button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.char}</button>
    </div>
  );
};

export default OperatorButton;