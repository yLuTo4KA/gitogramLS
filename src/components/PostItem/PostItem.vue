<template>
  <div class="post">
    <div class="post__user">
      <User
        :username="postData.username"
        :avatarUrl="postData.avatarUrl"
        vClass="posts"
      />
    </div>
    <div class="post__content">
      <slot name="repository" />
    </div>
    <div class="post__issues">
      <Issues :comments="issues" @loadIssue="this.$emit('getIssue')" />
    </div>
    <time datetime="" class="post__date">{{ postData.postDate }}</time>
  </div>
</template>
<script>
import { User } from "../User";
import { Issues } from "../Issues";

export default {
  name: "PostItem",
  components: {
    User,
    Issues,
  },
  props: {
    postData: {
      type: Object,
      required: true,
    },
    issues: {
      type: Array,
      required: false,
    },
  },
  emits: ["getIssue"],
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
    text-transform: uppercase;
    @media screen and (max-width: 376px) {
      font-size: 10px;
    }
  }
}
</style>
