const state = () => {
  return {
    authUser: null,
  };
};

const getters = {};

const actions = {
  async onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit("resetUser");
      return;
    }
    if (authUser && authUser.getIdToken) {
      try {
        const idToken = await authUser.getIdToken(true);
        console.info("idToken", idToken);
      } catch (e) {
        console.error(e);
      }
    }
    commit("setUser", { authUser });
  },
};

const mutations = {
  setUser(state, { authUser }) {
    state.authUser = {
      uid: authUser.uid,
    };
  },
  resetUser(state) {
    state.authUser = null;
  },
  logout(state) {
    state.user = {};
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
