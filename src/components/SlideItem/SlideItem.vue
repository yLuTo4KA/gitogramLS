<template>
  <div class="slide">
    <div class="slide__header">
      <div class="slide__progress-bar">
        <ProgressBar />
      </div>
      <div class="slide__user">
        <User :username="username" :avatarUrl="avatarUrl" vClass="slide-user" />
      </div>
    </div>
    <div class="slide__content" v-html="slideContent">
    </div>
    <div class="slide__footer">
      <Button text="Follow" bg="green" />
    </div>
  </div>
</template>

<script lang="ts">
import { ProgressBar } from "../ProgressBar";
import { User } from "../User";
import { Button } from "../Button";

export default {
  name: "SlideItem",
  components: {
    ProgressBar,
    User,
    Button,
  },
  props: {
    slideUrl: {
      type: String,
      required: false,
    },
    slideContent: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.slide {
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 667px;
  background: #fff;
  border-radius: 5px;
  &__header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    padding: 8px;
  }
  &__progress-bar {
    margin-bottom: 10px;
  }
  &__content {
    flex: 1;
    overflow-y: scroll;
    padding: 20px 25px 10px 15px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
  }
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 50px;
  }
}
</style>
