<template>
  <div class="">
    <headers :title="comic_title"> </headers>
    <img class="img" :src="imgsrc" :alt="comic_title">
    <div class="icon_title">
      <h2>详情</h2>
    </div>
    <p class="describe">{{ describe }}</p>
    <div class="icon_title">
      <h2>目录</h2>
      <div class="pn_icon" @click="sort">
        <i class="positive" :class="{active: isSort}"></i>
        <i class="negative" :class="{active: !isSort}"></i>
      </div>
    </div>

    <ul class="chapter_list">
      <p class="update_status ellipsis">{{ update_status }}</p>
      <li
        class="chapter_item ellipsis"
        v-for="(val, key) in catalog"
        :key="key"
        @click="toComic(val.href)"
      >
        <time class="update">{{ val["update-time"] }}</time>
        {{ val.title }}
      </li>
    </ul>
    <go-top/>
  </div>
</template>

<script>
import Headers from "@/components/common/Headers.vue";
import GoTop from "@/components/common/GoTop.vue";
import { get_chapter } from "@/network/caricature.js";

export default {
  name: "Detail",
  components: {
    Headers,
    GoTop
  },
  data() {
    return {
      comic_id: "",
      catalog: [],
      describe: "加载中...",
      update_status: "加载中...",
      isSort: true,
      comic_title: "漫画",
      imgsrc: "",
    };
  },
  activated() {
    if (this.comic_id == this.$route.query.comic_id) {
      return;
    }
    this.comic_id = this.$route.query.comic_id;
    get_chapter(this.comic_id).then((res) => {
      this.catalog = res.data.catalog;
      this.describe = res.data.describe;
      this.update_status = res.data.update_status;
      this.comic_title = res.data.comic_title;
      this.imgsrc =res.data.imgsrc;
    });
  },
  methods: {
    toComic(href) {
      let h = href.split("/");
      this.$router.push({
        name: "Comic",
        query: { comic_id: h[1], chapter_newid: h[2].slice(0, -5) },
      });
    },
    sort() {
      this.isSort = !this.isSort;
      this.catalog = this.catalog.reverse();
    }
  },
};
</script>

<style scoped>
h2 {
  color: #fff;
  background-color: #66ccff;
  padding: 0 20px 0 5px;
  border-radius: 0 20px 20px 0;
}

.img {
  width: 100%;
  height: auto;
  margin-bottom: 5px;
}

.icon_title {
  display: flex;
}

.pn_icon {
  position: relative;
  margin-left: 5px;
}

.positive {
  position: absolute;
  top: 4px;
  border-bottom: 10px solid #ddd;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.active {
  border-bottom-color: #66ccff !important;
  border-top-color: #66ccff !important;
}

.negative {
  position: absolute;
  bottom: 4px;
  border-top: 10px solid #ddd;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.describe {
  font-size: 15px;
  margin: 2px 15px;
}

.chapter_list {
  width: 100%;
}

.update_status {
  font-size: 14px;
  margin: 2px 15px;
}

.chapter_item {
  font-size: 16px;
  color: #555;
  margin: 10px 15px;
}
</style>
