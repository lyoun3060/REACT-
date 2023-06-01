import React, { useState } from "react";

const NameForm = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    alert("입력한 이름 : " + value);
    //자바스크립트상 기본로직, submit제출, 서버로 넘길때 사용
    // (submit버튼을 눌렀을때)기본기능을 못하게 방지
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 : <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default NameForm;
