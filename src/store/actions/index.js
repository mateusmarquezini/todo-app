import actions from './actionTypes';

  export const newTodo = data => {
    return {
      type: actions.NEW_TODO,
      payload: data
    }
  }

  export const next = data => {
    return {
      type: actions.NEXT,
      payload: data
    }
  }

  export const markAsDone = (id) => {
    return {
      type: actions.MARK_AS_DONE,
      payload: id
    }
  }