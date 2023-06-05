import React from "react";
import styled from "styled-components";

//현재, 목록의 요소가 사용이 될 예정
//간단히 UI 구성
//기본가로방향, 이미지, 제목, 내용 구성할것
//contents안에 &는 자기 자신을 말함
// &+&는 컨텐츠와 컨텐츠 사이를 설정할때 사용
const PdItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
      p {
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
      }
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const PdItem = ({ article }) => {
  //비구조화 할당으로 들어감 (article.MAIN_TITLE의 형식으로 ...)
  const { MAIN_TITLE, MAIN_IMG_NORMAL, ITEMCNTNTS } = article;
  return (
    <PdItemBlock>
      {/* 이미지가 있다면 보여주겠다. 조건부 렌더링 */}
      {MAIN_IMG_NORMAL && (
        <div className="thumbnail">
          <a href="MAIN_IMG_NORMAL" target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_NORMAL} alt="thumbnail" />
          </a>
        </div>
      )}
      {/* 제목과 상세 내용  */}
      <div className="contents">
        <h2>{MAIN_TITLE}</h2>
        <p>{ITEMCNTNTS}</p>
      </div>
    </PdItemBlock>
  );
};

export default PdItem;
