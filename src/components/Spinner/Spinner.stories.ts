import Spinner from "./Spinner.vue";

export default {
  title: "Spinner",
  components: {
    Spinner,
  },
};

export const defaultView = () => ({
  components: {
    Spinner,
  },
  template: `
        <div class="spinner-icon">
            <Spinner />
        </div>
    `,
});
