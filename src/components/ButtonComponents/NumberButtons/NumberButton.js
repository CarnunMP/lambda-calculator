import React from "react";

const NumberButton = (props) => {
  return (
    <div className = "button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.data}</button>
    </div>
  );
};

export default NumberButton;