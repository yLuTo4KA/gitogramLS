<template>
  <Topline>
    <template #headline>
      <Header :avatarUrl="loginnedUser.avatarUrl"></Header>
    </template>
    <template #content>
      <ul class="stories__list">
        <li class="stories__item" v-for="user in dbUsers" :key="user.id">
          <User :userInfo="user" vClass="stories" />
        </li>
      </ul>
    </template>
  </Topline>
  <div class="repositories__section">
    <ul class="repositories__list">
      <li class="repositories__item" v-for="user in dbUsers" :key="user">
        <PostItem :user="user">
          <template #repository>
            <Repository :repository="user.posts[0]" />
          </template>
        </PostItem>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Topline } from "../../components/topline";
import { Header } from "../../components/Header";
import dbUsers from "./dbUsers.json";
import { User } from "../../components/User";
import { PostItem } from "../../components/PostItem";
import { Repository } from "../../components/Repository";
export default {
  name: "feeds",
  data() {
    return {
      dbUsers,
      loginnedUser: {
        id: 1293992,
        username: "yLuTo4KA",
        avatarUrl:
          "https://sun9-14.userapi.com/impg/_tbr32K5b8enmy1zeQJtnApEq-STitZ_DZ2VTw/Eq_LzA9Ryds.jpg?size=1000x1000&quality=95&sign=841e637ee9a6209caccadfea9f1daef1&type=album",
      },
    };
  },
  components: {
    Topline,
    Header,
    User,
    PostItem,
    Repository,
  },
};
</script>
<style lang="scss" scoped>
.icon {
  color: red;
  width: 30px;
}
.stories__list {
  padding: 0 0 40px 0;
  overflow: hidden;
  .stories__item {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    & .user {
      flex-direction: column;
      width: 80px;
    }
  }
}
.repositories__section {
  width: 1000px;
  padding: 32px;
  margin: 0 auto;
  .repositories__list {
    flex-direction: column;
    .repositories__item {
      margin-bottom: 25px;
    }
  }
}
</style>
