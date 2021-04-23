import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue'),
  },
  {
    path: '/ask',
    name: 'ask',
    component: () => import('../views/AskView.vue'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('../views/JobsView.vue'),
  },
  {
    path: '/ask/:id',
    component: () => import('../views/AskDetailView.vue'),
  },
  {
    path: '/user/:id',
    component: () => import('../views/UserDetailView.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
