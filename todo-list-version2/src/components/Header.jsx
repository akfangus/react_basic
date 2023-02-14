import React from "react";
import styled from "styled-components";

const Title = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 50px;
  background-color: tomato;
  text-align: center;
  margin: 10px auto;
  font-size: 32px;
`;

export default function Header() {
  return <Title className="rounded-xl">Title</Title>;
}
