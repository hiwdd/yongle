import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Toast, Lazyload, NavBar, Search } from 'vant';
import 'vant/lib/index.css';

Vue.use(Toast)
  .use(Lazyload)
  .use(NavBar)
  .use(Search);

Vue.config.productionTip = false;

Vue.filter('toimg', (url, params) => {
  if (!url) return;
  return params + url;
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
