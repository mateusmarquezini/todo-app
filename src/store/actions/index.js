import actions from './actionTypes';

  export const newTodo = data => {
    return {
      type: actions.NEW_TODO,
      payload: data
    }
  }

  export const markAsDone = (id) => {
    return {
      type: actions.UPDATE_TODO,
      payload: id
    }
  }