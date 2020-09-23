<template>
  <div id="app">
    <CompositionTest />
    <vue-test1 />
  </div>
</template>

<script>
import CompositionTest from "./components/CompositionTest.vue";
import VueTest1 from "./components/VuexTest1.vue";

export default {
  name: "App",
  components: {
    CompositionTest,
    VueTest1
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
