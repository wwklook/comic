<template>
  <router-view v-slot="{ Component }">
    <keep-alive exclude="Content">
      <component :is="Component" />
    </keep-alive>
</router-view>
</template>
