<template>
  <header class="header">
    <button class="header__logo">
      <Icon name="Logo" />
    </button>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <button class="header__btn">
            <Icon name="Home" />
          </button>
        </li>
        <li class="header__nav-item">
          <button class="header__btn header__btn--avatar">
            <Avatar :avatarUrl="avatarUrl" />
          </button>
        </li>
        <li class="header__nav-item">
          <button class="header__btn">
            <Icon name="Exit" />
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts">
import { Icon } from "../icons";
import { Avatar } from "../Avatar";
export default {
  name: "Navbar",
  components: {
    Icon,
    Avatar,
  },
  props: {
    avatarUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0;

  &__logo {
    width: 175px;
    color: #292929;
    @media (max-width: 376px) {
      width: 100px;
    }
  }
  &__nav {
    &-item {
      margin-right: 25px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__btn {
    width: 40px;
    height: 40px;
    @media (max-width: 768px) {
      width: 37px;
      height: 37px;
    }
    @media (max-width: 376px) {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
