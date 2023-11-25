import { Controls } from "./";

export default {
  title: "Controls",
  components: {
    Controls,
  },
};

export const defaultView = () => ({
  components: {
    Controls,
  },

  template: `
        <Controls :repoStats="{ 'stars': 32, 'forks': 4 }" />
    `,
});
