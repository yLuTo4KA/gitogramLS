<template>
  <div class="c-topline">
    <div class="x-container">
      <div class="headline">
        <slot name="headline" />
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.c-topline {
  background-color: #fafafa;
  border-bottom: 1px solid #d3d3d3;
}
</style>
