import { Repository } from "./";

export default {
  title: "Repository",
  components: {
    Repository,
  },
};

export const defaultView = () => ({
  components: {
    Repository,
  },
  data() {
    return {
      repositoryData: {
        "title": "Vue.js",
        "text": "JavaScript framework for building interactive web applications ⚡",
        "stats": {
          "stars": 33,
          "forks": 4
        },
      },
    };
  },
  template: `
    <Repository :repositoryData="repositoryData" />
    `,
});
