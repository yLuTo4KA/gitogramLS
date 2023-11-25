<template>
  <div class="c-issues">
    <Toggler togglerText="issues" @toggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments__list">
        <template v-for="comment in comments" :key="comment.id"
          ><li class="comments__item" v-if="comment.id <= this.shownCount">
            <Comment :comment="comment" /></li
        ></template>
      </ul>
      <button
        class="comments__show"
        v-if="comments.length > 3"
        @click="showAll"
      >
        {{
          this.shownCount == 3
            ? "Show all " + comments.length + " issues"
            : "Hide issues"
        }}
      </button>
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
      shownCount: 3,
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
    showAll() {
      this.shownCount = this.shownCount == 3 ? this.comments.length : 3;
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
      margin-bottom: 8px;
    }
    &__show {
      color: #9e9e9e;
      @media screen and (max-width: 376px) {
        font-size: 12px;
      }
    }
  }
}
</style>
