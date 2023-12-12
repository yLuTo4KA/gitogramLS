import * as api from "../../api";

export default {
  namespaced: true,
  state: {
    trandPost: {
      data: [],
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
      state.trandPost.data = payload.trandingPost.filter((trandItem) => {
        const isStarred = payload.starredPost.some(
          (starredItem) => starredItem.id === trandItem.id
        );
        if (!isStarred) {
          trandItem.following = {
            status: false,
            loading: false,
            error: "",
          };
          return !isStarred;
        }
      });
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
    setFollowing(state, payload) {
      state.trandPost.data = state.trandPost.data.map((repo) => {
        if (repo.id == payload.id) {
          repo.following = {
            ...repo.following,
            ...payload.data,
          };
        }
        return repo;
      });
    },
  },
  actions: {
    async getTrandRepo({ commit, rootState }) {
      commit("dataLoading", true);
      try {
        const { data } = await api.trandings.getTrandings();
        const datas = data.items;
        commit("setData", {
          trandingPost: datas,
          starredPost: rootState.starred.starredRepos,
        });
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
    async starRepo({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id);
      commit("setFollowing", {
        id,
        data: {
          status: false,
          loading: true,
          error: "",
        },
      });
      try {
        await api.starred.putLikeRepo({ owner: owner.login, repo });
        commit("setFollowing", {
          id,
          data: {
            status: true,
          },
        });
      } catch (e) {
        console.log(e);
        commit("setFollowig", {
          id,
          data: {
            status: false,
            error: "Following Error!",
          },
        });
        throw e;
      } finally {
        commit("setFollowing", {
          id,
          data: {
            loading: false,
          },
        });
      }
    },
    async unStarRepo({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id);
      commit("setFollowing", {
        id,
        data: {
          loading: true,
        },
      });
      try {
        await api.starred.deleteLikeRepo({ owner: owner.login, repo });
        commit("setFollowing", {
          id,
          data: {
            status: false,
          },
        });
      } catch (e) {
        commit("setFollowing", {
          id,
          data: {
            status: true,
          },
        });
        throw e;
      } finally {
        commit("setFollowing", {
          id,
          data: {
            loading: false,
          },
        });
      }
    },
  },
};
