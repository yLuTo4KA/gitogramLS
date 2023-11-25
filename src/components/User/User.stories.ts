import { User } from "./";
export default {
  title: "User",
  components: {
    User,
  },
};
export const defaultView = () => ({
  components: {
    User,
  },
  template: `
    <User username="2ytka2" avatarUrl="https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg" />
    `,
});
defaultView.story = {
  name: "Стандартный вид",
};

export const storiesView = () => ({
  components: {
    User,
  },
  template: `
    <User username="2ytka2" avatarUrl="https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg" vClass="stories" />
    `,
});
storiesView.story = {
  name: "В ленте сторисов",
};

export const postsView = () => ({
  components: {
    User,
  },
  template: `
    <User username="2ytka2" avatarUrl="https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg" vClass="posts" />
    `,
});
postsView.story = {
  name: "В посте",
};
