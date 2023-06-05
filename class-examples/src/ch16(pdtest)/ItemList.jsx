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

// const sampleArticle = {
//   MAIN_TITLE: "제목",
//   ITEMCNTNTS: "내용",
//   MAIN_IMG_NORMAL: "https://via.placeholder.com/160",
// };

const ItemList = ({ category }) => {
  //state 관리하기 위한 변수들(하나는 데이터, 하나는 로딩(받고있는지 상태 여부))
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  //useEffect(콜백함수, 의존배열) -> 마운트, 업데이트를 훅스로 쉽게 구현하는 함수
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        //await Promise 반환 타입 앞에 사용
        //axios의 반환 타입이 Promise

        //추가작업
        const query = category === "food" ? "food" : `${category}`;
        var response;
        switch (query) {
          case "food":
            response = await axios.get(
              "https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json"
            );
            //response.data 이부분 까지 는 고정이고, 해당 공공데이터의 데이터 구조 타입에 따라서 조금씩 다름.
            //ex)
            console.log(response.data.getFoodKr.item);
            setArticles(response.data.getFoodKr.item);
            break;

          case "walking":
            response = await axios.get(
              "http://apis.data.go.kr/3330000/HeaundaeTourAttrInfoService/getTourAttrList?serviceKey=5I8gFkgEEZq%2FHx%2BJ7gcp%2FHjdj%2BNJuyPEbsuUiXGINYc7onaqfXdpBQ2hQT8EJdA9c0I7JN56jDKVIcZk0xWezw%3D%3D&numOfRows=4&pageNo=1&resultType=json"
            );
            //response.data 이부분 까지 는 고정이고, 해당 공공데이터의 데이터 구조 타입에 따라서 조금씩 다름.
            //ex)
            console.log(response.data.getTourAttrList.item);
            setArticles(response.data.getTourAttrList.item);
            break;

          default:
            alert("카테고리를 선택하세요");
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    //앞에서는 하나의 공공데이터만 받아와서 작업을 하니까 빈배열
    //지금은의존성  배열의 category 따라서 , 데이터를 호출하는 부분이 다름
  }, [category]);

  if (loading) {
    return <ItemListBlock>대기중.......</ItemListBlock>;
  }

  //아직 response값이 설정되지 않았을때, 공공데이터를 못받은 경우
  if (!articles) {
    console.log("articles응답이 없습니다.");
    //ghkausdp dksrmfuwna.
    return null;
  }

  return (
    <ItemListBlock>
      {articles.map((article) => (
        //key 제목으로 한건 테스트용, 썩 좋은 결과를 찾안것 X,
        <PdItem key={article.MAIN_TITLE} article={article} />
      ))}
    </ItemListBlock>
  );
};

export default ItemList;
