<template>
  <div class="repositories profile-content">
    <div class="content__header">
      <h1 class="content__title">Repositories</h1>
      <div class="content__count">{{ user?.public_repos }}</div>
    </div>
    <div class="content__main">
      <div class="content__loading" v-if="repositories === null">
        <Spinner />
      </div>
      <ul class="repositores__list content__list" v-else>
        <li
          class="repositores__item"
          v-for="repo in repositories"
          :key="repo.id"
        >
          <Repository
            :status="repo.follow"
            :repositoryData="{
              title: repo?.name,
              text: repo?.description,
              stats: {
                stars: repo?.stargazers_count,
                forks: repo?.forks,
              },
            }"
            @removeStar="
              () => {
                addStar(repo.owner.login, repo.name);
              }
            "
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Spinner from "@/components/Spinner/Spinner.vue";
import { Repository } from "@/components/Repository";

const store = useStore();

const user = computed(() => store.state.auth.user);
const repositories = computed(() => store.state.profile.repositories);

const addStar = (owner, repo) => {
  store.dispatch("starred/addStar", { owner, repo });
};
onMounted(() => {
  if (user.value === null) {
    store.dispatch("auth/getUserData");
  }
  if (repositories.value === null) {
    store.dispatch("profile/getUserRepos");
  }
});
</script>

<style lang="scss" scoped>
@import "../../../assets/css/blocks/ProfileContent";

.repositores__item {
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 125px;
  }
}
</style>
