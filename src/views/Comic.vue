<template>
  <div class="view" @scroll="scrollEvent">
    <view-port v-if="data.length != 0" :data="data[index].current_chapter" />
    <div
      class="all_pic"
      v-for="val in data"
      :key="val.current_chapter.chapter_newid"
      @click="showViewPort"
    >
      <div class="pic" v-for="item of val.current_chapter.end_num" :key="item">
        <img
          :src="
            base_url +
            val.current_chapter.chapter_domain +
            val.current_chapter.rule.replace('$$', item) +
            '-kmh.low.webp'
          "
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { get_chapterinfo } from "@/network/caricature.js";
import { debounce, throttle } from "@/commonjs/utils.js";
import ViewPort from "@/components/ViewPort.vue";

export default {
  name: "Comic",
  components: {
    ViewPort,
  },
  data() {
    return {
      comic_id: "",
      data: [],
      loaded: [],
      top: [0],
      chapter_newid: "",
      index: 0,
      base_url: "https://mhpic.",
      isShowViewPort: false,
    };
  },
  watch: {
    data: {
      handler() {
        if (this.data.length == 1) {
          return;
        }
        let old = this.$el.scrollHeight;
        this.$nextTick(() => {
          this.$el.scrollTop = old;
          this.top.push(old);
        });
      },
      deep: true,
    },
  },
  created() {
    this.$bus.on("prev_chapter", () => {
      if (this.data[this.index].prev_chapter == null) {
        return;
      }
      this.chapter_newid = this.data[this.index].prev_chapter.chapter_newid;
      let loaded_index = this.loaded.indexOf(this.chapter_newid);
      if (loaded_index != -1) {
        this.index -= 1;
        this.$el.scrollTop = this.top[this.index];
      } else {
      }
    });
    this.$bus.on("next_chapter", () => {
      if (this.data[this.index].next_chapter == null) {
        return;
      }
      this.chapter_newid = this.data[this.index].next_chapter.chapter_newid;
      let loaded_index = this.loaded.indexOf(this.chapter_newid);
      if (loaded_index != -1) {
        this.index += 1;
        this.$el.scrollTop = this.top[this.index];
      } else {
        this.get_chapter();
      }
    });
  },
  mounted() {
    if (this.chapter_newid == this.$route.query.chapter_newid) {
      return;
    }
    this.comic_id = this.$route.query.comic_id;
    this.chapter_newid = this.$route.query.chapter_newid;
    this.index -= 1;
    this.get_chapter();
  },
  methods: {
    showViewPort() {
      this.$bus.emit("showViewPort", this.isShowViewPort);
      this.isShowViewPort = !this.isShowViewPort;
    },
    get_chapter(direction = "next") {
      get_chapterinfo(this.comic_id, this.chapter_newid).then((res) => {
        let data = res.data.data;
        if (direction == "next") {
          this.data.push(data);
          this.loaded.push(data.current_chapter.chapter_newid);
          this.index += 1;
        }
        document.title = data.comic_name + data.current_chapter.chapter_name;
      });
    },
    test() {},
    scrollEvent: debounce(function () {
      console.log(1);
      if (this.$el.scrollTop == this.$el.scrollHeight - window.innerHeight) {
        if (this.data[this.index].next_chapter == null) {
          return;
        }
        this.chapter_newid = this.data[this.index].next_chapter.chapter_newid;
        this.get_chapter();
      }
      let index = 0;
      for (let i = 0; i < this.top.length; i++) {
        index = i;
        if (this.$el.scrollTop < this.top[i]) {
          this.index = i - 1;
          return;
        }
      }
      this.index = index;
    }, 500),
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.pic {
  width: 100%;
}

.view {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}
</style>
