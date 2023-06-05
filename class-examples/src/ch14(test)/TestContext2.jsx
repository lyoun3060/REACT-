import React from "react";

//순서1(컨텍스트 객체 설정)
//이름, 기본값은 nukll
const TestContext2 = React.createContext(null);
TestContext2.displayName = "context2";

export default TestContext2;
