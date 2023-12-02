import * as api from "../../api";

export default {
  namespaced: true,
  state: {
    trandPost: {
      data: {},
      loading: false,
      error: false,
    },
  },
  getters: {
    getRepoById: (state) => (id) =>
      state.trandPost.data.find((item) => item.id == id),
  },
  mutations: {
    setData(state, payload) {
      state.trandPost.data = payload;
    },
    setReadme(state, payload) {
      state.trandPost.data = state.trandPost.data.map((repo) => {
        if (payload.id == repo.id) {
          repo.readme = payload.content;
        }
        return repo;
      });
    },
    dataLoading(state, payload) {
      state.trandPost.loading = payload;
    },
  },
  actions: {
    async getTrandRepo({ commit }) {
      commit("dataLoading", true);
      try {
        const { data } = await api.trandings.getTrandings();
        const datas = data.items;
        commit("setData", datas);
      } catch (error) {
        console.log(error);
      } finally {
        commit("dataLoading", false);
      }
    },
    async getReadme({ commit, getters }, { id, owner, repo }) {
      const currentRepo = getters.getRepoById(id);
      if (currentRepo.readme !== undefined) return;
      try {
        const { data } = await api.readme.getReadme({ owner, repo });
        commit("setReadme", { id, content: data });
      } catch (e) {
        commit("setReadme", {
          id,
          content: "404 not found",
        });
      }
    },
  },
};
