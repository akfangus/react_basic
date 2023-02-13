import React, { createContext, useContext } from "react";
import styled from "styled-components";

const themeDefault = { border: "10px solid green" };
// const themeDefault = 1;
const themeContext = createContext(themeDefault);

const RootDiv = styled.div`
  border: 5px solid gray;
  margin: 10px;
  padding: 10px;
`;

export default function AppUseContext() {
  const theme = useContext(themeContext);
  console.log(theme);

  return (
    <themeContext.Provider value={{ border: "10px solid blue" }}>
      <RootDiv style={theme}>
        <h1>helloworld</h1>
        <Sub1 />
      </RootDiv>
    </themeContext.Provider>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{ border: "10px solid red" }}>
      <RootDiv style={theme}>
        <h1>Sub1</h1>
        <Sub2 />
      </RootDiv>
    </themeContext.Provider>
  );
}

function Sub2() {
  const theme = useContext(themeContext);
  return (
    <RootDiv style={theme}>
      <h2>Sub2</h2>
      <Sub3 />
    </RootDiv>
  );
}

function Sub3() {
  const theme = useContext(themeContext);
  return (
    <RootDiv style={theme}>
      <h3>Sub3</h3>
    </RootDiv>
  );
}
