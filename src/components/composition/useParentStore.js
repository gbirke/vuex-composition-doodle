import { computed } from "@vue/composition-api";
export function useParentStore(store) {
  const awesomeness = computed(() => store.state.awesomeness);
  const toggle = () => store.commit("toggleAwesomeness");
  return { awesomeness, toggle };
}
