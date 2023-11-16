<template>
  <div class="storyItem">
    <div class="storyItem__avatar">
      <img :src="userInfo.avatar" alt="avatar" />
    </div>
    <div class="storyItem__nickname">
      <h1>{{ userInfo.username }}</h1>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "storyItem",
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>
