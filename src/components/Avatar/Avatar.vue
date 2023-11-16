<template>
  <div class="avatar">
    <img :src="avatarUrl" alt="avatar" />
  </div>
</template>
<script lang="ts">
export default {
  name: "Avatar",
  props: {
    avatarUrl: {
      type: String,
      default:
        "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png",
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
}
</style>
