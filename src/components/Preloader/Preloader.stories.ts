import Preloader from "./Preloader.vue";

export default {
  title: "Preloader",
  components: {
    Preloader,
  },
};

export const defaultView = () => ({
  components: {
    Preloader,
  },
  template: `
        <Preloader :paragraphs="2" />
    `,
});
