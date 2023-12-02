<template>
  <div class="preloader">
    <div class="preloader__maincontent"></div>
    <div class="preloader__subcontent" v-for="i in paragraphs" :key="i">
      <div class="subcontent"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    paragraphs: {
      type: Number,
      required: false,
      default: 1,
    },
  },
};
</script>
<style lang="scss" scoped>
.preloader {
  &__maincontent {
    background-color: #dedede;
    height: 136px;
    border-radius: 5px;
    margin-bottom: 25px;
  }
  &__subcontent {
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0;
    }
    &::before,
    &::after,
    .subcontent {
      content: "";
      display: flex;
      flex-direction: column;
      background-color: #dedede;
      margin-bottom: 8px;
      border-radius: 5px;
      height: 14px;
    }
    &::before {
      width: 60%;
    }
    .subcontent {
      width: 75%;
    }
    &::after {
      width: 50%;
    }
  }
}
</style>
