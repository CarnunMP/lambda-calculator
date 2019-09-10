import React from "react";

const SpecialButton = (props) => {
  return (
    <div className = "button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.data}</button>
    </div>
  );
};

export default SpecialButton;