import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import CompositionAPI from "@vue/composition-api";
import CompositionVuex3 from "@/components/CompositionVuex3.vue";
import { StoreSymbol } from "@/components/composition/useStoreInjection";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(CompositionAPI);

describe("CompositionVuex3.vue", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      toggleAwesomeness: jest.fn()
    };
    store = new Vuex.Store({
      state: {
        awesomeness: "On"
      },
      mutations
    });
  });

  it("renders store state", () => {
    const wrapper = shallowMount(CompositionVuex3, {
      localVue,
      provide: { [StoreSymbol]: store }
    });

    expect(wrapper.find("strong").text()).toMatch("On");
  });

  it("triggers mutation on click store state", () => {
    const wrapper = shallowMount(CompositionVuex3, {
      localVue,
      provide: { [StoreSymbol]: store }
    });

    wrapper.find("button").trigger("click");
    expect(mutations.toggleAwesomeness).toHaveBeenCalled();
  });
});
