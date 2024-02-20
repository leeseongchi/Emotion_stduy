/*
react component 특징
1. 파일명과 함수명을 일치시킨다.
2. 하나의 컴포넌트 함수는 하나의 태그 묶음만 리턴할 수 있다
3. 함수를 꼭 export를 해야한다.


*/

import { useState } from "react";

export default function App(){
  let names = ["김응애", "김응애22", "김응애3"];

  const [ nameArrayState, setNameArrayState ] = useState(["김응애", "김응애2", "김응애3"]);
  // 상태 관리
  // !!!*상태가 변하면 렌더링이 다시 된다.*!!!


  const { name, age } = {name: "김응가", age: 20};
  const [ num1, num2, num3, num4 ] = [1, 2, 3, 4];

  console.log("콘솔 호출?");

  // 내부 함수
  const handleclick = () => {
    setNameArrayState([...nameArrayState, "김응애4"]);
  }

  // setTimeout(() => {
  //   setNameArrayState([...nameArrayState, "김응애4"]);
  //   setTimeout(() => {
  //     setNameArrayState([...nameArrayState, "김응애5"]);
  //     setTimeout(() => {
  //       setNameArrayState([...nameArrayState, "김응애6"]);

  //     }, 2000);
  //   }, 2000);
  // }, 2000);
  

  return <>
    <button onClick={ handleclick }>추가</button>
    <div>
      { nameArrayState.map(name => <h1>{ name }</h1>) }
    </div>
  </>
}

