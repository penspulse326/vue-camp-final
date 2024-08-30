import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import SingUpView from '@/views/SingUpView.vue';
import TodoView from '@/views/TodoView.vue';
import AuthLayout from '@/components/templates/AuthLayout.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: AuthLayout,
      children: [
        {
          path: '',
          component: LoginView
        }
      ]
    },
    {
      path: '/signup',
      name: 'signup',
      component: AuthLayout,
      children: [
        {
          path: '',
          component: SingUpView
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: TodoView
    }
  ]
});

export default router;
