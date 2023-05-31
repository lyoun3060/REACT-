//Counter.jsx(rsc)
import React, { useState, useEffect } from "react";

//props : 데이터전달, 무조건 부모->자식
//부모 -> 자식계층(자식1의 부모) ->자식1(자식2의 부모)-> 자식2
// 한번에 부모에서 자식2로는 데이터전달 불가(순차적으로 해야 함)
const Counter = (props) => {
  const [count, setCount] = useState(0);

  // 클래스형 컴포넌트에서는 바로 생명주기를 확인가능함
  // 함수형 컴포넌트에서는 바로 사용은 불가
  // 대신에 Hooks의 useEffect를 사용하면 가능(생명주기 기능 구현)
  //useEffect(이펙트함수, 의존성 배열)
  //의존성 배열 = 1) 아무것도 없음 ->매번 업데이트 / 2)[](빈배열) -> 최초1회 / 3)[변수]->해당변수 변경시 매번
  //(useEffect 방법1 - 빈배열)
  // useEffect(()=>{
  //     document.title = `총 ${count}번 클릭했습니다.`
  //   })

  const exFunc = () => {
    document.title = `총 ${count}번 클릭했습니다.`;
  };

  //(useEffect 방법2 - 의존성 배열 없어서 매번 업데이트 될때마다  exFunc호출)
  useEffect(exFunc);

  //(useEffect 방법3 - 빈배열)
  useEffect(exFunc, []);

  //(useEffect 방법4 - [변수])
  useEffect(exFunc, [count]);

  //배열이 없는경우 vs 배열에 변수값이 변경시 업데이트
  // 1)배열이 없는 경우 : count라는 변수가 변경외에도, ps부강인 경우에도 exFunc 무조건 호출
  // 2)배열에 변수값이 변경시 업데이트-> count가 변경될때만 exFunc호출

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Counter;
