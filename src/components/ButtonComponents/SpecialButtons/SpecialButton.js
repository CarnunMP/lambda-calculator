import React from "react";

const SpecialButton = (props) => {
  console.log(props.data);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.data}</button>
    </>
  );
};

export default SpecialButton;