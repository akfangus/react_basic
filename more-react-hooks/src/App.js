import "./App.css";
import styled from "styled-components";
import TestPage from "./components/TestPage";
import GlobalStyle from "./GlobalStyle";

const StComtainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

// const StP = styled.p`
//   color: blue;
// `;

//박스의 색
const boxList = ["red", "blue", "green", "black"];

//색을 넣으면, 이름을 반환
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨박";
    case "green":
      return "초박";
    case "blue":
      return "파박";
    default:
      return "검박";
  }
};

function App() {
  return (
    // <StComtainer>
    //   {/* <StBox borderColor="red">빨박스</StBox> */}
    //   {boxList.map((box) => {
    //     return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
    //   })}
    // </StComtainer>
    <>
      <GlobalStyle />
      <TestPage title="제모옥" contents="내요옹" />
    </>
  );
}

export default App;
