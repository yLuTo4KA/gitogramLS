<template>
  <div class="repository">
    <h1 class="repository__title">{{ repository.title }}</h1>
    <div class="repository__desc">
      <p>{{ repository.text }}</p>
    </div>
    <div class="repository__controls">
      <Controls :repoStats="repository.stats" />
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
    repository: {
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
  &__title {
    margin-bottom: 15px;
    font-size: 26px;
    font-weight: 700;
  }
  &__desc {
    margin-bottom: 32px;
    font-size: 14px;
  }
}
</style>
