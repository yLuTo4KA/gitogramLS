<template>
  <Topline>
    <template #headline>
      <Header :avatarUrl="loginnedUser.avatarUrl"></Header>
    </template>
    <template #content>
      <div class="icon">
        <Icon name="home" />
      </div>
    </template>
  </Topline>
</template>
<script lang="ts">
import { Topline } from "../../components/topline";
import { Header } from "../../components/Header";
import dbUsers from "./dbUsers.json";
import { Icon } from "../../components/icons";

export default {
  name: "feeds",
  data() {
    return {
      dbUsers,
      loginnedUser: {
        id: 1293992,
        username: "yLuTo4KA",
        avatarUrl:
          "https://vk.com/2ytka2?z=photo297349989_457253992%2Fphoto_feed297349989",
      },
    };
  },
  components: {
    Topline,
    Header,
    Icon,
  },
};
</script>
<style lang="scss" scoped>
.icon {
  color: red;
  width: 30px;
}
</style>
