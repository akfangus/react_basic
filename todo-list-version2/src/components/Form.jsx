import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addOne } from "../redux/modules/todo";

const StDiv = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 120px;
  background-color: beige;
  text-align: center;
  margin: 10px auto;
  font-size: 25px;
  position: relative;
`;

const StForm = styled.form`
  width: 100%;
  height: 100%;
  top: 27%;
  position: absolute;
`;

// const title = "";

export default function Form() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const register = () => {
    inputRef.current.focus();
  };

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeTitlehandler = (event) => {
    setTitle(event.target.value);
  };
  const onChangeBodyhandler = (event) => {
    setBody(event.target.value);
  };

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (!title || !body) {
      return;
    }

    dispatch(addOne({ title, body }));
    setTitle("");
    setBody("");
  };

  return (
    <StDiv className="rounded-xl">
      <StForm onSubmit={onSubmit}>
        <label> 제목 </label>
        <input
          ref={inputRef}
          type="text"
          value={title}
          placeholder="write your title"
          onChange={onChangeTitlehandler}
        ></input>
        <label> 내용 </label>
        <input
          type="text"
          value={body}
          placeholder="write your context"
          size={50}
          onChange={onChangeBodyhandler}
        ></input>
        <button onClick={register} className="m-1 p-1 bg-slate-400 rounded-xl">
          {" "}
          추가하기
        </button>
      </StForm>
    </StDiv>
  );
}
