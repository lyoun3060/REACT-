//TestAfter.jsx
//useMemo를 이용해서,  오래 걸리는 연산 값은 한번 수행 후, 메모했다가. 재사용하고.
// 만약, 오래 걸리는 연산 값이 변경이 될 때에만, 수행을 하자.
//순서1
import React, { useState, useMemo } from "react";

const TestAfter = () => {
  // 변경되지 않는 값 예시
  const [imNum, setImNum] = useState(0);
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log("click 추가 버튼");
    setCount(count + 1);
  };

  // 오래 걸리는 연산 작업 예시
  //useMemo적용 ->useMemo(함수, 의존성배열)
  //(결론) -> 처음 한번에만 실행됨 / 의존성 배열안에 변수, imNum가 변경시에만 함수가 다시 호출되어 실행됨
  //useMemo 사용전에는 calcComValue는 함수이지만
  //useMemo 사용후에는 calcComValue는 단순한 값
  const calcComValue = useMemo(() => {
    console.log("복잡한 계산 중.....");
    return (imNum + 3 * 7 * 999999999 * 999999999) / 0.123456;
  }, [imNum]);

  return (
    <div className="App">
      <p>count: {count}</p>
      <button onClick={increase}>+1 추가</button>
      {/* calcComValue는 결과값 적용부분으로 해야함 */}
      <p>복잡한 연산 결괏값 : {calcComValue}</p>
    </div>
  );
};

export default TestAfter;
