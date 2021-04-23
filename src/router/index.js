import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsComponent from '../components/NewsComponent.vue';
import AskComponent from '../components/AskComponent.vue';
import JobsComponent from '../components/JobsComponent.vue';
import AskDetailComponent from '../components/AskDetailComponent.vue';
import UserDetailComponent from '../components/UserDetailComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: NewsComponent,
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskComponent,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsComponent,
  },
  {
    path: '/ask/:id',
    component: AskDetailComponent,
  },
  {
    path: '/user/:id',
    component: UserDetailComponent,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
