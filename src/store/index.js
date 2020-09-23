import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    awesomeness: "On"
  },
  mutations: {
    toggleAwesomeness(state) {
      if (state.awesomeness === "On") {
        state.awesomeness = "Off";
        return;
      }
      state.awesomeness = "On";
    }
  },
  actions: {},
  modules: {}
});
