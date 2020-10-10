<template>
  <div>
    <p>
      This is a composition component with with Vuex.<br />
      Store is propagated from the root component in the context.
    </p>
    <p>
      Awesomeness is <strong>{{ awesomeness }}</strong>
    </p>
    <p><button v-on:click="toggle">Toggle</button></p>
  </div>
</template>

<script>
import { useStoreFromParam } from "./composition/useStoreFromParam";

export default {
  setup(_, ctx) {
    return useStoreFromParam(ctx.root.$store);
  }
};
</script>
