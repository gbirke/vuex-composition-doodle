import Vue from "vue";
import CompositionAPI, { ref } from "@vue/composition-api";

Vue.use(CompositionAPI);

const awesomeness = ref("On");

export function useRef() {
  function toggle() {
    if (awesomeness.value === "On") {
      awesomeness.value = "Off";
      return;
    }
    awesomeness.value = "On";
  }

  return {
    awesomeness,
    toggle
  };
}
