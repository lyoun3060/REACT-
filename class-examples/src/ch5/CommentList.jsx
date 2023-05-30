//CommentList.jsx
import React from "react";
import Comment from "./Comment";
//부모
const CommentList = (props) => {
  return (
    <div>
      {/* 업데이트 -> render ->다시그린다 */}
      {/* 다시그리는 경우를 업데이트라고함 */}
      {/* 업데이트 조건 = p / s / 부 / 강  = {1) props / 2) state / 3) 부모가 업데이트 될 경우 / 4) 강제로 업데이트 } */}
      {/* 자식 컴포넌트에 props로 데이터를 전달함 */}
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentList;
