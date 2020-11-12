<template>
  <div class="search" ref="search">
    <div class="search_area">
      <img class="back" src="@/assets/return.svg" @click="back" />
      <input
        class="box"
        type="text"
        name="word"
        placeholder="搜索漫画名或者作者"
        v-model="keyword"
      />
      <i class="icon" @click="search"></i>
    </div>

    <h3 class="hhh">热门搜索</h3>
    <div class="hots">
      <span class="word" v-for="(val, key) in hotsword" :key="key" @click="toDetail(val.comic_id)">
        {{ val.comic_name }}</span>
    </div>
  </div>
</template>

<script>
import { get_hot_search } from "@/network/caricature.js";

export default {
  name: "Search",
  data() {
    return {
      hotsword: "",
      keyword: ""
    };
  },
  components: {},
  activated() {
    if (this.hotsword != ""){return}
    get_hot_search().then((res) => {
      this.hotsword = res.data.data;
    });
  },
  methods: {
    back() {
      this.$refs.search.style.left = "100vw";
    },
    search(){
      if(this.keyword != ""){
        this.$router.push({
          name: 'Search',
          query: { keyword: this.keyword }
        })
      }
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
.search {
  width: 100vw;
  height: 100vh;
  font-size: 16px;
  z-index: 999;
  background-color: #fff;
  position: fixed;
  left: 100vw;
  transition: 0.3s;
}

.search_area {
  position: relative;
  display: flex;
  align-items: center;
  margin: 5px 5px;
}

.back {
  width: 28px;
  height: 28px;
}

.icon {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 2px;
  right: 30px;
  background: url("~@/assets/search.svg");
  background-size: cover;
  z-index: 10;

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

.hhh {
  margin: 6px 5px;
  color: #96c5fc;
}

.word {
  display: inline-block;
  background-color: #66ccff;
  border-radius: 10px;
  padding: 2px 8px;
  margin: 3px 5px;
  white-space: nowrap;
  color: #6688ff;
  cursor: pointer;
  font-size: 14px;
}
</style>