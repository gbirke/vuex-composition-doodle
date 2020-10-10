<template>
  <div id="app">
    <div class="example-type example-type--classic">
      <div class="example-type-title">
        "Classic" component with Vuex
      </div>
      <div class="example-type__components">
        <classic-vuex />
      </div>
    </div>

    <div class="example-type example-type--composition">
      <div class="example-type-title">
        Composition API components using Vuex
      </div>
      <div class="example-type__components">
        <composition-vuex1 />
        <composition-vuex2 />
        <composition-vuex3 />
      </div>
    </div>

    <div class="example-type example-type--pure">
      <div class="example-type-title">
        Pure Composition API state management component
      </div>
      <div class="example-type__components">
        <pure-composition />
      </div>
    </div>
  </div>
</template>

<script>
import PureComposition from "./components/PureComposition.vue";
import ClassicVuex from "./components/ClassicVuex.vue";
import CompositionVuex1 from "./components/CompositionVuex1.vue";
import CompositionVuex2 from "./components/CompositionVuex2.vue";
import CompositionVuex3 from "./components/CompositionVuex3.vue";

export default {
  name: "App",
  components: {
    PureComposition,
    ClassicVuex,
    CompositionVuex1,
    CompositionVuex2,
    CompositionVuex3
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
  display: flex;
}

button {
  padding: 8px;
  font-size: 100%;
}

.example-type {
  margin: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  flex: 1 1 0;
}

.example-type--classic {
  border-color: #868614;
}

.example-type--classic .example-type-title {
  background: #c4c441;
}

.example-type--composition {
  border-color: #447912;
}

.example-type--composition .example-type-title {
  background: #74af3a;
  color: white;
}

.example-type--composition .example-type__components div {
  border-bottom: dotted 1px #447912;
}
.example-type--composition .example-type__components div:last-child {
  border-bottom: none;
}

.example-type--pure {
  border-color: #0c534c;
}

.example-type--pure .example-type-title {
  background: #287971;
  color: white;
}

.example-type__components div {
  padding: 5px 10px;
}
</style>
