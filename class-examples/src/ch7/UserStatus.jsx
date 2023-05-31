// UserStatus.jsx
import React, { useState, useEffect } from "react";

const UserStatus = (props) => {
  //온라인 여부를 상태로 확인하는 작업
  const [isOnline, setIsOnline] = useState(null);

  function handleStatueChange(status) {
    setIsOnline(status.isOnline);
  }

  const exFunc2 = () => {
    //ServerAPI.subscribeUserStatus(props.id.handleStatueChange);

    //return 문은 언마운트 같은 효과를 줌 = 언마운트 될때 호출됨
    return () => {
      //ServerAPI.unsubscribeUserStatus(props.id.handleStatueChange);
    };
  };

  //이펙트 함수만 들어가 있고, 의존성 배열은 X = 매번 exFunc2가 호출
  useEffect(exFunc2);

  if (isOnline === null) {
    return "대기중...";
  }

  return isOnline ? "온라인" : "오프라인";
};

export default UserStatus;
