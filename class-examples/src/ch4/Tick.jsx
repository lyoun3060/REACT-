import React from "react";

//화살표 함수 = 익명함수, 자체적으로 쓰기는 힘들고 변수에 할당해서 사용한다.
const Tick = (props) => {
  return (
    <div>
      <h1>안뇽, 리액트</h1>
      <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
    </div> //화살표 함수 = 익명함수, 자체적으로 쓰기는 힘들고 변수에 할당해서 사용한다.
  );
};
export default Tick;
