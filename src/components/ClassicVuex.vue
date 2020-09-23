<template>
  <div>
    <p>
      This is a classic Vue component using the Vuex store
    </p>
    <p>
      Awesomeness is <strong>{{ awesomeness }}</strong>
    </p>
    <p v-on:click="toggle">Toggle</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["awesomeness"]),
  methods: {
    toggle() {
      this.$store.commit("toggleAwesomeness");
    }
  }
};
</script>
