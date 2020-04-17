import actionsTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  todo: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsTypes.NEW_TODO: 
      return addNewTodo(state, action.payload);
    default:
      return state;
  }
}

const addNewTodo = (state, data) => {
  const newState = { ...state };
  newState.todo.push(data);
  return { ...newState };
}

export default reducer;

