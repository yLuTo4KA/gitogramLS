import { Issues } from "./";

export default {
  title: "Issues",
  components: {
    Issues,
  },
};

export const defaultView = () => ({
  components: {
    Issues,
  },
  data() {
    return {
      comments: [
        {
          id: 1,
          username: "John",
          text: "Enable performance measuring in production, at the user's request",
        },
        {
          id: 2,
          username: "John",
          text: "Enable performance measuring in production, at the user's request",
        },
        {
          id: 3,
          username: "John",
          text: "Enable performance measuring in production, at the user's request",
        },
      ],
    };
  },
  template: `
    <Issues :comments="comments" />
    `,
});

defaultView.story = {
  name: "Стандартное отображение",
};

export const manyValuesView = () => ({
  components: {
    Issues,
  },
  data() {
    return {
      comments: [
        {
          id: 1,
          username: "John",
          text: "Enable performance measuring in production, at the user's request",
        },
        {
          id: 2,
          username: "John",
          text: "Enable performance measuring in production, at the user's request",
        },
        {
          id: 3,
          username: "John",
          text: "Enable performance measuring in production, at the user's request",
        },
        {
          id: 4,
          username: "John",
          text: "Enable performance measuring in production, at the user's request",
        },
        {
          id: 5,
          username: "John",
          text: "Enable performance measuring in production, at the user's request",
        },
      ],
    };
  },
  template: `
    <Issues :comments="comments" />
    `, // Когда значений больше 3, появляется кнопка показать все (кол-во) комментарии
});

manyValuesView.story = {
  name: "Комментариев больше 3х",
};
