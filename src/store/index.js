import { createStore } from "vuex";
import trandings from "./modules/trandings";
import auth from "./modules/auth";
import starred from "./modules/starred";
import profile from "./modules/profile";

export default createStore({
  modules: {
    trandings,
    auth,
    starred,
    profile,
  },
});
