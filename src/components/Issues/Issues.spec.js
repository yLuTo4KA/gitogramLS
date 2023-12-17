import { mount } from "@vue/test-utils";
import Issues from "./Issues.vue";

describe("Issues Component", () => {
  const comment = {
    user: {
      login: "user-login",
    },
    title: "issues-content",
  };
  it("По клику Выполняется  запрос к серверу", async () => {
    const wrapper = mount(Issues);

    await wrapper.find(".btn__toggler").trigger("click");

    expect(wrapper.emitted().loadIssue.length).toBe(1);
  });
  it("Кол-во элементов соответствует кол-ву пришедших в ответе", async () => {
    const wrapper = mount(Issues);

    await wrapper.setProps({
      comments: {
        list: Array.from({ length: 5 }).map(() => comment),
      },
    });

    expect(wrapper.find(".comments__list").exists()).toBe(false);

    await wrapper.find(".btn__toggler").trigger("click");

    expect(wrapper.findAll(".comments__item").length).toBe(3);

    await wrapper.find(".comments__show").trigger("click");

    expect(wrapper.findAll(".comments__item").length).toBe(5);
  });
  it("Нет повторных запросов", async () => {
    const wrapper = mount(Issues);

    await wrapper.setProps({
      comments: {
        list: Array.from({ length: 5 }).map(() => comment),
      },
    });

    wrapper.find(".btn__toggler").trigger("click");

    expect(wrapper.emitted().loadIssue).toBeUndefined();
  });
});
