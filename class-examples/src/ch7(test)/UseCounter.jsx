import React, { useState } from "react";

const UseCounter = (props) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  // return (
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={increase}>증가버튼</button>
  //     <button onClick={decrease}>감소버튼</button>
  //   </div>
  // );
  return [count, increase, decrease];
};

export default UseCounter;
