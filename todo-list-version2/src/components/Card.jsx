import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ obj, clickDeleteTodo, clickToggleStatusTodo }) {
  console.log("obobjj", obj);
  return (
    <div className={styles.card}>
      <header>
        <h3>
          <Link to={`/${obj.id}`}>상세보기</Link>
        </h3>
        <h2>{obj.title}</h2>
      </header>
      <main>
        <span>{obj.body}</span>
        <div className={styles.buttonss}>
          <button onClick={() => clickDeleteTodo(obj.id)}>삭제</button>
          <button onClick={() => clickToggleStatusTodo(obj.id)}>
            {obj.isDone ? "취소" : "완료"}
          </button>
        </div>
      </main>
    </div>
  );
}
