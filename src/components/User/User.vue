<template>
  <div :class="['user', vClass]">
    <div class="user__avatar">
      <Avatar :avatarUrl="userInfo.avatar" :vClass="vClass" />
    </div>
    <div class="user__username">
      <p>{{ userInfo.username }}</p>
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
    userInfo: {
      type: Object,
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
  display: flex;
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
    }
    & .user__username {
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
