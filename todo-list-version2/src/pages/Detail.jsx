import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { searchOne } from "../redux/modules/todo";

export default function Detail() {
  const navigate = useNavigate();

  const param = useParams();
  // const todo = useSelector((state) => state.todo);

  // const [target, setTarget] = useState({});

  // useEffect(() => {
  //
  //   if (!target) {
  //     console.log("come");
  //     navigate("/");
  //   }
  // }, [target]);

  // const goHome = ()=>{
  //   if (!target) {
  //         console.log("come");
  //         navigate("/");
  //       }
  // }
  // if (target === undefined) {
  //   console.log("here");
  //   goHome();
  // }
  // console.log(target);

  // localstorage에서 param.id값과 todos.값을 비교해서 가져옴.
  const todos = JSON.parse(localStorage.getItem("todos"));
  console.log(todos);
  const target = todos.filter((todo) => todo.id === param.id)[0];
  console.log(target);

  // // 새로고침시 main으로 이동. =undifined
  // const target = todo.filter((item) => item.id === param.id)[0];
  // if (!target) return window.location.replace("/");

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="m-10">
        <span>ID : {target.id} </span>
        <button onClick={() => navigate("/")}>이전으로</button>
      </div>
      <h1 className="m-5">{target.title}</h1>
      <p>{target.body}</p>
    </div>
  );
}
