import axios from 'axios'
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_TODO_LIST } from './actionTypes'

export const changeInputValueAction =(value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM,
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const fetchListAction = (data) => ({
  type: INIT_TODO_LIST,
  data
})
// thunk
export const getTodoList = () => {
  return (dispatch) => {
      axios
      .get(
        "https://www.fastmock.site/mock/4b7e198761174a9e71c5eaf58263b72b/v1/api/todolist"
      )
      .then((res) => {
        const data = res.data;
        const action = fetchListAction(data);
        dispatch(action);
      });
  }
}