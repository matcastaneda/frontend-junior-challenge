import NAME_REDUCER from 'state/constants';

const actionType = {
  GET_TODO: `${NAME_REDUCER.todos}/getTodos`,
  ADD_TODO: `${NAME_REDUCER.todos}/addTodo`,
  TOGGLE_TODO: `${NAME_REDUCER.todos}/toggleTodo`,
  DELETE_TODO: `${NAME_REDUCER.todos}/deleteTodo`,
  CLEAR_ERROR: `${NAME_REDUCER.todos}/clearError`,
};

export default actionType;
