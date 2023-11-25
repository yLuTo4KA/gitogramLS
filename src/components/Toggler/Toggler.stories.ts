import { Toggler } from "./";

export default {
  title: "Toggler",
  components: {
    Toggler,
  },
};

export const defaultView = () => ({
  components: {
    Toggler,
  },
  template: `
    <Toggler togglerText="issues"/>
    `,
});
