import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/theory',
      name: 'theory',
      component: () => import('../views/Theory.vue'),
    },
    {
      path: '/theory/topic/:id',
      name: 'topic-page',
      component: () => import('../views/Topic.vue'),
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('../views/Practice.vue'),
    },
    {
      path: '/practice/task/:id',
      name: 'task-page',
      component: () => import('../views/Task.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue'),
      // props: true
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    }
  ]
});
