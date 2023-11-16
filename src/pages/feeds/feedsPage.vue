<template>
  <section class="section section-header">
    <HeaderComponent />
    <div class="stories">
      <ul class="stories__list">
        <li class="stories__item" v-for="user in dbUsers" :key="user">
          <stories-item :avatarUrl="user.avatar" :username="user.username" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import HeaderComponent from "../../components/HeaderComponent.vue";
import dbUsers from "./dbUsers.json";
import StoriesItem from "../../components/items/StoriesItem.vue";
export default {
  data() {
    return {
      dbUsers,
    };
  },
  components: {
    HeaderComponent,
    StoriesItem,
  },
};
</script>
<style lang="scss">
.section {
  &-header {
    width: 1200px;
    margin: 0 auto;
    padding: 45px 0px;
  }
}
.header {
  margin-bottom: 25px;
}
.stories {
  overflow: hidden;
  &__item {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
