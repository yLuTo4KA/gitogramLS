<template>
  <button :class="['btn', bg, size]">
    <div class="btn__text">
      <p v-if="!loading">{{ text }}</p>
      <Spinner v-else theme="white" />
    </div>
    <div class="btn__icon" v-if="icon">
      <Icon :name="icon" class="btn-icon" />
    </div>
  </button>
</template>
<script lang="ts">
import { Icon } from "../icons";
import Spinner from "../Spinner/Spinner.vue";
export default {
  name: "Button",
  components: {
    Icon,
    Spinner,
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
    loading: {
      type: Boolean,
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
  &.grey {
    background-color: #9e9e9e;
    &:hover {
      background-color: #31ae54;
    }
  }
  &.small {
    width: 115px;
  }
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 24px;
    margin-left: 12px;
  }
}
</style>
