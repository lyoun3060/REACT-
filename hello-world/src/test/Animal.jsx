import React from 'react';
import Dog from './Dog';

function Animal(props) {
  return (
    <div>
      <Dog name="리트리버 순이" age={5} />
      <Dog name="포메 둥이" age={3} />
      <Dog name="차우차우 호두" age={8} />
      <Dog name="말티즈 콩이" age={1} />
    </div>
  );
}
export default Animal;
