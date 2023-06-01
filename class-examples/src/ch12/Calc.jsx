import React, { useState } from "react";
import TestInput from "./TestInput";

// 끊는 부분 알림 함수.
const BoilMessage = (props) => {
  if (props.celsius >= 100) {
    return <p>물이 끊어요.</p>;
  }
  return <p>물이 끊지 않아요.</p>;
};

//변화해주는 함수1
//화씨 -> 섭씨
const toCel = (fah) => {
  return ((fah - 32) * 5) / 9;
};

//변화해주는 함수2
//섭씨 -> 화씨
const toFah = (cel) => {
  return (cel * 9) / 5 + 32;
};

//컨버터 인자로 : 온도, 변화해주는 함수1,2
const tryCon = (temp, convert) => {
  //텍스트 인풋창, 숫자입력이 아님
  const input = parseFloat(temp);

  //문자열->실수(소수점표기)
  //Number.isNaN(input)= 입력받은 데이터가 숫자가 아니니?
  if (Number.isNaN(input)) {
    return "";
  }

  //convert : 위에서 정의한, 각각의 변환해주는 함수 2가지
  const output = convert(input);
  //반올림 작업
  const rounded = Math.round(output * 1000) / 1000;
  //숫자 -> 문자
  return rounded.toString();
};

const Calc = () => {
  const [temp, setTemp] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelChange = (temp) => {
    setTemp(temp);
    setScale("c");
  };

  const handleFahChange = (temp) => {
    setTemp(temp);
    setScale("f");
  };

  const celsius = scale === "f" ? tryCon(temp, toCel) : temp;
  const fahrenheit = scale === "c" ? tryCon(temp, toFah) : temp;

  return (
    //자식 props목록
    //1)onTempChange, 2)scale 3)temp
    <div>
      <TestInput scale="c" temp={celsius} onTempChange={handleCelChange} />
      <TestInput scale="f" temp={fahrenheit} onTempChange={handleFahChange} />
      <BoilMessage celsius={celsius} />
    </div>
  );
};

export default Calc;
