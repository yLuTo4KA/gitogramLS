<template>
  <div class="c-issues">
    <Toggler togglerText="issues" @toggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments__list">
        <li
          class="comments__item"
          v-for="comment in comments"
          :key="comment.id"
        >
          <Comment :comment="comment" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toggler } from "../Toggler";
import { Comment } from "../Comment";
export default {
  name: "Issues",
  data() {
    return {
      shown: false,
    };
  },
  components: {
    Toggler,
    Comment,
  },
  props: {
    comments: Array,
  },
  methods: {
    toggle(isOpened) {
      this.shown = isOpened;
    },
  },
};
</script>
<style lang="scss" scoped>
.c-issues {
  .comments {
    margin-top: 10px;
    &__list {
      flex-direction: column;
    }
    &__item {
      margin-bottom: 5px;
    }
  }
}
</style>
