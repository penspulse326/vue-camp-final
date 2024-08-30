export const API_AUTH = {
  SIGN_IN: '/users/sign_in',
  SIGN_OUT: '/users/sign_out',
  SIGN_UP: '/users/sign_up',
  CHECK_TOKEN: '/users/checkout'
};

export const API_TODO = {
  GET_TODOS: '/todos',
  CREATE_TODO: '/todos',
  UPDATE_TODO_CONTENT: (id: number) =>`/todos/${id}`,
  TOGGLE_TODO_STATUS: (id: number) =>`/todos/${id}`,
  DELETE_TODO: (id: number) =>`/todos/${id}`
}