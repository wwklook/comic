<template>
  <div class="view_port">
    <div class="headers" ref="hd">
      <headers :title="data.chapter_name"> </headers>
    </div>
    <div class="footer" ref="ft">
      <div class="footer_item">
        <img src="@/assets/comic/catalog.svg" />
        <div>目录</div>
      </div>
      <div class="footer_item">
        <img src="@/assets/comic/night.svg" />
        <div>夜间</div>
      </div>
      <div class="footer_item" @click="prev">
        <img src="@/assets/comic/last.svg" />
        <div>上一章</div>
      </div>
      <div class="footer_item" @click="next">
        <img src="@/assets/comic/next.svg" />
        <div>下一章</div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "@/components/common/Headers.vue";
import { debounce, throttle } from "@/commonjs/utils.js";

export default {
  name: "ViewPort",
  components: {
    Headers,
  },
  mounted() {
    this.$bus.on("showViewPort", (isShowViewPort) => {
      if (isShowViewPort) {
        this.$el.firstChild.style.top = "-49px";
        this.$el.lastChild.style.bottom = "-59px";
      } else {
        this.$el.firstChild.style.top = "0";
        this.$el.lastChild.style.bottom = "0";
      }
    });
  },
  props: ["data"],
  methods: {
    prev: throttle(function () {
      this.$bus.emit("prev_chapter");
    }, 1000),
    next: throttle(function () {
      this.$bus.emit("next_chapter");
    }, 1000),
  },
};
</script>

<style scoped>
.view_port {
  color: #fff;
}

.headers {
  top: -49px;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 99;
  background-color: #00000080;
  transition: 0.5s;
}

.footer {
  position: fixed;
  bottom: -59px;
  left: 0;
  right: 0;
  height: 59px;
  background-color: #00000090;
  display: flex;
  transition: 0.5s;
}

.footer_item {
  height: 59px;
  cursor: pointer;
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.footer_item img {
  width: 24px;
  height: 24px;
  margin-top: 8px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>