import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PdItem from "./PdItem";
import axios from "axios";

//목록의 틀
//box-sizeing:border-box; = 해당 div태그 안에 요소의 크기를유지하면서,테두리와 안쪽 여백의 너비에 영향을  주지 않는 역할
const ItemListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  MAIN_TITLE: "제목",
  ITEMCNTNTS: "내용",
  MAIN_IMG_NORMAL: "https://via.placeholder.com/160",
};

const ItemList = () => {
  return (
    <ItemListBlock>
      <PdItem article={sampleArticle} />
      <PdItem article={sampleArticle} />
      <PdItem article={sampleArticle} />
      <PdItem article={sampleArticle} />
      <PdItem article={sampleArticle} />
    </ItemListBlock>
  );
};

export default ItemList;
