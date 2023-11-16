<template>
  <Topline>
    <template #headline>
      <Header :avatarUrl="loginnedUser.avatarUrl"></Header>
    </template>
    <template #content>
      <ul class="stories__list">
        <li class="stories__item" v-for="user in dbUsers" :key="user">
          <StoryItem :userInfo="user" />
        </li>
      </ul>
    </template>
  </Topline>
</template>
<script lang="ts">
import { Topline } from "../../components/topline";
import { Header } from "../../components/Header";
import dbUsers from "./dbUsers.json";
import { StoryItem } from "../../components/StoryItem";

export default {
  name: "feeds",
  data() {
    return {
      dbUsers,
      loginnedUser: {
        id: 1293992,
        username: "yLuTo4KA",
        avatarUrl:
          "https://vk.com/2ytka2?z=photo297349989_457253992%2Fphoto_feed297349989",
      },
    };
  },
  components: {
    Topline,
    Header,
    StoryItem,
  },
};
</script>
<style lang="scss" scoped>
.icon {
  color: red;
  width: 30px;
}
</style>
