import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import CompositionAPI from "@vue/composition-api";
import { provideStore } from "./components/composition/useStoreInjection";

Vue.config.productionTip = false;
Vue.use(CompositionAPI);

new Vue({
  setup() {
    provideStore();
  },
  store,
  render: h => h(App)
}).$mount("#app");
