import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import styles from "./Body.module.css";
import { changeOne, deleteOne, searchOne } from "../redux/modules/todo";

const StCard = styled.section`
  max-width: 1200px;
  min-width: 800px;
  /* height: 350px; */

  text-align: center;
  margin: 10px auto;
  font-size: 25px;
  position: relative;
`;
// /
export default function Body() {
  const todo = useSelector((state) => {
    // console.log("state", state);
    return state.todo;
  });
  console.log("to", todo);
  const dispatch = useDispatch();
  const toDoNotDone = todo.filter((v) => !v.isDone);
  const toDoisDone = todo.filter((v) => v.isDone);
  //   console.log("a", toDoNotDone);
  //   console.log("b", toDoisDone);

  //   console.log("todo", todo);
  const clickDeleteTodo = (key) => {
    dispatch(deleteOne(key));
  };

  const clickToggleStatusTodo = (key) => {
    dispatch(changeOne(key));
  };
  const clickGetTodoById = (key) => {
    dispatch(searchOne(key));
  };

  // const
  return (
    <>
      <h1 className="flex flex-col items-center text-4xl">Working...!!</h1>
      <StCard className={styles.cardlist}>
        {toDoNotDone.map((item) => (
          <Card
            key={item.id}
            obj={item}
            clickDeleteTodo={clickDeleteTodo}
            clickToggleStatusTodo={clickToggleStatusTodo}
            clickGetTodoById={clickGetTodoById}
          />
        ))}
      </StCard>
      <h1 className="flex flex-col items-center text-4xl">Done...!!</h1>
      <StCard className={styles.cardlist}>
        {toDoisDone.map((item) => (
          <Card
            key={item.id}
            obj={item}
            clickDeleteTodo={clickDeleteTodo}
            clickToggleStatusTodo={clickToggleStatusTodo}
            clickGetTodoById={clickGetTodoById}
          />
        ))}
      </StCard>
    </>
  );
}
