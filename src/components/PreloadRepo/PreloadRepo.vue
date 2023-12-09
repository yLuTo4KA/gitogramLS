<template>
  <div class="preloader">
    <div
      class="preloader__content"
      v-for="item in preloadCount"
      :key="item"
    ></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    preloadCount: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__content {
    margin-bottom: 15px;
    position: relative;
    overflow: hidden;
    background: #f9f9f9;
    height: 35px;
    width: 50%;
    border-radius: 5px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      background: rgb(152, 152, 152);
      background: radial-gradient(
        circle,
        rgb(232, 232, 232) 10%,
        rgba(255, 255, 255, 0) 100%
      );
      width: 50%;
      height: 100%;
      animation: load 1s infinite linear;
    }
    &:nth-child(odd) {
      width: 40%;
    }
  }
}

@keyframes load {
  from {
    left: -50%;
  }
  to {
    left: 100%;
  }
}
</style>
