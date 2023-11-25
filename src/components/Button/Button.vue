<template>
  <button :class="['btn', bg, size]">
    <div class="btn__text">
      <p>{{ text }}</p>
    </div>
  </button>
</template>
<script lang="ts">
export default {
  name: "Button",
  props: {
    bg: {
      type: String,
      required: false,
      default: "green",
    },
    size: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 270px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
  &.green {
    background-color: #31ae54;
    &:hover {
      background-color: #9e9e9e;
    }
  }
  &.small {
    width: 115px;
  }
}
</style>
