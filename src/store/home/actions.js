import {indexJson} from "@api"

export default {
  async actIndexJson({ commit }) {
    let data = await indexJson();
    let recommendPage = data.recommendPage.list;
    let slideList = data.slideList;
    let subjectList = data.subjectList;
    let blockRec = data.blockRec;
    commit("mutaIndexJson",{recommendPage,slideList,subjectList,blockRec});
  }
}