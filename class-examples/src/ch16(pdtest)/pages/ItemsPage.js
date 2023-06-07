import React from 'react';
//URL 매핑할때, path의 경로의 변수를 동적으로 사용할 예정
//1번 게시글을 보고싶은 경우, 호스트서버/board/1
//문법이 /:동적변수, 사용
import { useParams } from 'react-router-dom';
import Categories from '../Components/Categories';
import ItemList from '../ItemList';

const ItemsPage = ({match}) => {
    //useParams를 사용할 예정
    //순서 1선언 = useParams
    const params = useParams
    //순서2, 적용
    //params.category 값이 존재한다면, 해당 값을 사용하고 만약 없다면 기본값으로 'food'를 사용함


    // 해당페이지 컴포넌트를 사용하믈, 기존에 onSelect를 이용할수 있어서, 해당 카테고리 값을 설정 및 적용했는데,
    // 이제는 라우팅을 사용해서 필요없음, 기존의 카테고리를 수정
    const category = params.categoty || 'food'
    return (
        <Categories>
            <ItemList category={category}/>
        </Categories>
    );
};

export default ItemsPage;