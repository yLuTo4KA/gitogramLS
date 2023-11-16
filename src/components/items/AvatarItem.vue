<template>
  <div class="avatar">
    <img :src="avatarUrl" alt="avatar" class="avatar_img" />
  </div>
</template>
<script type="ts">
export default{
    props: {
        avatarUrl:{
            type: String,
            default: "https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg",
            required: true
        }
    }
}
</script>
<style lang="scss">
.avatar {
  display: flex;
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
</style>
