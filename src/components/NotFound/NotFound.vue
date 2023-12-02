<template>
  <div class="not-found">
    <div class="icon">
      <Icon name="GitCat" />
    </div>
    <h1 class="title">404 Not Found</h1>
    <button class="btn-back" @click="$router.go(-1)">go back</button>
  </div>
</template>
<script lang="ts">
import { Icon } from "../icons";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: black;
  .icon {
    width: 300px;
    height: 300px;
    margin-bottom: 30px;
  }
  .title {
    font-weight: bold;
    font-size: 36px;
  }
  .btn-back {
    font-size: 36px;
    color: #31ae54;
    text-decoration: underline;
  }
}
</style>
