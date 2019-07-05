export default {
  mutaIndexJson(state, params) {
    state.recommendPage = params.recommendPage;
    state.slideList = params.slideList.map(item => item.IMG).splice(0, 5);
    state.subjectList = params.subjectList;
    state.blockRec = params.blockRec;
  }
};
