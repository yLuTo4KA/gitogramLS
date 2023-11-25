import { PostItem } from "./";
import { Repository } from "../Repository";

export default {
  title: "PostIem",
  components: {
    PostItem,
    Repository,
  },
};

export const defaultView = () => ({
  components: {
    PostItem,
    Repository,
  },
  data() {
    return {
      postData: {
        username: 'username',
        avatarUrl: 'https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg',
        postDate: '19 November',
        issues: [
          {
            "id": 1,
            "username": "John",
            "text": "Enable performance measuring in production, at the user's request"
          },
          {
            "id": 2,
            "username": "Morgan",
            "text": "It's Impossible to Rename an Inherited Slot"
          },
          {
            "id": 3,
            "username": "Alex",
            "text": "transition-group with flex parent causes removed items to fly"
          },
          {
            "id": 4,
            "username": "Alex",
            "text": "transition-group with flex parent causes removed items to fly"
          },
          {
            "id": 5,
            "username": "Alex",
            "text": "transition-group with flex parent causes removed items to fly"
          },
          {
            "id": 6,
            "username": "Alex",
            "text": "transition-group with flex parent causes removed items to fly"
          },
          {
            "id": 7,
            "username": "Alex",
            "text": "transition-group with flex parent causes removed items to fly"
          }
        ]
      },
      repositoryData: {
        "title": "Vue.js",
        "text": "JavaScript framework for building interactive web applications ⚡",
        "stats": {
          "stars": 33,
          "forks": 4
        },
      },
    }
  },
  template: `
    <ul class="posts__list">
        <li class="posts__item" v-for="i in 1" :key="i">
            <PostItem :postData="postData">
                <template #repository>
                    <Repository :repositoryData="repositoryData" />
                </template>
            </PostItem>
        </li>
    </ul>
    `,
});
defaultView.story = {
  name: "Стандартное отображение",
};
