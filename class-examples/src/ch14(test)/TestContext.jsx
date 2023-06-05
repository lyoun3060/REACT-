import React from "react";

//순서1(컨텍스트 객체 설정)
//나이
const TestContext = React.createContext(null);
TestContext.displayName = "context1";

export default TestContext;
