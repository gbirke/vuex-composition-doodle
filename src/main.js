import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import CompositionAPI from "@vue/composition-api";

Vue.config.productionTip = false;
Vue.use(CompositionAPI);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
