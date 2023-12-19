<template>
  <div :class="['avatar', vClass]">
    <img :src="avatarUrl" alt="avatar" />
  </div>
</template>
<script lang="ts">
export default {
  name: "Avatar",
  props: {
    avatarUrl: {
      type: String,
      default:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
    },
    vClass: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
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
  & img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
    object-fit: cover;
  }
}
.stories {
  border: 2px solid #a6328d;
  padding: 4px;
  width: 92px;
  height: 92px;
  transition: border 0.1s;
  margin-bottom: 10px;
  @media screen and (max-width: 376px) {
    width: 72px;
    height: 72px;
  }
  &:hover {
    border: 0px;
  }
}
.posts {
  width: 44px;
  height: 44px;
  @media screen and (max-width: 376px) {
    width: 35px;
    height: 35px;
  }
}
.slide {
  width: 32px;
  height: 32px;
}

.profile {
  width: 90px;
  height: 90px;
}
.following {
  width: 72px;
  height: 72px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    width: 66px;
    height: 66px;
    margin-right: 15px;
  }
  @media screen and (max-width: 376px) {
    width: 56px;
    height: 56px;
    margin-right: 15px;
  }
}
</style>
