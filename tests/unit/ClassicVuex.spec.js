import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ClassicVuex from "@/components/ClassicVuex.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ClassicVuex.vue", () => {
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
    const wrapper = shallowMount(ClassicVuex, {
      localVue,
      store
    });

    expect(wrapper.find("strong").text()).toMatch("On");
  });

  it("triggers mutation on click store state", () => {
    const wrapper = shallowMount(ClassicVuex, {
      localVue,
      store
    });

    wrapper.find("button").trigger("click");
    expect(mutations.toggleAwesomeness).toHaveBeenCalled();
  });
});
