import React, { Component } from "react";

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

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

export default MenuItem;
