import React from "react";
import TestContext from "./TestContext";
import TestContext2 from "./TestContext2";
import TestUser from "./TestUser";

//적용 순서2(provider 적용)
const Main = () => {
  return (
    <TestContext.Provider value="30">
      <TestContext2.Provider value="김수장">
        <div>
          <TestUser />
        </div>
      </TestContext2.Provider>
    </TestContext.Provider>
  );
};

export default Main;
