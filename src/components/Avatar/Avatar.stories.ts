import { Avatar } from "./";
export default {
  title: "Avatar",
  components: {
    Avatar,
  },
};

export const defaultView = () => ({
  components: {
    Avatar,
  },
  template: `
    <Avatar avatarUrl="https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg" />
    `,
});
defaultView.story = {
  name: "Стандартный вид",
};

export const storiesView = () => ({
  components: {
    Avatar,
  },
  template: `
  <Avatar vClass="stories" avatarUrl="https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg" />
  `,
});
storiesView.story = {
  name: "Имеется сторис",
};

export const postsView = () => ({
  components: {
    Avatar,
  },
  template: `
  <Avatar vClass="posts" avatarUrl="https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg" />
  `,
});
postsView.story = {
  name: "В посте",
};
