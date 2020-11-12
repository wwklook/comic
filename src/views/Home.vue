<template>
  <div class="home">
    <search ref="search" />
    <img class="search_icon" src="@/assets/search.svg" @click="show_search" />
    <tabbar>
      <tabbar-item>
        <template v-slot:item-icon>
          <img src="@/assets/home/comic.svg" />
        </template>
        <template v-slot:item-text>
          <div>漫架</div>
        </template>
      </tabbar-item>
      <tabbar-item>
        <template v-slot:item-icon>
          <img src="@/assets/home.svg" />
        </template>
        <template v-slot:item-text>
          <div>主页</div>
        </template>
      </tabbar-item>
      <tabbar-item>
        <template v-slot:item-icon>
          <img src="@/assets/profile.svg" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Tabbar from "@/components/tabbar/Tabbar.vue";
import TabbarItem from "@/components/tabbar/TabbarItem.vue";

export default {
  name: "Home",
  components: {
    Tabbar,
    TabbarItem,
    Search,
  },
  methods: {
    show_search() {
      this.$refs.search.$el.style.left = 0;
    },
  },
};
</script>

<style scoped>
.search_icon {
  position: fixed;
  width: 32px;
  height: 32px;
  top: 20px;
  right: 20px;
}
</style>
