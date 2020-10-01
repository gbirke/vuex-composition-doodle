<template>
  <div id="app">
    <classic-vuex />
    <composition-vuex1 />
    <composition-vuex2 />
    <pure-composition />
  </div>
</template>

<script>
import { provideStore } from "./components/composition/useStoreInjection";
import PureComposition from "./components/PureComposition.vue";
import ClassicVuex from "./components/ClassicVuex.vue";
import CompositionVuex1 from "./components/CompositionVuex1.vue";
import CompositionVuex2 from "./components/CompositionVuex2.vue";

export default {
  name: "App",
  setup() {
    provideStore();
  },
  components: {
    PureComposition,
    ClassicVuex,
    CompositionVuex1,
    CompositionVuex2
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
