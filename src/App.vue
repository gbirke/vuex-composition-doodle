<template>
  <div id="app">
    <vuex-classic />
    <vuex-composition1 />
    <vuex-composition2 />
    <CompositionTest />
  </div>
</template>

<script>
import { provideStore } from "./components/composition/useStoreInjection";
import CompositionTest from "./components/CompositionTest.vue";
import VuexClassic from "./components/ClassicVuex.vue";
import VuexComposition1 from "./components/VuexTest1.vue";
import VuexComposition2 from "./components/VuexTest2.vue";

export default {
  name: "App",
  setup() {
    provideStore();
  },
  components: {
    CompositionTest,
    VuexClassic,
    VuexComposition1,
    VuexComposition2
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
