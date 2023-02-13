import React, { useCallback, useMemo, useState } from "react";
import Child from "./Memoprac/Child";

export default function AppMemoization() {
  // setState가 비동기 함수
  // 이벤트 핸들러 함수가 종료 후 react에 의해 state 값이 갱신
  const [parentAge, setParentAge] = useState(0);
  // const [childAge, setChildAge] = useState(0);
  console.log("App컴퍼넌트 호출");

  const incrementParentAge = () => {
    // setParentAge(parentAge + 1);
    setParentAge((prev) => prev + 1);
    // => 1이 안찍히고 0이 찍힘.
    console.log(parentAge);
  };

  // const incrementChildAge = () => {
  //   setChildAge((prev) => prev + 1);
  // };

  // 객체의 React.memo는 주소값비교라서 안됨.
  // 이때 useMemo를 사용해서 object 메모
  // const name = useMemo(() => {
  //   return { lastName: "이", firstName: "시냉" };
  // }, []);

  //JS에서 함수는 객체의 한 종류이다 고로 함수도 부모 리렌더링되면 함수도 다른 주소값에 저장
  //
  const tellMe = useCallback(() => {
    console.log("말하다");
  }, []);

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrementParentAge}>Up</button>
      {/* <button onClick={incrementChildAge}>Child Up</button> */}

      {/* child는 컴포넌트prop이 바뀌지않는이상 부모값이 변경되었을때 리렌더링이될 필요가 없음  */}

      {/* <Child name={name}
      age={childAge} /> */}

      {/* <Child name={name} /> */}
      <Child name={"이시냉"} tellMe={tellMe} />
    </div>
  );
}
