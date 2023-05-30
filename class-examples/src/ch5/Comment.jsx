//Comment.jsx
import React from "react";
import logo from "./rat.jpg";
import Avartar from "./Avartar";

const styles = {
  wrapper: {
    margin: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    boderRadius: 25,
  },
  contentContainer: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 18,
  },
};
//자식
const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnFUycFr3ykvWaWp67PYuh-2QVb5xW_Cf17ii7mJ6iQ&s"
          alt="라바"
          style={styles.image}
        /> */}
        {/* <img src={logo} alt="로컬사진" style={styles.image} /> */}
        <Avartar src={logo} alt="사진1" style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>김수장</span>
        <span style={styles.commentText}>test 컴포넌트 </span>
      </div>
    </div>
  );
};

export default Comment;
