<template>
  <header class="header">
    <a href="#" class="logo">
      <Logo />
    </a>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <a href="#" class="header__nav-item-link">
            <HomeIcon />
          </a>
        </li>
        <li class="header__nav-item">
          <a href="#" class="header__nav-item-link">
            <Avatar :src="loginUser.avatarUrl" />
          </a>
        </li>
        <li class="header__nav-item">
          <a href="#" class="header__nav-item-link">
            <ExitIcon />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Logo from "./icons/LogoIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import ExitIcon from "./icons/ExitIcon.vue";
import Avatar from "./items/AvatarItem.vue";
export default {
  data() {
    return {
      loginUser: {
        id: 992392111,
        username: "2ytka2",
        avatarUrl:
          "https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg",
      },
    };
  },
  components: {
    Logo,
    HomeIcon,
    ExitIcon,
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 175px;
    height: 35px;
  }
}

.header__nav {
  &-item {
    margin-right: 25px;
    &:last-child {
      margin-right: 0;
    }
    &-link {
      display: flex;
      justify-content: center;
      align-content: center;
      width: 37px;
      height: 37px;
      overflow: hidden;
    }
    &-profile-img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
