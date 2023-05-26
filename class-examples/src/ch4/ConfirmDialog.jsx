//ConfirmDialog.jsx
//Reactjs code snipchet을 이용해서
//단축키처럼 rsc입력하면
import React from "react";
import Button from "./Button";

//여기서 사용한 props는 confirmdialog도 하나의 블록이기때문에 자식으로서 부모 상속받을때를 위해 적은것
const ConfirmDialog = (props) => {
  return (
    <div>
      <p>내용확인</p>
      <Button color="green">확인</Button>
      <Button color="red">확인</Button>
    </div>
  );
};

export default ConfirmDialog;
