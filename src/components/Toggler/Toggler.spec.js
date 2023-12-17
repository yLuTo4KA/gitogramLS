import { shallowMount } from "@vue/test-utils";
import Toggler from "./Toggler.vue";

describe("Toggler Component", () => {
  it("При клике надпись изменилась", async () => {
    const wrapper = shallowMount(Toggler);

    await wrapper.setProps({
      togglerText: "issues",
    });
    expect(wrapper.find(".btn__text").text()).toBe("Show issues");

    await wrapper.find("button").trigger("click");

    expect(wrapper.find(".btn__text").text()).toBe("Hide issues");
  });
});
