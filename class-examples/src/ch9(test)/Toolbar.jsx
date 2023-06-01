import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

const Toolbar = (props) => {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  // 위의식 일부분을 이렇게도 적을 수 있음
  //   const isLoggedIn = prpos.isLoggedIn;

  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>반갑습니다.</span>}

      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
};

export default Toolbar;
