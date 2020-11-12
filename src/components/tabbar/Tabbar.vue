<template>
  <div class="tabbar" :class="{ trans: isTransparent }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  props: {
    isTransparent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 59px;
  background-color: #f5f5f5;
  display: flex;
}

.trans {
  background-color: #00000090;
}
</style>