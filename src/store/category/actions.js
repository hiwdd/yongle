import { defaultJson } from '@api';

export default {
  async actDefaultJson({ commit }) {
    let data = await defaultJson();
    commit('mutaDefaultJson', data.pagerMemoryList);
  }
};
