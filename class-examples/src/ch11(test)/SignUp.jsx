import React, { useState, useRef } from "react";

const styles = {
  image: {
    with: 400,
    height: 300,
    borderRadius: 25,
  },
};

const SignUp = (props) => {
  const [imgFile, setImgFile] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwCheck, setUserPwCheck] = useState("");

  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const handleChangeUserId = (event) => {
    setUserId(event.target.value);
  };
  const handleChangeUserPw = (event) => {
    setUserPw(event.target.value);
  };
  const handleChangeUserPwCheck = (event) => {
    setUserPwCheck(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("아이디 :" + { userId } + ", 비밀번호 : " + { userPw });
    event.preventDefault();
  };

  return (
    <div>
      <img
        //조건부 랜더링 -> 표현식으로 삼항다항식을 이용해서, 수행
        src={imgFile ? imgFile : `../rat.jpg`}
        alt="프로필 이미지"
        style={styles.image}
      />
      <br />
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={saveImgFile}
        // useRef가 적용이됨
        //(순서2)
        ref={imgRef}
      />
      <form onSubmit={handleSubmit}>
        <label>
          <br />
          이름 :{" "}
          <input type="text" value={userId} onChange={handleChangeUserId} />
          <br />
          비밀번호 :{" "}
          <input type="text" value={userPw} onChange={handleChangeUserPw} />
          <br />
          비밀번호 확인 :{" "}
          <input
            type="text"
            value={userPwCheck}
            onChange={handleChangeUserPwCheck}
          />
        </label>
        <br />
        <button type="submit">보내기</button>
        {/* {{ userPw } === { userPwCheck } && <p>비밀번호가 같습니다.</p>} */}
      </form>
    </div>
  );
};

export default SignUp;
