import Vue from 'vue';
import Vuex from 'vuex';
import category from './category';
import home from './home';
import city from './city';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
    home,
    city
  }
});
