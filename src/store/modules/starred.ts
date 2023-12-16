import * as api from "../../api";

export default {
  namespaced: true,
  state: {
    starredRepos: null,
  },
  getters: {
    getRepoById: (state) => (id) =>
      state.starredRepos.find((item) => item.id == id),
  },
  mutations: {
    setStarredRepo(state, payload) {
      state.starredRepos = payload;
    },
    setIssuesRepo(state, payload) {
      state.starredRepos = state.starredRepos.map((item) => {
        if (item.id === payload.id) {
          item.issues = { list: payload.issues, state: payload.state };
        }
        return item;
      });
    },
    removeStar(state, payload) {
      const indexDel = state.starredRepos.indexOf(payload);
      state.starredRepos.splice(indexDel, 1);
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
      commit("setIssuesRepo", { id, issues: [], state: true });
      try {
        const { data } = await api.issues.getIssues({ owner, repo });
        if (data.length !== 0) {
          commit("setIssuesRepo", { id, issues: data, state: false });
        } else {
          commit("setIssuesRepo", {
            id,
            issues: [
              {
                title: "No issues",
              },
            ],
            state: false,
          });
        }
      } catch (e) {
        commit("setIssuesRepo", {
          id,
          issues: [
            {
              title: "Error loading",
            },
          ],
          state: false,
        });
        throw e;
      }
    },
    async addStar({ commit }, { owner, repo }) {
      try {
        await api.starred.putLikeRepo({
          owner: owner,
          repo: repo,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async removeStar({ commit, getters }, id) {
      const currentRepo = getters.getRepoById(id);
      try {
        await api.starred.deleteLikeRepo({
          owner: currentRepo.owner.login,
          repo: currentRepo.name,
        });
        commit("removeStar", currentRepo);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
