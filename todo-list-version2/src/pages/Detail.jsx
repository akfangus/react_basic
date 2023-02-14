import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { searchOne } from "../redux/modules/todo";

export default function Detail() {
  const navigate = useNavigate();
  const param = useParams();
  const todo = useSelector((state) => state.todo);

  //   console.log("param", param.id);
  //   const dispatch = useDispatch();

  //useeffect
  //   useEffect(() => {
  //     dispatch(searchOne(param.id));
  //   }, [dispatch, param.id]);
  //   const todo = console.log("rd", todo);
  console.log("뚜ㅡ뚜", todo);
  const target = todo.filter((item) => item.id === param.id)[0];
  console.log(target);

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="m-10">
        <span>ID : {target.id} </span>
        {/* navigate(-1) */}
        <button onClick={() => navigate("/")}>이전으로</button>
      </div>
      {/* <Link to="/">이전으로</Link> */}

      <h1 className="m-5">{target.title}</h1>

      <p>{target.body}</p>
    </div>
  );
}
