<template>
  <div class="header">
    <div class="left">
      <slot name="icon"
        ><img class="back" src="@/assets/return.svg" @click="goBack"
      /></slot>
      <h1 class="header_title">{{ title }}</h1>
    </div>
    <slot name="right"><img class="home" src="@/assets/home.svg" @click="goHome"/></slot>
  </div>
</template>

<script>
export default {
  name: "headers",
  props: ["title"],
  methods: {
    goBack() {
      this.$router.back();
    },
    goHome(){
      this.$router.push({name: "Home"})
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back {
  margin-left: 8px;
  width: 28px;
  height: 28px;
}

.left {
  display: flex;
  align-items: center;
}

.header_title {
  margin-left: 10px;
  font-size: 16px;
}

.home {
  width: 28px;
  height: 28px;
  margin-right: 8px;
}
</style>