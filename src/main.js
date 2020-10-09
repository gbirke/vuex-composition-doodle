import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import CompositionAPI from "@vue/composition-api";
import { provideStore } from "./components/composition/useStoreInjection";
import { synchronizeAwesomeness } from "./synchronize_vuex";

Vue.config.productionTip = false;
Vue.use(CompositionAPI);

// Synchronization plugin for Vuex to sync between "pure" composition API component state and store.
// uncomment or delete to make composition state standalone
synchronizeAwesomeness(store);

new Vue({
  setup() {
    provideStore();
  },
  store,
  render: h => h(App)
}).$mount("#app");
