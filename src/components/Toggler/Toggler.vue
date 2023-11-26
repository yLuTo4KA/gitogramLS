<template>
  <button
    :class="['btn', 'btn__toggler', { '--active': isOpened }]"
    @click="changeState"
  >
    <div class="btn__text">
      {{ isOpened ? "Hide " + togglerText : "Show " + togglerText }}
    </div>
    <div class="btn__icon">
      <Icon name="Arrow" />
    </div>
  </button>
</template>

<script lang="ts">
import { Icon } from "../icons";
export default {
  name: "Toggler",
  emits: ["toggle"],
  data() {
    return {
      isOpened: false,
    };
  },
  components: {
    Icon,
  },
  props: {
    togglerText: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeState() {
      this.isOpened = !this.isOpened;
      this.$emit("toggle", this.isOpened);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  &__toggler {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    @media screen and (max-width: 376px) {
      font-size: 12px;
    }
    &.--active {
      .btn__icon {
        rotate: 180deg;
      }
    }
  }
  &__text {
    margin-right: 2.5px;
  }
  &__icon {
    width: 16px;
  }
}
</style>
