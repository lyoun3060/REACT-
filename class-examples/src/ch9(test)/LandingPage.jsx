import React, { useState } from "react";
import Toolbar from "./Toolbar";

const LandingPage = (props) => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    SetIsLoggedIn(true);
  };

  const onClickLogout = () => {
    SetIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부</div>
    </div>
  );
};

export default LandingPage;
