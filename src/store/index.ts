import { createStore } from "vuex";
import repositories from "./modules/repositories";
import auth from "./modules/auth";

export default createStore({
  modules: {
    repositories,
    auth,
  },
});
