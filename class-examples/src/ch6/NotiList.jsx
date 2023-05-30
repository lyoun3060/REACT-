//NotiList.jsx = (Noti.jsx의 부모컴포넌트)

//rcc 자동클래스형 컴포넌트 생성
import React, { Component } from "react";
import Noti from "./Noti";

// 임시더미데이터를 배열(요소는 객체를가지는 배열) 만들기
//리스트에서 요소를 렌더링 시, 해당 키 값을 설정안하면 오류가 뜸(실행은 됨)
//그리고 리스트에서 키를 설정하면 속도가 더 빨라짐
const reserveNoti = [
  { id: 1, message: "메시지1" },
  { id: 2, message: "메시지2" },
  { id: 3, message: "메시지3" },
];

//클래스 내부에 전역처럼 사용하기 위해서 var사용
var timer;
//클래스형 컴퍼넌트, 기본, 컴퍼넌트 상속
//constructor, super를 사용함 ->이유는 props및 state를 사용하기 위해
class NotiList extends Component {
  constructor(props) {
    super(props);
    //상태변화가 , noti라는 배열이 변화하면, 업데이트가 발생함(noti가 부모)/noti(부모)가 변화하면 자식(Noti)도 변화해야함
    //업데이트가 발생한다. 즉 다시그린다.
    this.state = {
      //noti -> 빈 배열
      noti: [],
    };
  }

  //생명주기 확인 마운트, 업데이트, 언마운트
  // componentDidMount 확인. 마운트가되고(화면에 그려지고) 후 , 호출되는 메서드,
  componentDidMount() {
    // 비구조화 할당으로 -> this.state.noti 표현을 하면.
    const { noti } = this.state;
    //setInterval 매개변수가 2개있음. 첫번째 콜백함수, 두번째, 특정시간단위(ms).
    // 1000 ms -> 1초
    // 특정 시간 후에 , 콜백 함수를 호출 하는 역할.
    //  화살표 함수로 정의 가 되었음
    timer = setInterval(() => {
      // noti 라는 빈배열이 기존의 예약된 배열의 길이보다 작으면
      // 무조건 실행.
      if (noti.length < reserveNoti.length) {
        // 현재 index 는 noti의 빈배열의 길이 : 0
        const index = noti.length;
        // noti 배열의 내장 함수 push(=add) 추가.
        // 빈 배열 noti에 구성요소로 예약된 더미 데이터(3개)
        // noti = [{ message: "메세지1" }]
        noti.push(reserveNoti[index]);
        //noti 는 배열에 요소가 추가되었음.
        this.setState({
          // p,s,부, 강 -> 업데이트가 발생. -> 다시 그려진다. -> 부모-> 자식 새로 그린다.
          // 빈 배열에 , 요소가 하나가 추가된 배열이 재할당.
          noti: noti,
        });
      } else {
        // noti라는 빈배열에 요소를 3개 까지 추가 가능, 그 3개 초과 되면
        // 이 함수가 호출.
        // timer : setInterval  함수.
        // clearInterval(timer);

        //componentWillUnmount 콘솔에 띄우기 위해서, 해당 데이터를 비워 주는 작업.
        // 데이터가 비워지면, 해당 컴포넌트가 그릴게 없어서,  사라진다.
        // 소멸 하기 전에 위에 메서드가 호출이 됨. componentWillUnmount()
        this.setState({
          //처음에 noti 빈 배열 -> 요소를 3개 추가하고 -> 3개 초과이면, 배열을 비우기. -> 빈 배열 할당.
          noti: [],
        });
      }
    }, 1000);
  }

  //그리기
  //jsx -> createElement(요소, props, child)로 대체해서 적을수 있으나, jsx가 더 편함(가독성)
  render() {
    return (
      <div>
        {/* map함수는 배열의 내장함수 */}
        {/* 배열의 요소를 하나씩 꺼내어서, 특정작업을 수행 후, 새로운 배열을 생성하는 함수 */}
        {/* 예를들어 noti: 빈배열, -> 배열에 요소를 추가(push), 객체요소로 (message)를 추가 */}
        {/* noti=[{ message: "메시지1" },{ message: "메시지2" },{ message: "메시지3" }] 이렇게 3개가 들어감*/}
        {/* 다시말해 위의 noti배열에서 하나씩 꺼내어서 특정 작업을 수행 */}

        {/* 부모에서 자식으로 props설정, 여기에서 해당 욧에 대한 키값을 설정 */}
        {/* 현재 props로 요소 message만 있는데, 추가로 키도 같이 설정 / id도 같이설정(id를 키요소의 값으로 사용될 예정) */}
        {this.state.noti.map((noti) => {
          return <Noti key={noti.id} id={noti.id} message={noti.message} />;
        })}
      </div>
    );
  }
}

export default NotiList;
