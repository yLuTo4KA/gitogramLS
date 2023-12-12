import { createStore } from "vuex";
import trandings from "./modules/trandings";
import auth from "./modules/auth";
import starred from "./modules/starred";

export default createStore({
  getters: {
    getUnstarredRepo(state) {
      return state.trandings.trandPost.data.filter((trandingRepo) => {
        return !state.starred.starredRepos.some(
          (starredRepo) => trandingRepo.id == starredRepo.id
        );
      });
    },
  },
  modules: {
    trandings,
    auth,
    starred,
  },
});
