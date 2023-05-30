//간단히 데이터 추가 및 삭제 연습
//내장함수의 응용예제
//useState활용 및 연습.

import React, { useState } from "react";

//함수형 컴포넌트라서, 클래스 형 컴포넌트처럼, 상속, 생성자, 슈퍼라는 부분이 없음
//클래스형 컴포넌트에서만 생명주기 관련 함수가 있었는데,
//16.8버전 이후로 부터는 hooks라는 개념이 도입되어서 클래스에서 할수 없던 작업을 함수형 컴포넌트에서도 가능하게됨
//hooks 이후로는 거의 함수형으로만 연습할 예정
const TestSample = () => {
  //비구조화 할당방식으로, useState가 함수 실행후, 반환값은
  //1)변수값, 2)세터함수반환
  //반환형식은 배열형식[1), 2)]
  //names에는 데이터가 배열이 들어가 있음(더미 데이터 4개 들어가 있음)
  const [names, setNames] = useState([
    { id: 1, text: "김수장1" },
    { id: 2, text: "김수장2" },
    { id: 3, text: "김수장3" },
    { id: 4, text: "김수장4" },
  ]);

  //inputText: 입력창의 의미, 초기값 공백, 여기에 세터함수
  const [inputText, setInputText] = useState("");
  //nextId더미 데이터의  아이디가 현재 4번까지 되어 있고, 추가 데이터 부터 아이디가 5를 추가
  const [nextId, setNextId] = useState(5);

  //입력창에 값이 변경될시, 콘솔상에 변경사항 확인해보기
  const onChange = (e) => setInputText(e.target.value);
  //콘솔확인
  console.log(inputText);

  //추가부분(데이터 추가)
  const onClick = () => {
    //기존 더미 데이터 배열에, 입력창에서 입력된 메세지와, 아이디를 추가하는 부분.
    //기존 배열에, 특정 값을 추가해서 새롭게 배열 생성하는 방법
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    //입력 후, 값 비워주기
    setInputText("");
  };

  //추가 부분2 : 데이터 삭제. 더블 클릭시
  //예) id = 3인경우, 배열에서 id가 3인것만 제외하고 새로운 배열을 생성
  //즉 id의 값이 1~4까지만 있으면 그중에서 3만 제외하고 다시배열 생성하는것
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    //onDoubleClick가 되면 =>부분의 함수 실행됨
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  //names라는 배열에 요소중에서 하나를 꺼낸 요소가 name이라고 보면 됨
  //names의 길이 : 4 => 4번 수행함
  //수행결과는 => li라는 태그의 요소로 넣고있음(li에 키값 벨류값으로 들어가고있음)
  //   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

  //원래는 <div>라고 명시해야히자만, 생략시 <Fragment>생략가능 ->대신해서 <>로 표기가능
  return (
    <>
      {/* 실제로 화면을 그리면서, 위에서 작업한 변수 및  함수가 적용되는  부분 */}
      {/* 단점은  메모리상에서 작업중이라, 따로 지정한 저장소가 없기때문에 추가되도 일시적인것임(새로고침하면 사라짐) */}
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default TestSample;
