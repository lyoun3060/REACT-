import React from "react";
import Card from "./Card";

const ProfileCard = (props) => {
  return (
    <div>
      <Card title="Sam Kim" backgroundColor="yellow">
        <p>안녕하세요, 샘 킴입니다.</p>
        <p>저는 초보개발자 입니다.</p>
      </Card>
    </div>
  );
};

export default ProfileCard;
