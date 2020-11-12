<template>
  <div class="tabbar">
    <div class="item">
      书架
    </div>
    <div class="item">
      首页
    </div>
    <div class="item">
      我的
    </div>
  </div>
</template>

<script>

export default {
  name: 'Tabbar',
  components: {

  }
}
</script>


<style scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.item {
  display: flex;
  cursor: pointer;
}
</style>