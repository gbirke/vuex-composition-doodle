import { ref } from "@vue/composition-api";
export function useRef() {
  const awesomeness = ref("On");

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
