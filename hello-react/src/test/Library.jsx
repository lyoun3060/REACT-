import React from 'react';
import Book from './Book';

function Library(props) {
  //Library라는 함수형 컴포넌트를 만들었고, 여기에 아까 만들었던 book이라는 컴포넌트를 사용하는 예제 코드
  return (
    <div>
      <Book name="김수장1" numOfPage={100} />
      <Book name="김수장2" numOfPage={200} />
      <Book name="김수장3" numOfPage={300} />
    </div>
  );
}
export default Library;
//이걸 설정해줘야지만  외부에서  해당파일을 볼수 있음
