import { Topline } from "./";
import { Header } from "../Header";
import { User } from "../User";
import dbUsers from "../../pages/feeds/dbUsers.json";

export default {
  title: "Topline",
  components: {
    Topline,
    Header,
    User,
  },
};

export const defaultView = () => ({
  components: {
    Topline,
    Header,
    User,
  },
  data() {
    return {
      dbUsers,
    };
  },
  template: `
    <Topline>
        <template #headline>
            <Header avatarUrl="https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg" />
        </template>
        <template #content>
            <ul class="stories__list"> 
                <li class="stories__item" v-for="i in 5" :key="i">
                    <User username="2tka2" avatarUrl="https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg" vClass="stories" />
                </li>
            </ul>
        </template>
    </Topline>
    `,
});
