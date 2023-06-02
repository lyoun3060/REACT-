import React from "react";
import FancyBorder from "./FancyBorder";

const WelcomeDialog = (props) => {
  return (
    <div>
      {/* FancyBorder의 child는 <h1>,<p>를 말함 */}
      <FancyBorder color="blue">
        {/* <h1>태그의 child는 어서오숑 임 */}
        <h1 className="Dialog-title">어셔오숑</h1>
        <p className="Dialog-message">우리사이트 방문을 환영하셩</p>
      </FancyBorder>
    </div>
  );
};

export default WelcomeDialog;
