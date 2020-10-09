import { watch } from "@vue/composition-api";
import { useRef } from "./components/composition/useRef";

// This is a "synchronization layer" between pure composition API state and the store
// It keeps some internal state to avoid an endless loop between the watcher and the vuex plugin

export function synchronizeAwesomeness(store) {
  const { awesomeness, toggle } = useRef();
  let inWatcher = false;
  store.subscribe(mutation => {
    if (mutation.type === "toggleAwesomeness" && !inWatcher) {
      toggle();
    }
  });

  watch(awesomeness, newAwesomness => {
    if (newAwesomness !== store.state.awesomeness) {
      inWatcher = true;
      store.commit("toggleAwesomeness");
      inWatcher = false;
    }
  });
}
