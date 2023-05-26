import React from "react";
// import logo from "./rat.jpg";

const Avartar = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} style={props.style} />
    </div>
  );
};

export default Avartar;
