import axios from 'axios';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST,GET_INIT_LIST} from './actionTypes'

export const getInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const deleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_TODO_LIST,
  data,
})

// thunk
// export const getTodolist = () => {
//   return (dispatch) => {
//     axios('https://www.fastmock.site/mock/4b7e198761174a9e71c5eaf58263b72b/v1/api/todolist')
//     .then(res => {
//       const {data} = res;
//       const action = initListAction(data);
//       dispatch(action)
//     })
//   }
// }

export const getInitlist = () => ({
  type: GET_INIT_LIST,
})