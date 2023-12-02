<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <div class="header__content">
          <button class="header__logo" @click="$router.push('/')">
            <Icon name="logo" />
          </button>
          <button class="header__close" @click="$router.push('/')">
            <Icon name="close" />
          </button>
        </div>
      </div>
    </header>
    <div class="slider__wrapper">
      <StoriesSlider />
    </div>
  </div>
</template>
<script lang="ts">
import { Icon } from "../../components/icons";
import StoriesSlider from "../../components/StoriesSlider/StoriesSlider.vue";

export default {
  components: {
    Icon,
    StoriesSlider,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: #101010;
  height: 100vh;
}
.header {
  padding: 45px 0;

  @media screen and (max-width: 376px) {
    padding: 15px 0;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    width: 175px;
    color: white;
  }
  &__close {
    width: 23px;
    color: white;
  }
}
</style>
