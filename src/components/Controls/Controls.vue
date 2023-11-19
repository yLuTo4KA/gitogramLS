<template>
  <div class="controls">
    <button class="btn">
      <div class="btn__icon star">
        <Icon name="Star" />
      </div>
      <div class="btn__title">Star</div>
    </button>
    <div class="btn__count">{{ repoStats.stars }}</div>
    <button class="btn">
      <div class="btn__icon fork">
        <Icon name="Fork" />
      </div>
      <div class="btn__title --bold">Fork</div>
    </button>
    <div class="btn__count">{{ repoStats.forks }}</div>
  </div>
</template>
<script lang="ts">
import { Icon } from "../icons";

export default {
  name: "Controls",
  components: {
    Icon,
  },
  props: {
    repoStats: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.controls {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  height: 28px;
  border-radius: 6px;
  border: 1px solid #1b1f232a;
  .btn {
    display: flex;
    align-items: center;
    height: 100%;
    color: #24292e;
    padding: 0 10px;
    border-right: 1px solid #1b1f232a;
    border-left: 1px solid #1b1f232a;
    &:hover {
      .btn__icon {
        color: #31ae54;
      }
    }
    &:first-child {
      border-left: none;
    }
    &__icon {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
    &__title {
      &.--bold {
        font-size: 12px;
        font-weight: 600;
      }
    }
    &__count {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 5px;
      border-right: 1px solid #1b1f232a;
      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
