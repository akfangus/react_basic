import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChangeTitle = (event) => {
    // console.log(event.target.value);
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!toDo) {
      return;
    }
    setToDos([toDo, ...toDos]);
    // console.log(toDos);
  };

  return (
    <div className="app">
      <Input onSubmit={onSubmit} onChangeTitle={onChangeTitle} />
      <Card toDos={toDos} />
    </div>
  );
}

function Input({ onSubmit, onChangeTitle }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChangeTitle} type="text"></input>
        <button>추가하기</button>
      </form>
    </div>
  );
}

function Card({ toDos }) {
  return (
    <>
      <h1>Todo List</h1>
      <div className="wrap">
        {toDos.map((item, index) => (
          <p className="card" key={index}>
            {item}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
