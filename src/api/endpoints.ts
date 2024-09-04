import { api } from '.';
import type { LoginForm, SignupForm } from '../constants/types';

export const API_USER = {
  _SIGN_UP: (signupFormData: SignupForm) =>
    api.post('/users/sign_up', signupFormData),

  _SING_IN: (loginFormData: LoginForm) =>
    api.post('/users/sign_in', loginFormData),

  _SIGN_OUT: () => api.post('/users/sign_out'),

  _CHECK_AUTH: () => api.get('/users/checkout'),
};

export const API_TODO = {
  _GET_ALL: () => api.get('/todos'),

  _ADD: (newItem: string) => api.post('/todos', { content: newItem }),

  _TOGGLE_STATUS: (id: string) => api.patch(`/todos/${id}/toggle`),

  _UPDATE_CONTENT: (id: string, content: string) =>
    api.put(`/todos/${id}`, { content }),

  _DELETE: (id: string) => api.delete(`/todos/${id}`),
};
