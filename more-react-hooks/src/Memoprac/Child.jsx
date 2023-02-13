import React, { memo } from "react";

//memo를 쓰면 Child의 prop값의 변화가 생길때만 리렌더링
function Child({ name, tellMe }) {
  console.log("child 컴포넌트 호출");
  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>아가</h3>
      {/* <p>name: {name}</p>
         <p>age: {age}</p> */}

      {/* <p>name: {name.lastName}</p>
      <p>name: {name.firstName}</p> */}

      <p>name: {name}</p>
      <button onClick={tellMe}> call </button>
    </div>
  );
}

export default memo(Child);
