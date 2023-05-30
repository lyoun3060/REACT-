import React from 'react';
//문제점 1) => react-dom/client 하위에는 dom이라는게 없음
//react-dom으로 고쳐주자
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//문제점2) => 해당 함수형 컴포넌트 이름 첫글자는 대문자로 적혀야함
// import Tick from './ch4/Tick';
// import MyTest1 from './ch4/MyTest1';
// import CommentList from './ch5/CommentList';
import MenuItemList from './ch6/MenuItemList';

//setInterval(콜백함수, 시간(ms)) = 특정시간마다, 첫번째 매개변수에서 정의한 함수가 실행됨
// setInterval( ()=> {
  //ReactDOM.render(그려지는 요소, 어디밑에 그릴건지)
  //render ->리엑트에서 사용하는 용어로서 시각적으로 변화를 시켜주는거라고 생각하면됨
  // ReactDOM.render(
    //<React.StrictMode>는 React 애플리케이션 내에서 개발 모드에서 추가적인 검사와 경고를 활성화하는 데 사용되는 컴포넌트
    //개발할때만 사용하는거고, 실제로는 사용하면 X
    // <React.StrictMode>    
//{/* <Tick/> */}
  //  {/* <MyTest1 name="김수장" number={20} >
    //  child영역입니다.
    //</MyTest1> */}
    
  // </React.StrictMode>,
//   document.getElementById('root')
//   )
// }, 1000
// );
ReactDOM.render(
  <React.StrictMode>
    {/* 부모 컴퍼넌트 */}
    <MenuItemList/>
  </React.StrictMode>,
  document.getElementById('root')
)
//(활용법2)
// const test = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//     <Tick/>
//   </React.StrictMode>,
//   document.getElementById('root')
//   );
// }
// setInterval(test , 1000);
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
