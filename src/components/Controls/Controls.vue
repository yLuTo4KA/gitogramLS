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
    <div class="btn__count --bold">{{ repoStats.forks }}</div>
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
.--bold {
  font-size: 12px;
  font-weight: 600;
  @media screen and (max-width: 376px) {
    font-size: inherit;
    font-weight: normal;
  }
}
.controls {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  height: 28px;
  border-radius: 6px;
  border: 1px solid #1b1f232a;
  @media screen and (max-width: 376px) {
    font-size: 10px;
  }
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
        background-color: #fafbfc;
      }
    }
    &:first-child {
      border-left: none;
    }
    &__icon {
      width: 16px;
      height: 16px;
      margin-right: 5px;
      @media screen and (max-width: 376px) {
        width: 10px;
        height: 10px;
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
