<template>
  <div class="post">
    <div class="post__user">
      <User :userInfo="user" vClass="posts" />
    </div>
    <div class="post__content">
      <slot name="repository" />
    </div>
    <div class="post__issues" v-if="user.posts[0].issues">
      <Issues :comments="user.posts[0].issues" />
    </div>
    <time datetime="" class="post__date">{{ user.posts[0].date }}</time>
  </div>
</template>
<script lang="ts">
import { User } from "../User";
import { Issues } from "../Issues";
export default {
  name: "PostItem",
  components: {
    User,
    Issues,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.post {
  width: 100%;
  &__user {
    margin-bottom: 15px;
  }
  &__content {
    margin-bottom: 15px;
  }
  &__issues {
    margin-bottom: 10px;
  }
  &__date {
    font-size: 12px;
    color: #00000066;
  }
}
</style>
