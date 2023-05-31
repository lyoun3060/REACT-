import React, { useState, useEffect } from "react";
import UseCounter from "./UseCounter";

const MAX_CAPACITY = 10;

const Accommodate = (props) => {
  const [isFull, SetIsFull] = useState(false);
  const [count, increase, decrease] = UseCounter(0);

  useEffect(() => {
    console.log("=============");
    console.log("useEffect() is called");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    SetIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>총 {count}명 수용했습니다.</p>
      <button onClick={increase} disabled={isFull}>
        입장
      </button>
      <button onClick={decrease}>퇴장</button>
      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
};

export default Accommodate;
