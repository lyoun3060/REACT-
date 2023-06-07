import React from 'react';
//URL 매핑 할 때, path 경로의 변수를 동적으로 사용할 예정.
// 1번 게시글 보고싶다.  호스트서버/board/1
// 문법 -> board/:동적변수 , 사용
// 예제         <Route path="/:category" element={<ItemsPage/>}/>
import { useParams } from 'react-router-dom';
//현재 공공데이터 작업하는 컴포넌트의 큰 틀 2개(카테고리, 아이템 리스트)
import Categories from '../Components/Categories';
import ItemList from '../ItemList';


const ItemsPage = ({match}) => {
    //useParams 를 사용함. 
    // 순서1 , 선언 useParams
    //:category -> 1)food, 2)walking
    const params = useParams();
    // 순서2, 적용
    //params.category 값이 존재 한다면 해당 값을 사용하고, 만약, 없다면 기본 값으로 : 'food'를 사용함.

    // 해당 페이지 컴포넌트를 사용하므로 
    // 기존에 onSelect 함수를 이용해서, 해당 카테고리 값을 설정 및 적용했는데, 
    // 이제는 라우팅을 사용해서, 필요가 없다. 기존의 카테고리 변경 함수인 onSelect .
    const category = params.category || 'food';
    return (
     <>
        <Categories/>
        <ItemList category={category}/>
     </>
    );
};

export default ItemsPage;