import { createStore } from "vuex";
import repositories from "./modules/repositories";
import auth from "./modules/auth";
import starred from "./modules/starred";

export default createStore({
  modules: {
    repositories,
    auth,
    starred,
  },
});
