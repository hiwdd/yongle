export default {
  mutaListJson(state, payload) {
    state.fcitys = payload.fcitys;
    state.hotCitys = payload.hotCitys;
  },
  mutaGetCityByNameJson(state, payload) {
    state.cityName = payload.cityName;
  },
  getNowCity(state, payload) {
    state.nowCity = payload.nowCity;
  }
};
