import React from 'react';
//문제점 1) => react-dom/client 하위에는 dom이라는게 없음
//react-dom으로 고쳐주자
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from './ch15/MainPage';
// import Card from './ch13(test)/Card';
// import ProfileCard from './ch13(test)/ProfileCard';
// import Main from './ch14(test)/Main';
// import TestNullValue from './ch11/TestNullValue';
// import SignUp from './ch11(test)/SignUp';
// import FileImageTest from './ch11/FileImageTest';
// import Calc from './ch12/Calc';
// import WelcomeDialog from './ch13/WelcomeDialog';
// import AttendanceBook from './ch10(test)/AttendanceBook';
// import NameForm from './ch11/NameForm';
// import TextInputTest from './ch07-4(useRef)/TextInputTest';
//문제점2) => 해당 함수형 컴포넌트 이름 첫글자는 대문자로 적혀야함
// import Tick from './ch4/Tick';
// import MyTest1 from './ch4/MyTest1';
// import CommentList from './ch5/CommentList';
// import MenuItemList from './ch6/MenuItemList';
// import TestSample from './ch6-3 insert delete/TestSample';
// import Test2 from './ch6-3 insert delete/Test2';
// import Counter from './ch7/Counter';
// import TestBefore from './ch7-2/TestBefore';
// import TestAfter from './ch7-2(useMemo)/TestAfter';
// import BeforeUseCallback from './ch7-3(useCallback)/BeforeUseCallback';
// import AfterUseCallback from './ch7-3(useCallback)/AfterUseCallback';
// import Acc from './ch7(test)/Acc';
// import Accommodate from './ch7(test)/Accommodate';
// import Toggle from './ch8/Toggle';
// import LandingPage from './ch9(test)/LandingPage';

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
    {/* <MenuItemList/> */}
    {/* <TestSample/> */}
    {/* <Test2/> */}
    {/* <Counter/> */}
    {/* <TestAfter/> */}
    {/* <BeforeUseCallback/> */}
    {/* <AfterUseCallback/> */}
    {/* <TextInputTest/> */}
    {/* <UseCounter/> */}
    {/* <Accommodate/> */}
    {/* <Toggle/> */}
    {/* <LandingPage/> */}
    {/* <AttendanceBook/> */}
    {/* <FileImageTest/> */}
    {/* <SignUp/> */}
    {/* <Calc/> */}
    {/* <WelcomeDialog/> */}
    {/* <ProfileCard/> */}
    {/* <Main/> */}
    <MainPage/>
  </React.StrictMode>,
  document.getElementById('root')
)

//11장 input Null Value
// setTimeout(()=>{
//   ReactDOM.render(<input value={null}/>, document.getElementById('root'))
// },1000)

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
