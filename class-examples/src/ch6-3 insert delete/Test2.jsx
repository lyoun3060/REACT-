import React, { useState } from "react";

const Test2 = () => {
  const [names, setNames] = useState([
    { id: 1, name: "김수장1", message: "체크1" },
    { id: 2, name: "김수장2", message: "체크2" },
    { id: 3, name: "김수장3", message: "체크3" },
    { id: 4, name: "김수장4", message: "체크4" },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputName(e.target.value);
  console.log(inputName);
  const onChange2 = (e) => setInputMessage(e.target.value);
  console.log(inputMessage);

  const onClick = () => {
    if (inputName === "" || inputMessage === "") {
      alert("Please fill in all fields");
    } else {
      const nextNames = names.concat({
        id: nextId,
        name: inputName,
        message: inputMessage,
      });
      setNextId(nextId + 1);
      setNames(nextNames);
      setInputName("");
      setInputMessage("");
    }
  };

  const nameList = names.map((check) => (
    <li key={check.id}>
      {check.name}
      <br />
      {check.message}
    </li>
  ));

  return (
    <>
      <input value={inputName} onChange={onChange} />
      <input value={inputMessage} onChange={onChange2} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default Test2;
