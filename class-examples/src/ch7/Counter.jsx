//Counter.jsx(rsc)
import React, { useState } from "react";

//props : 데이터전달, 무조건 부모->자식
//부모 -> 자식계층(자식1의 부모) ->자식1(자식2의 부모)-> 자식2
// 한번에 부모에서 자식2로는 데이터전달 불가(순차적으로 해야 함)
const Counter = (props) => {
  const [count, setCount] = useState(0);

  // 클래스형 컴포넌트에서는 바로 생명주기를 확인가능함
  // 함수형 컴포넌트에서는 바로 사용은 불가
  // 대신에 Hooks의 useEffect를 사용하면 가능

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Counter;
