import React from "react";

const FancyBorder = (props) => {
  return (
    <div className={"FancyBorder FacnyBorder-" + props.color}>
      {props.children}
    </div>
  );
};

export default FancyBorder;
