import React, { useEffect, useRef, useState } from "react";

export default function AppUseRef() {
  const [name, setName] = useState("");
  //   const [renderCount, serRenderCount] = useState(0);

  const renderCount = useRef(1); // {current : 0 }형태로

  //여기 으존성 배열 없이 만나면 renderCount상태값을 변경하고
  //다시 리렌더링되고 이작업이 계속 무한 반복
  useEffect(() => {
    // console.log("실행됨");
    // serRenderCount((prev) => prev + 1);
    renderCount.current += 1;
  });

  //초점을 맞추려고 input에다가 useRef를 써서 ref를 주면 그 DOM을
  //useRef에 저장해서 event를 직접 호출할 수 있다.
  const inputRef = useRef();
  function focus() {
    inputRef.current.focus();
    //Ref에서의 값과 usestate에서의 name은 연동되지 않음.
    inputRef.current.value = "something./..";
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>name is {name}</div>
      <div>i rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
}
