import * as api from "../../api";

export default {
  namespaced: true,
  state: {
    following: null,
    repositories: null,
    starredRepos: null,
  },
  getters: {
    getReposByusername: (state) => (username) =>
      state.following.find((item) => item.login === username),
  },
  mutations: {
    SET_REPOSITORIES(state, payload) {
      state.repositories = payload;
    },
    SET_FOLLOWING(state, payload) {
      state.following = payload;
    },
    UNFOLLOW(state, payload) {
      const indexDel = state.following.indexOf(payload);
      state.following.splice(indexDel, 1);
    },
  },
  actions: {
    async getUserRepos({ commit }) {
      try {
        const { data } = await api.auth.getUserRepos();
        // data.forEach(async (item) => {
        //   try {
        //     await api.auth.isStarred(item.owner.login, item.name);
        //     item.follow = true;
        //   } catch (e) {
        //     console.log(e);
        //     item.follow = false;
        //   }
        // });
        commit("SET_REPOSITORIES", data);
      } catch (e) {
        commit("SET_REPOSITORIES", []);
        throw e;
      }
    },
    async getUserFollowing({ commit }) {
      try {
        const { data } = await api.auth.getUserFollowing();
        commit("SET_FOLLOWING", data);
      } catch (e) {
        commit("SET_FOLLOWING", []);
        throw e;
      }
    },
    async unFollow({ commit, getters }, username) {
      const currentFollowing = getters.getReposByusername(username);
      try {
        await api.auth.unFollowUser(username);
        commit("UNFOLLOW", currentFollowing);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
