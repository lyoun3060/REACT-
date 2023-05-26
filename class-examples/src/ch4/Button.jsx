import React from "react";
//Button.jsx
//함수형 컴포넌트인데, 기놎에 사요

function Button(props) {
  return (
    //classname속성을 JSX문법에서는 카멜표기법으로 표시함
    <button className={`bg-${props.color}`}>
      <b>{props.children}</b>
    </button>
  );
}
export default Button;
