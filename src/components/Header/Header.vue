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
            <Avatar />
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
    width: 37px;
    height: 37px;
    &--avatar {
      border-radius: 50%;
    }
  }
}
</style>
