<template>
  <div class="spinner" :class="theme">
    <Icon name="loading" />
  </div>
</template>
<script>
import { Icon } from "../icons";

export default {
  components: {
    Icon,
  },
  props: {
    theme: String,
  },
};
</script>
<style lang="scss" scoped>
.spinner {
  width: 44px;
  height: 44px;
  color: #31ae54;
  display: block;
  animation: rotate 1s linear infinite;
}
.white {
  color: white;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
