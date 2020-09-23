<template>
  <div>
    <p>
      This is a composition component with with Vuex, injected in main Component
    </p>
    <p>
      Awesomeness is <strong>{{ awesomeness }}</strong>
    </p>
    <p v-on:click="toggle">Toggle</p>
  </div>
</template>

<script>
import { useInjectedStore } from "./composition/useStoreInjection";

export default {
  setup() {
    return useInjectedStore();
  }
};
</script>
