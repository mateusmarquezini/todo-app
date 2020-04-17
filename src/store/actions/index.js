import actions from './actionTypes'

  export const newTodo = data => {
    return {
      type: actions.NEW_TODO,
      payload: data
    }
  }