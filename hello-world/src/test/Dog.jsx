import React from 'react';

//함수형 컴포넌트
function Dog(props) {
  //props가 하는 역할,=>부모에서 설정했던 것들을 자식으로 던질때 props로 던짐, 전달 매개체
  return (
    //return의 괄호안에 쓰는 것 = jsx문법
    //jsx문법은 javascript and xml html
    <div>
      <h1>{`강아지1의 이름 :  ${props.name} `}</h1>
      <h2>{`강아지의 나이 :  ${props.age} `}</h2>
      {/* 이름을 부모로 부터 props로 받아와서  사용*/}
    </div>
  );
}
//외부에 노출을 시켜야, 다른 컴포넌트에서 임포트해서 사용가능
export default Dog;
