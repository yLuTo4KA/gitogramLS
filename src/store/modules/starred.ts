import * as api from "../../api";

export default {
  namespaced: true,
  state: {
    starredRepos: null,
    loading: false,
  },
  getters: {},
  mutations: {
    setStarredRepo(state, payload) {
      state.starredRepos = payload;
    },
    setIssuesRepo(state, payload) {
      state.starredRepos = state.starredRepos.map((item) => {
        if (item.id === payload.id) {
          item.issues = payload.issues;
        }
        return item;
      });
    },
    startLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async getStarredRepo({ commit }) {
      try {
        const { data } = await api.starred.getStarredRepo();
        commit("setStarredRepo", data);
      } catch (e) {
        console.log(e);
      }
    },
    async getIssues({ commit }, { id, owner, repo }) {
      commit("startLoading", true);
      try {
        const { data } = await api.issues.getIssues({ owner, repo });
        if (data.length !== 0) {
          commit("setIssuesRepo", { id, issues: data });
        } else {
          commit("setIssuesRepo", {
            id,
            issues: [
              {
                title: "No issues",
              },
            ],
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        commit("startLoading", false);
      }
    },
  },
};
