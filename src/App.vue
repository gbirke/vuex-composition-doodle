<template>
  <div id="app">
    <CompositionTest />
    <vue-test1 />
    <vue-test2 />
  </div>
</template>

<script>
import { provideStore } from "./components/composition/useStoreInjection";
import CompositionTest from "./components/CompositionTest.vue";
import VueTest1 from "./components/VuexTest1.vue";
import VueTest2 from "./components/VuexTest2.vue";

export default {
  name: "App",
  setup() {
    provideStore();
  },
  components: {
    CompositionTest,
    VueTest1,
    VueTest2
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
