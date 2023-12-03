import NotFound from "./NotFound.vue";

export default {
  title: "NotFound",
  components: {
    NotFound,
  },
};

export const defaultView = () => ({
  components: {
    NotFound,
  },
  template: `
        <NotFound />
    `,
});
