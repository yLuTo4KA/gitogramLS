import { createStore } from "vuex";
import repositories from "./modules/repositories";

export default createStore({
  modules: {
    repositories,
  },
});
