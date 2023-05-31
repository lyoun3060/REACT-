//BeforeUseCallback.jsx
//사용전 문제점 제시

import React, { useState } from "react";

//집합으로 사용할 함수(집합은 중복안됨)
const test = new Set();

const BeforeUseCallback = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const printLog = () => {
    console.log("재실행되는 printLog 함수");
  };

  test.add(printLog);
  console.log(test);

  return (
    <div>
      <p>count의 값 : {count}</p>
      <button onClick={increase}>+1 추가하기</button>
      <button onClick={printLog}>출력</button>
    </div>
  );
};

export default BeforeUseCallback;
