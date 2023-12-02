<template>
  <div :class="['progress-bar', { active: active }]">
    <div ref="indicator" class="progress-bar__indicator"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    active: {
      type: Boolean,
    },
  },
  emits: ["onFinish"],
  methods: {
    emitOnFinish() {
      this.$emit("onFinish");
    },
  },
  mounted() {
    this.$refs.indicator.addEventListener("transitionend", this.emitOnFinish);
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener(
      "transitionend",
      this.emitOnFinish
    );
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  height: 2px;
  border-radius: 1px;
  background-color: #cce7c2;
  position: relative;
  overflow: hidden;
  &__indicator {
    position: absolute;
    background-color: #31ae54;
    width: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &.active {
    .progress-bar__indicator {
      width: 100%;
      transition: width 5s linear;
    }
  }
}
</style>
