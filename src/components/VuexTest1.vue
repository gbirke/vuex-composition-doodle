<template>
  <div>
    <p>
      This is a composition component with with Vuex, propagated from parent
      context
    </p>
    <p>
      Awesomeness is <strong>{{ awesomeness }}</strong>
    </p>
    <p v-on:click="toggle">Toggle</p>
  </div>
</template>

<script>
import { useParentStore } from "./composition/useParentStore";

export default {
  setup(_, ctx) {
    return useParentStore(ctx.parent.$store);
  }
};
</script>
