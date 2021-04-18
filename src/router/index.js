import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsComponent from '../components/NewsComponent.vue';
import AskComponent from '../components/AskComponent.vue';
import JobsComponent from '../components/JobsComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: NewsComponent,
  },
  {
    path: '/ask',
    component: AskComponent,
  },
  {
    path: '/jobs',
    component: JobsComponent,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
