<template>
  <div class="following profile-content">
    <div class="content__header">
      <h1 class="content__title">Following</h1>
      <div class="content__count">{{ following?.length }}</div>
    </div>
    <div class="content__main">
      <div class="content__loading" v-if="following === null">
        <Spinner />
      </div>
      <ul class="starred__list content__list" v-else>
        <li class="starred__item" v-for="item in following" :key="item.id">
          <FollowingItem
            :username="item.login"
            :userType="item.type"
            :avatarUrl="item.avatar_url"
            @unfollow="unfollow(item.login)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Spinner from "@/components/Spinner/Spinner.vue";
import FollowingItem from "@/components/FollowingItem/FollowingItem.vue";

const store = useStore();

const user = computed(() => store.state.auth.user);
const following = computed(() => store.state.profile.following);
const unfollow = (login) => {
  store.dispatch("profile/unFollow", login);
};

onMounted(() => {
  if (user.value === null) {
    store.dispatch("auth/getUserData");
  }
  if (following.value === null) {
    store.dispatch("profile/getUserFollowing");
  }
});
</script>

<style lang="scss" scoped>
@import "../../../assets/css/blocks/ProfileContent";

.starred__item {
  margin-bottom: 32px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  &:last-child {
    margin-bottom: 125px;
  }
}
</style>
