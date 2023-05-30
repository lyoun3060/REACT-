//Noti.jsx
//자식컴퍼넌트로 사용할 예정
//부모컴퍼넌트는 해당 Noti(목록요소)의 List로 만들것
//css요소를 설정하거나, scss, sass관련내용이 있는데, 15장에서 설명예정
//지금은 해당 클래스 컴퍼넌트, 함수형 컴퍼넌트 해당파일안에 css를 같이 작업할것임 -> 정석으로 하려한다면 css는 파일을 분리해야함

//순서1) css구성
//예제는 class컴퍼넌트임(rcc사용)
import React, { Component } from "react";

//style타입 -> 객체 -> 리터럴 타입으로 객체 선언하는 방식
//변수 선언할때 타입의 기본은 const
//만약 변경이 되는 값은 let사용(브)
const styles = {
  // 요소의 바깥부분의 스타일
  wrapper: {
    margin: 8,
    padding: 8,
    // CSS의 속성으로, 요소를 유연한 박스 모델로 설정하여 그 안에 있는 자식 요소들을 가로로 또는 세로로 배치할 수 있도록 도와줌
    display: "flex",
    // 기본  flex옵션은 row,  가로방향 배치(안드로이드 리니어 레이아웃과 비슷)
    flexDirection: "row",
    border: "1px solid gray",
    //원래 해당 css요소의 속성을 나타낼 때, border-radius로 적어야 하나, 리액트 jsx요소에서는 -를 카멜표기법을 적용해서 적음
    borderRadius: 16,
  },

  //특정 메세지 창의 스타일
  messageText: {
    color: "green",
    //여기서도 원래는 font-size로 적어야하나 위의 이유와 동일
    fontSize: 28,
  },
};

class Noti extends Component {
  //클래스 컴퍼넌트는 반드시 부모의 Component를 상속받아서 사용해야함
  //해당 state를 사용하려면 super를 호출해야함(의무사항) = 초기화gksmsrjt
  constructor(props) {
    //state를 사용시 마치 세트처럼 이용됨(아래의 두문장)
    //클래스 컴포넌트에서는 해당 state상태에 접근시, this.state로 접근
    super(props);
    this.state = {};
  }

  //자식 부분에서 각 생명주기 함수들 콘솔로 찍어서 확인해보기.
  componentDidMount() {
    console.log("componentDidMount() 호출이 되었음.");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() 호출이 되었음.");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount() 호출이 되었음.");
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Noti;
