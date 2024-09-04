import AuthLayout from '@/components/templates/AuthLayout.vue';
import SingUpView from '@/views/SingUpView.vue';
import TodoView from '@/views/TodoView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoView,
    },
    {
      path: '/auth',
      name: '',
      component: AuthLayout,
      children: [
        {
          path: 'signup',
          name: 'signup',
          component: SingUpView,
        },
        {
          path: 'login',
          name: 'login',
          component: LoginView,
        },
      ],
    },
  ],
});

export default router;
