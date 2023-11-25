import { Header } from "./";

export default {
  title: "Header",
  components: {
    Header,
  },
};

export const defaultView = () => ({
  components: {
    Header,
  },
  template: `
    <Header avatarUrl="https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg"/>`,
});
