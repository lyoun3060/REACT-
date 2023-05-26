//비구조화 할당부분, 디폴트 props부분, propTypes
// import React from 'react';
// import PropTypes from 'prop-types'
// rsc-> 함수형 컴포넌트 자동스니펫
// rcc -> 클래스형 컴포넌트 자동 스니펫

// const MyTest1 = ({name,number, children}) => {
//   return (
//   <div>
//     이름은 : {name}입니다 </br>
//     children 값 : {children}</br>
//     좋아하는 숫자 : {number}
//   </div>
//   )
// };

// MyTest1.defaultProps = {
//     name:'기본이름'
// };

// //props 타입 지정 및 설정을 안했을시 에러체크
// MyTest1.PropTypes ={
//     name : PropTypes.string,
//     number : PropTypes.number.isRequired
// };
// export default MyTest1;

import React, { Component } from "react";
import PropTypes from "prop-types";

class MyTest1 extends Component {
  render() {
    //비구조화 할당.this.props는 객체 => 수납도구, 여기에는 여러가지의 속성이 있음
    const { name, number, children } = this.props;
    //ex) this.props.name
    //ex) this.props.number
    //ex) this.props.children
    return (
      <div>
        이름은 : {name}입니다.
        <br>children 값 : {children}</br>
        좋아하는 숫자 : {number}
      </div>
    );
  }
}

MyTest1.defaultProps = {
  name: "기본이름",
};

//props 타입 지정및, 설정을 안했을시 에러 체크.
MyTest1.PropTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
};

export default MyTest1;
