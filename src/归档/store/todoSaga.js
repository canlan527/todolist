import { put, takeEvery } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";
import { initListAction } from "./actionCreator";

function* getInitList() {
  const res = yield axios.get(
    "https://www.fastmock.site/mock/4b7e198761174a9e71c5eaf58263b72b/v1/api/todolist"
  );
  const action = initListAction(res.data);
  yield put(action);
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
