//중앙 데이터 관리소(STore) 설정
import { createStore, combineReducers } from "redux";
import todo from "../modules/todo";

const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer);

export default store;
