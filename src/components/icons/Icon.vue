<template>
  <component :is="name" />
</template>

<script lang="ts">
import * as icons from "./variants";
export default {
  name: "Icon",
  components: {
    ...icons,
  },
  props: {
    name: {
      type: String,
      required: true,
      validator(value: string) {
        return Object.keys(icons).includes(value);
      },
    },
  },
};
</script>
