import React from 'react';

//현재 작업하는 것은 임시로 함수형 컴포넌트 2개를 생성해서, JSX문법으로 간단히 구현하는 작업
//자바로 치면 HELLO WORLD치는것과 비슷하다고 생각하면됨
//클래스 컴퍼넌트 형식도 간단히 봐두어야함(구버전/ 보험성으로)  - 구작업들은 클래스 컴퍼넌트를 사용한 경우가 많음
//기작업들은 거의다 함수형 컴포넌트를 사용(권장)

//book이라는 함수형 컴포넌트
function Book(props) {
  return (
    //jsx문법 사용
    <div>
      <h1>{`책이름 : ${props.name} 입니다.}`}</h1>
      <h2>{`총 페이지 : ${props.numOfPage} 입니다.`}</h2>
    </div>
  );
}
export default Book;
