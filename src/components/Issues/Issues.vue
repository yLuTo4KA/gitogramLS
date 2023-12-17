<template>
  <div class="c-issues">
    <Toggler togglerText="issues" @toggle="toggle" />
    <div class="comments" v-if="shown">
      <div class="preloader" v-if="comments?.state">
        <PreloadRepo :preloadCount="3" />
      </div>
      <ul class="comments__list" v-else>
        <template v-for="(comment, i) in comments?.list" :key="i"
          ><li class="comments__item" v-if="i <= this.shownCount - 1">
            <Comment :comment="comment" /></li
        ></template>
      </ul>
      <button
        class="comments__show"
        v-if="comments?.list?.length > 3"
        @click="showAll"
      >
        {{
          this.shownCount == 3
            ? "Show all " + comments?.list.length + " issues"
            : "Hide issues"
        }}
      </button>
    </div>
  </div>
</template>

<script>
import { Toggler } from "../Toggler";
import { Comment } from "../Comment";
import PreloadRepo from "../PreloadRepo/PreloadRepo.vue";

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
    PreloadRepo,
  },
  props: {
    comments: Object,
  },
  emits: ["loadIssue"],
  methods: {
    toggle(isOpened) {
      this.shown = isOpened;
      if (isOpened && !this.comments?.list) {
        this.$emit("loadIssue");
      }
    },
    showAll() {
      this.shownCount = this.shownCount == 3 ? this.comments?.list.length : 3;
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
