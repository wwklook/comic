<template>
  <div class="search">
    <div class="result_header">
      <img class="back" src="@/assets/return.svg" @click="back" />
      <span class="hhh">{{ keyword }}</span>
      <div>人气</div>
    </div>
    <ul class="caricature">
      <li class="item" v-for="(val, key) in result.data" :key="key" @click="toDetail(val.comic_id)">
        <div class="photo">
          <img
            class="cover"
            :src="
              'https://image.yqmh.com/mh/' + val.comic_id + '.jpg-300x400.webp'
            "
            :alt="val.comic_name"
          />
          <span class="last_chapter_name ellipsis">{{
            val.last_chapter_name
          }}</span>
        </div>
        <p class="title ellipsis">{{ val.comic_name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { search_cartoon } from "@/network/caricature.js";

export default {
  name: "search-view",
  data() {
    return {
      keyword: "搜索",
      result: [],
    };
  },
  created() {
    this.keyword = this.$route.query.keyword;
    search_cartoon(this.keyword).then((res) => {
      this.result = res.data.data;
    });
  },
  methods: {
    back() {
      this.$router.back();
    },
    toDetail(comic_id) {
      this.$router.push({
        name: "Detail",
        query: { comic_id },
      });
    },
  },
};
</script>


<style scoped>
.result_header {
  height: 45px;
  position: relative;
  display: flex;
  color: #66ccff;
  margin: 0 10px;
  justify-content: space-between;
  align-items: center;
}

.caricature {
  height: calc(100vh - 45px);
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  overflow: scroll;
}

.item {
  width: 33.33%;
  padding: 5px;
  box-sizing: border-box;
}

.title {
  color: #121111;
}

.photo {
  position: relative;
  width: 100%;
}

.last_chapter_name {
  width: 100%;
  text-align: right;
  position: absolute;
  bottom: 5px;
  right: 3px;
  font-size: 14px;
  color: #fff;
}

.cover {
  width: 100%;
}

.back {
  width: 28px;
  height: 28px;
}

.box {
  width: 100%;
  height: 24px;
  margin: 0 18px;
  padding-left: 10px;
  font-size: 16px;
  border-color: #66ccff;
  border-radius: 14px;
  outline: none;
}
</style>