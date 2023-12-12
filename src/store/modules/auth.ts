import * as api from "../../api";

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setData(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    authUser() {
      api.auth.getAuth();
    },
    async getToken(store, code) {
      const { data } = await api.auth.getToken(code);
      return data.token;
    },
    async getUserData({ commit }) {
      try {
        const { data } = await api.auth.getUserData();
        commit("setData", data);
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    logoutUser() {
      api.auth.logout();
    },
  },
};
