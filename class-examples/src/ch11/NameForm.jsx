import React, { useState } from "react";

const NameForm = (props) => {
  //   const [value, setValue] = useState("");

  //textarea(3교시)
  //const [textAreaValue, setTextAreaValue] = useState("");

  //select(3교시)
  const [selectValue, setSelectValue] = useState("닭계장");

  const handleChange = (event) => {
    setSelectValue(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    // alert("입력한 이름 : " + value);
    // alert("입력한 값 : " + textAreaValue);
    alert("선택한 점심메뉴 : " + selectValue);

    //자바스크립트상 기본로직, submit제출, 서버로 넘길때 사용
    // (submit버튼을 눌렀을때)기본기능을 못하게 방지
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {/* 이름 : <input type="text" value={value} onChange={handleChange} /> */}
        {/* 요청사항 :
        <textarea cols={100} value={textAreaValue} onChange={handleChange} /> */}
        점심메뉴 고르기 :
        <select value={selectValue} onChange={handleChange}>
          <option value={"koreanFood1"}>돼지국밥</option>
          <option value={"koreanFood2"}>피자</option>
          <option value={"koreanFood3"}>햄버거</option>
          <option value={"koreanFood4"}>짜장면</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default NameForm;
