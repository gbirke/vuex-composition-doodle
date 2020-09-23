<template>
  <div id="app">
    <vuex-test1 />
    <vuex-test2 />
    <CompositionTest />
  </div>
</template>

<script>
import { provideStore } from "./components/composition/useStoreInjection";
import CompositionTest from "./components/CompositionTest.vue";
import VuexTest1 from "./components/VuexTest1.vue";
import VuexTest2 from "./components/VuexTest2.vue";

export default {
  name: "App",
  setup() {
    provideStore();
  },
  components: {
    CompositionTest,
    VuexTest1,
    VuexTest2
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

#app div {
  margin-top: 20px;
  border-bottom: 2px dotted lightblue;
}
</style>
