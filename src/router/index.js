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
      path: '/quiz',
      name: 'quiz',
      component: () => import('../views/Quiz.vue'),
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    }
  ]
});
