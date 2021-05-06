import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
      props: false
    },
    {
      path: '/js-theory',
      component: () => import('../views/Theory.vue'),
      props: true
    },
    {
      path: '/js-practice',
      component: () => import('../views/Practice.vue'),
      props: true
    }
  ]
});