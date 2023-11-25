import { Comment } from "./";

export default {
  title: "Comment",
  components: {
    Comment,
  },
};

export const defaultView = () => ({
  components: {
    Comment,
  },
  data() {
    return {
      comment: {
        id: 1,
        username: "2ytka2",
        text: "Hello text",
      },
    };
  },
  template: `
                <Comment :comment="comment" />
    `,
});
