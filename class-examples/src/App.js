// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './ch16(pdtest)/Components/Categories';
import ItemList from './ch16(pdtest)/ItemList';
import React,{useState, useCallback} from 'react';
import ItemsPage from './ch16(pdtest)/pages/ItemsPage';


function App() {
  //공통 state를 부모컴포넌트인 app.js에서 관리하고 있음
  //props로 자식컴포넌트인 ItemList.jsx로 전달
  //자식컴포넌트인 Categories.jsx에서 부모쪽으로 끌어올리기(자식에서 부모의 세터함수를 호출)
  const [category, setCategory] = useState('food')
  const onSelect = useCallback(category => setCategory(category),[])



  // //방법1
  // const[category, setCategory] = useState('food')
  // //useCallback은 똑같은 기능을 하는 함수를 매번 호출할 필요없게함(최초 1회) ->함수식이 변경되면 업데이트해서 호출
  // const onSelect = useCallback(category =>setCategory(category),[])
  

  // return (
  //   <div>
  //     <Categories category={category} onSelect={onSelect}/>
  //     <ItemList category={category}/>
  //   </div>
  // );

  //방법2
  return (
    <Routes>
        <Route path="/" element={<ItemsPage/>}/>
        <Route path="/:category" element={<ItemsPage/>}/>
    </Routes>
  );
}

export default App;
