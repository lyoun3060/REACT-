import React, { useContext } from "react";
import TestContext from "./TestContext";
import TestContext2 from "./TestContext2";

const TestUser = () => {
  const age = useContext(TestContext);
  const name = useContext(TestContext2);
  console.log("name", name);
  console.log("age", age);
  return (
    <div>
      <header>
        <p>
          안녕 {name}님의 나이는 {age}입니다.
        </p>
      </header>
    </div>
  );
};

export default TestUser;
