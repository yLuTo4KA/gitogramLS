<template>
  <div class="repository">
    <h1 class="repository__title">{{ repositoryData.title }}</h1>
    <div class="repository__desc">
      <p>{{ repositoryData.text }}</p>
    </div>
    <div class="repository__controls">
      <Controls :repoStats="repositoryData.stats" />
    </div>
  </div>
</template>
<script lang="ts">
import { Controls } from "../Controls";
export default {
  name: "Repository",
  components: {
    Controls,
  },
  props: {
    repositoryData: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.repository {
  padding: 24px 40px 24px 20px;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px 0px #00000012;
  border-radius: 10px;
  word-wrap: break-word;
  &__title {
    margin-bottom: 15px;
    font-size: 26px;
    font-weight: 700;
    @media screen and (max-width: 376px) {
      font-size: 20px;
      margin-bottom: 8px;
    }
  }
  &__desc {
    margin-bottom: 32px;
    font-size: 14px;
    @media screen and (max-width: 376px) {
      font-size: 12px;
      margin-bottom: 15px;
    }
  }
}
</style>
