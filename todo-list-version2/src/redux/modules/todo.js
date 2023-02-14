const ADD_ONE = "addTodo";
const SEARCH_ONE = "getTodoById";
const DELETE_ONE = "deleteTodo";
const CHANGE_ONE = "toggleStatusTodo";

const initialState = [
  {
    id: "1", // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: "2", // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    body: "점심 뭐먹지..?",
    isDone: false,
  },
];

export const deleteOne = (payload) => {
  console.log("d[", payload);
  return {
    type: DELETE_ONE,
    id: payload,
  };
};

export const searchOne = (payload) => {
  return {
    type: SEARCH_ONE,
    id: payload,
  };
};

export const changeOne = (payload) => {
  return {
    type: CHANGE_ONE,
    id: payload,
  };
};

export const addOne = (payload) => {
  const newID = function () {
    return Math.random().toString(36).substr(2, 16);
  };
  payload.id = newID();
  payload.isDone = false;
  //   console.log(newID());
  return {
    type: ADD_ONE,
    payload,
  };
};

//리듀서
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE: {
      return [action.payload, ...state];
    }
    case DELETE_ONE: {
      return state.filter((item) => item.id !== action.id);
    }
    case CHANGE_ONE: {
      return state.map((item) =>
        item.id === action.id ? { ...item, isDone: !item.isDone } : item
      );
    }
    case SEARCH_ONE: {
      return;
    }
    default:
      return state;
  }
};

export default todo;
