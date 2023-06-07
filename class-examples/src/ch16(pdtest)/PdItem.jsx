import React from "react";
import styled from "styled-components";

//현재, 목록의요소 사용이 될 예정.
// 간단히 UI 구성.
// 기본 가로 방향
// 이미지, 제목, 내용 구성 할 예정.
//object-fit: cover; 가로 세로 비율을 유지를 하면서, 해당 컨테이너 영역을 완전히 덮는다.
// & -> css 선택자에서, 보통 자기 자신을 말하고,
// & -> contents를 의미하고,
// .contents {
//  & + & {   } -> contents 내부에서 간격.
//}

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
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

//article 임의의 인자값.

const PdItem = ({ article }) => {
  // 비구조화 할당으로 , article.MAIN_TITLE
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
