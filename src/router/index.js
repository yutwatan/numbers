import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard')
  },
  {
    path: '/numbers3',
    name: 'Numbers 3',
    component: () => import('../views/Numbers3')
  },
  {
    path: '/numbers4',
    name: 'Numbers 4',
    component: () => import('../views/Numbers4')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help')
  }
];

const router = new VueRouter({
  routes
});

export default router;
