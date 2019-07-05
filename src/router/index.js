import Vue from 'vue';
import Router from 'vue-router';
import home from './home';
import mine from './mine';
import category from './category';
import search from './search';
import register from './register';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@components/city/City.vue')
    },
    home,
    mine,
    category,
    search,
    register
  ]
});
