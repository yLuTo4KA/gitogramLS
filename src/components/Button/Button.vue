<template>
  <button :class="['btn', bg, size]">
    <div class="btn__text">
      <p>{{ text }}</p>
    </div>
    <div class="btn__icon" v-if="icon">
      <Icon :name="icon" />
    </div>
  </button>
</template>
<script lang="ts">
import { Icon } from "../icons";
export default {
  name: "Button",
  components: {
    Icon,
  },
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
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
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
  &__text {
    margin-right: 12px;
  }
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 24px;
  }
}
</style>
