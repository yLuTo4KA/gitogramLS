<template>
  <div class="following__item">
    <User :username="username" :avatarUrl="avatarUrl" vClass="following">
      <template #desc>
        <p class="username-desc">{{ userType }}</p>
      </template>
    </User>
    <Button
      :text="'following'"
      :size="'small'"
      @click="
        () => {
          $emit('unfollow');
          loading = true;
        }
      "
      :loading="loading"
    />
  </div>
</template>

<script lang="ts">
import { User } from "../../components/User";
import { Button } from "../../components/Button";
export default {
  emits: ["unfollow"],
  data() {
    return {
      loading: false,
    };
  },
  props: {
    username: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: false,
    },
  },
  components: {
    User,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.following__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.username-desc {
  font-size: 12px;
  color: #9e9e9e;
  margin-top: 5px;
  font-weight: 400;
}
</style>
