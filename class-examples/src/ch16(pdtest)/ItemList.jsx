import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PdItem from "./PdItem";
import axios from "axios";

// 목록의 틀
// box-sizing: border-box; -> 해당 div 태그 안에 요소의 크기를 유지하면서,
// 테두와 안쪽 여백의 너비에 영향을 주지 않는 역할.
const ItemListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// const sampleArticle = {
//   MAIN_TITLE: "제목",
//   ITEMCNTNTS: "내용",
//   MAIN_IMG_NORMAL: "https://via.placeholder.com/160",
// };

// 부모에서 props 로 전달 합니다. category
const ItemList = ({ category }) => {
  //state 관리 하기위한 변수들, 하나는 데이터, 로딩(받고있는지 상태 여부)
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  //useEffect : 마운트, 업데이트를 훅스로 쉽게 구현하는 함수.
  //useEffect(콜백함수, 의존배열) -> 의존배열 모양3가지
  // 1) 없는 것 : 매번 업데이트마다 콜백 함수 호출.
  // 2) [ ]: 최초1회시 콜백함수 호출.
  // 3) [x] : x 값이 변경시 마다, 콜백 함수 호출.
  useEffect(() => {
    //async 함수 이름 앞에 사용
    const fetchData = async () => {
      setLoading(true);
      try {
        // await Promise 반환 타입 앞에 사용,
        // axios 의 반환 타입이 Promise
        // get 함수의 인자값으로 : 공공데이터 주소가 들어옵니다.
        //

        //추가 작업, 스위치 케이스로 분기 설정.
        const query = category === "food" ? "food" : `${category}`;

        switch (query) {
          case "food":
            var response = await axios.get(
              "https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json"
            );
            //response.data 이부분 까지 는 고정이고, 해당 공공데이터의 데이터 구조 타입에 따라서 조금씩 다름.
            //ex)
            console.log(response.data.getFoodKr.item);
            setArticles(response.data.getFoodKr.item);
            break;

          case "walking":
            var response = await axios.get(
              "https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&pageNo=1&numOfRows=100&resultType=json"
            );
            //response.data 이부분 까지 는 고정이고, 해당 공공데이터의 데이터 구조 타입에 따라서 조금씩 다름.
            //ex)
            console.log(response.data.getWalkingKr.item);
            setArticles(response.data.getWalkingKr.item);
            break;

          default:
            alert("카테고리 선택 해주세요.");
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    //앞에서는 하나의 공공데이터만 받아 와서 작업을 하니까 빈배열
    // 의존성 배열에 category  부분에 따라서 , 데이터를 호출하는 부분이 다릅니다.
  }, [category]);

  //대기중일 때
  if (loading) {
    return <ItemListBlock>대기중.....</ItemListBlock>;
  }

  // 아직 response 값이 설정 되지 않았을 때, 공공데이터를 못받은 경우.
  if (!articles) {
    console.log("articles 응답이 없습니다. ");
    //화면에 안그려줌.
    return null;
  }

  // 정상 : 데이터 받아 왔을 때

  return (
    <ItemListBlock>
      {articles.map((article) => (
        // key 제목으로 한건 테스트용이고, 썩 좋은 선택은 아님. ID 라든지, 중복이 최대한 안되는 데이터 활용.
        <PdItem key={article.MAIN_TITLE} article={article} />
      ))}
    </ItemListBlock>
  );
};

export default ItemList;
