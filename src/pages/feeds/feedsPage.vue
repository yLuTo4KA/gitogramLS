<template>
  <Topline>
    <template #headline>
      <Header :avatarUrl="loginnedUser.avatarUrl"></Header>
    </template>
    <template #content>
      <Swiper
        class="stories__list"
        :freeMode="true"
        :slides-per-view="'auto'"
        :space-between="0"
        :modules="modules"
      >
        <SwiperSlide
          class="stories__item"
          v-for="user in dbUsers"
          :key="user.id"
        >
          <User
            :username="user.username"
            :avatarUrl="user.avatar"
            vClass="stories"
          />
        </SwiperSlide>
      </Swiper>
    </template>
  </Topline>
  <div class="repositories__section">
    <ul class="repositories__list">
      <li
        class="repositories__item"
        v-for="user in responseData"
        :key="user.id"
      >
        <PostItem :postData="getFeedData(user).postData">
          <template #repository>
            <Repository :repositoryData="getFeedData(user).repositoryData" />
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
import * as api from "../../api";
import { PostItem } from "../../components/PostItem";
import { Repository } from "../../components/Repository";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
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
      responseData: [],
    };
  },
  components: {
    Topline,
    Header,
    User,
    PostItem,
    Repository,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode],
    };
  },
  methods: {
    getFeedData(item) {
      return {
        postData: {
          username: item.owner.login,
          avatarUrl: item.owner.avatar_url,
          postDate: item.created_at,
          issues: item.issue_comment_url,
        },
        repositoryData: {
          title: item.name,
          text: item.description,
          stats: {
            stars: item.stargazers_count,
            forks: item.forks,
          },
        },
      };
    },
  },
  async created() {
    try {
      const { data } = await api.trandings.getTrandings();
      this.responseData = data.items;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
<style lang="scss" scoped>
.icon {
  color: red;
  width: 30px;
}
.swiper-slide {
  width: auto;
}
.stories__list {
  padding: 0 0 40px 0;
  overflow: hidden;
  @media screen and (max-width: 376px) {
    padding: 0 0 10px 0;
  }
  .stories__item {
    margin-right: 31px;
    @media (max-width: 768px) {
      margin-right: 15px;
    }
    @media screen and (max-width: 376px) {
      margin-right: 10px;
    }
    &:last-child {
      margin-right: 0;
    }
    & .user {
      flex-direction: column;
    }
  }
}
.repositories__section {
  max-width: 1000px;
  width: 100%;
  padding: 0 10px;
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
