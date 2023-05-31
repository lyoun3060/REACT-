import React, { useCallback, useState } from "react";

//집합으로 사용할 함수(집합은 중복안됨)
const test = new Set();

const AfterUseCallback = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  //useCallback(함수, 의존성배열) ->의존성 배열의 변수가 변경시에만, 함수가 재정의 됨
  //빈 배열 []->최초 1회만 <useCallback(함수)>에 함수 1회 호출
  //문제점 -> 추가 버튼을 클릭시, 함수 printLog가 계속 정의되기 됨(메모리를 계속 사용함)
  // ㄴ> 같은 기능의 함수이지만, 참조하는 메모리는 계속 다름, 그래서 집합(Set), 요소가 다르게 인식을해서 계속 추가가됨
  //해결책 : 함수를 한번만 정의를 하자
  const printLog = useCallback(() => {
    console.log("재실행되는 printLog 함수");
  }, []);

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

export default AfterUseCallback;
