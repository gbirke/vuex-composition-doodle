import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import CompositionAPI from "@vue/composition-api";
import VuexTest1 from "@/components/VuexTest1.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(CompositionAPI);

describe("VuexTest1.vue", () => {
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
    const wrapper = shallowMount(VuexTest1, {
      localVue,
      store
    });

    expect(wrapper.find("strong").text()).toMatch("On");
  });

  it("triggers mutation on click store state", () => {
    const wrapper = shallowMount(VuexTest1, {
      localVue,
      store
    });

    wrapper.find("button").trigger("click");
    expect(mutations.toggleAwesomeness).toHaveBeenCalled();
  });
});
