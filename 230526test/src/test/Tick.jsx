import React from "react";

const Tick = (props) => {
  return (
    <div>
      <h1>
        "오늘할 일중 하나는 {props.play}을/를 하고 {props.money}원을 가지고
        갈것이다."
      </h1>
      <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default Tick;
