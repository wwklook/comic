<template>
  <div class="tabbar_item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
};
</script>


<style>
.tabbar_item {
  height: 59px;
  cursor: pointer;
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tabbar_item img {
  width: 28px;
  height: 28px;
  margin-top: 5px;
  vertical-align: middle;
}
</style>