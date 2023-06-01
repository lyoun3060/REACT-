import React, { useState } from "react";
import TestInput from "./TestInput";

// 끊는 부분 알림 함수.
const BoilMessage = (props) => {
  if (props.celsius >= 100) {
    return <p>물이 끊어요.</p>;
  }
  return <p>물이 끊지 않아요.</p>;
};

//화씨 -> 섭씨
const toCel = (fah) => {
  return ((fah - 32) * 5) / 9;
};

//섭씨 -> 화씨

const Calc = () => {
  return (
    <div>
      <TestInput scale="c" />
      <TestInput scale="f" />
    </div>
  );
};

export default Calc;
