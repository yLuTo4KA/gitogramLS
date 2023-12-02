import { ProgressBar } from "./";

export default {
  title: "ProgressBar",
  components: {
    ProgressBar,
  },
  argTypes: {
    onFinish: {
      action: "onFinish",
      description: "Finished",
    },
  },
};

export const defaultView = (args) => ({
  components: {
    ProgressBar,
  },
  data() {
    return {
      args,
    };
  },
  template: `
        <ProgressBar @onFinish="args.onFinish" />
    `,
});
