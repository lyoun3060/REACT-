// import logo from './logo.svg';
import './App.css';
import Categories from './ch16(pdtest)/Components/Categories';
import ItemList from './ch16(pdtest)/ItemList';
import React,{useState, useCallback} from 'react';

function App() {
  const[category, setCategory] = useState('food')
  const onSelect = useCallback(category =>setCategory(category),[])
  

  return (
    <div>
      <Categories category={category} onSelect={onSelect}/>
      <ItemList category={category}/>
    </div>
  );
}

export default App;
