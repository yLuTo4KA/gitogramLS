<template>
  <div class="wrapper">
    <Topline>
      <template #headline>
        <Header :avatar-url="user?.avatar_url" />
      </template>
      <template #content>
        <ProfileCard
          class="profile__info-card profile__info-card--ipad --ipad"
          :userInfo="{
            avatarUrl: user?.avatar_url,
            login: user?.login,
            repos: user?.public_repos,
            following: user?.following,
            name: user?.name,
          }"
        />
      </template>
    </Topline>
    <div class="x-container">
      <div class="profile">
        <div class="profile__info --desktop">
          <h2 class="profile__info-title">My profile</h2>
          <ProfileCard
            class="profile__info-card"
            :userInfo="{
              avatarUrl: user?.avatar_url,
              login: user?.login,
              repos: user?.public_repos,
              following: user?.following,
              name: user?.name,
            }"
          />
        </div>
        <div class="profile__content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Topline } from "@/components/topline";
import { Header } from "@/components/Header";
import ProfileCard from "@/components/ProfileCard/ProfileCard.vue";

import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();
const user = computed(() => store.state.auth.user);

onMounted(async () => {
  if (user.value === null) {
    await store.dispatch("auth/getUserData");
  }
});
console.log(user);
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  overflow: hidden;
}
.profile {
  height: 100%;
  display: flex;
  &__info {
    height: 100%;
    border-right: 1px solid #d3d3d3;
    flex: 1;
    padding: 40px 0;
    &-card {
      margin-right: 10px;
      &--ipad {
        margin-bottom: 40px;
      }
    }
    &-title {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
  &__content {
    flex: 2;
  }
}
.--ipad {
  display: none;
}
@media screen and (max-width: 768px) {
  .--ipad {
    display: flex;
  }
  .--desktop {
    display: none;
  }
}
</style>
