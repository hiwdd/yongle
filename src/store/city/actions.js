import { listJson, getCityByNameJson } from '@api';

export default {
  async actListJson({ commit }) {
    let data = await listJson();
    commit('mutaListJson', { fcitys: data.fcitys, hotCitys: data.hotCitys });
  },
  async actGetCityByNameJson({ commit }) {
    let data = await getCityByNameJson();
    commit('mutaGetCityByNameJson', data);
  }
};
