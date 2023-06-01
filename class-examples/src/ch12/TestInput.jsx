import React, { useState } from "react";
const sNames = {
  c: "섭씨",
  f: "화씨",
};
//입력 하는 온도, 섭씨, 화씨 부분을 구분짓고,
// props 로 전달해서 사용.
// 공유 state 해서,
// 부모 : Calc , ->(props) 자식 : TestInput
const TestInput = (props) => {
  const [temp, setTemp] = useState("");

  const handleChange = (event) => {
    // 호출 되면서 -> 업데이트
    setTemp(event.target.value);
  };

  return (
    <div>
      <fieldset>
        <legend>온도를 입력하세요: (단위:{sNames[props.scale]})</legend>
        <input value={temp} onChange={handleChange} />
        {/* 위에 끊는 부분에 알림 메세지 컴포넌트에 해당 props 로 celsius 값을 전달은
            온도 타입 문자열 -> 실수 변경. */}
      </fieldset>
    </div>
  );
};

export default TestInput;
