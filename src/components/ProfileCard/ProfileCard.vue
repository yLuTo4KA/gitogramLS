<template>
  <div class="profile__card">
    <Avatar
      :avatarUrl="userInfo.avatarUrl"
      vClass="profile"
      class="profile__card-avatar"
    />
    <div class="profile__card-info">
      <div class="profile__login">{{ userInfo.login }}</div>
      <div class="preloading" v-if="!userInfo.repos && !userInfo.following">
        <PreloadRepo class="preloader" type="information" />
      </div>
      <ul class="stats__list" v-else>
        <li class="stats__item">
          <div class="stats__count">{{ userInfo.repos }}</div>
          <router-link class="stats__link" :to="{ name: 'repositories' }">
            <div class="stats__name">repositories</div>
          </router-link>
        </li>
        <li class="stats__item">
          <div class="stats__count">{{ userInfo.following }}</div>
          <router-link class="stats__link" :to="{ name: 'following' }">
            <div class="stats__name">following</div>
          </router-link>
        </li>
      </ul>
      <div class="profile__name">{{ userInfo.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Avatar } from "../Avatar";
import PreloadRepo from "../PreloadRepo/PreloadRepo.vue";

export default {
  components: {
    Avatar,
    PreloadRepo,
  },
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.profile__card {
  display: flex;
  &-avatar {
    margin-right: 20px;
  }
  &-info {
    .profile__login {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .stats__list {
      margin-bottom: 10px;
      .stats__item {
        margin-right: 5px;
        align-items: center;
        &:last-child {
          margin-right: 0;
        }
        .stats__count {
          font-size: 14px;
          font-weight: bold;
          margin-right: 5px;
        }
        .stats__name {
          font-size: 12px;
        }
      }
    }
    .stats__link {
      text-decoration: none;
      &:hover {
        color: #31ae54;
        text-decoration: underline;
      }
    }
    .profile__name {
      font-size: 14px;
      color: #9e9e9e;
    }
  }
}
.preloader {
  width: 100%;
  .preloader__content {
    width: 100%;
  }
}
</style>
