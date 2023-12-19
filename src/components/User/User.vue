<template>
  <div :class="['user', vClass]">
    <div class="user__avatar">
      <Avatar :avatarUrl="avatarUrl" :vClass="vClass" />
    </div>
    <div class="user__username">
      <p>{{ username }}</p>
      <slot name="desc" />
    </div>
  </div>
</template>
<script lang="ts">
import { Avatar } from "../Avatar";
export default {
  name: "User",
  components: {
    Avatar,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    vClass: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.user {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  overflow: hidden;

  &.stories {
    flex-direction: column;
  }
  &.posts {
    & .user__avatar {
      margin-right: 15px;
      @media screen and (max-width: 376px) {
        margin-right: 10px;
      }
    }
    & .user__username {
      font-weight: bold;
      font-size: 18px;
      @media screen and (max-width: 376px) {
        font-size: 16px;
      }
    }
  }
  &.slide-user {
    & .user__avatar {
      margin-right: 12px;
    }
    & .user__username {
      font-weight: 700;
    }
  }
}
.following {
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 376px) {
    font-size: 14px;
  }
}
</style>
