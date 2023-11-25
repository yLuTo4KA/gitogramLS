<template>
  <div class="comment">
    <div class="comment__username">{{ comment.username }}</div>
    <div class="comment__text">{{ comment.text }}</div>
  </div>
</template>
<script lang="ts">
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.comment {
  display: flex;
  @media screen and (max-width: 376px) {
    font-size: 12px;
  }
  &__username {
    font-weight: 700;
    margin-right: 10px;
  }
}
</style>
