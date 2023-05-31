import React, { useState, useEffect } from "react";
import Counter from "./Counter";

const MAX_CAPACITY = 10;

function Acc(props) {
  const [isFull, SetIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = Counter(0);

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
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}
export default Acc;
