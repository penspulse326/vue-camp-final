import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import SingUpView from '@/views/SingUpView.vue';
import TodoView from '@/views/TodoView.vue';
import AuthLayout from '@/components/templates/AuthLayout.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthLayout,
      children: [
        { path: '/login', name: 'login', component: LoginView },
        {
          path: '/signup',
          name: 'signup',
          component: SingUpView
        }
      ]
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView
    }
  ]
});

export default router;
