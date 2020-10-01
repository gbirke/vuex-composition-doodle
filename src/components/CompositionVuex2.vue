<template>
  <div>
    <p>
      This is a composition component with with Vuex, loaded as a singleton in
      the <code>setup</code> method.
    </p>
    <p>
      Awesomeness is <strong>{{ awesomeness }}</strong>
    </p>
    <p><button v-on:click="toggle">Toggle</button></p>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";
import store from "../store";

export default {
  setup() {
    const awesomeness = computed(() => store.state.awesomeness);
    const toggle = () => store.commit("toggleAwesomeness");
    return { awesomeness, toggle };
  }
};
</script>
