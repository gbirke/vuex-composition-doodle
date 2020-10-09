<template>
  <div>
    <p>
      This is a composition component with with <code>ref</code> state, doesn't
      use Vuex.
    </p>
    <p>
      Awesomeness is <strong>{{ awesomeness }}</strong>
    </p>
    <p><button v-on:click="toggle">Toggle</button></p>
  </div>
</template>

<script>
import { useRef } from "./composition/useRef";

export default {
  setup() {
    return useRef();
  }
};
</script>
