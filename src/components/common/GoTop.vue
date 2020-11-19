<template>
  <i v-show="this.currentTop >= this.downTop" class="go_top" title="返回顶部" @click="goTop"></i>
</template>

<script>
import { animate } from "@/commonjs/utils.js";

export default {
  name: "GoTop",
  data() {
    return {
      currentTop: document.scrollingElement.scrollTop,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getTop, true);
  },
  props: {
    downTop: {
      type: Number,
      default: window.innerHeight,
    },
  },
  methods: {
    goTop() {
      animate(document.scrollingElement, {scrollTop: 0}, 10)
    },
    getTop() {
      this.currentTop = document.scrollingElement.scrollTop
    },
  },
};
</script>

<style scoped>
.go_top {
  width: 32px;
  height: 32px;
  background: url(~@/assets/top.svg);
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>