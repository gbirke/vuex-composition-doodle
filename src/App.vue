<template>
  <div id="app">
    <CompositionTest p1="First property" />
  </div>
</template>

<script>
import CompositionTest from "./components/CompositionTest.vue";

export default {
  name: "App",
  components: {
    CompositionTest
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
