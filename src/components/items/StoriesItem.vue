<template>
  <a href="#" class="stories-item-link">
    <div class="avatar-wrapper">
      <Avatar :avatarUrl="avatarUrl" />
    </div>
    <div class="username">{{ username }}</div>
  </a>
</template>

<script lang="ts">
import Avatar from "./AvatarItem.vue";
export default {
  components: {
    Avatar,
  },
  props: {
    avatarUrl: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
$purple: #a6328d;
.avatar {
  border-radius: 50%;
  overflow: hidden;
  &-wrapper {
    widows: 92px;
    height: 92px;
    border-radius: 50%;
    border: 2px solid $purple;
    padding: 5px;
  }
}
</style>
