import React, { useState, useRef } from "react";
const styles = {
  image: {
    with: 400,
    height: 300,
    borderRadius: 25,
  },
};

const FileImageTest = () => {
  const [imgFile, setImgFile] = useState("");
  //참조용 변수, 이름표처럼 설정하고 특정태그에 적용해서 해당요소의 속성에 접근하기 좋음
  //(순서1)
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    //순서3, 특정 ㅐ그의 속성에 접근
    const file = imgRef.current.files[0];
    //브라우저에 내장된기능(브라우저 API), FileReader, readAsDataURL
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div>
      {/* 업로드 된 이미지 미리보기 */}
      <img
        //조건부 랜더링 -> 표현식으로 삼항다항식을 이용해서, 수행
        src={imgFile ? imgFile : `../rat.jpg`}
        alt="프로필 이미지"
        style={styles.image}
      />
      <br />
      {/* 이미지 업로드 input */}
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={saveImgFile}
        // useRef가 적용이됨
        //(순서2)
        ref={imgRef}
      />
    </div>
  );
};

export default FileImageTest;
