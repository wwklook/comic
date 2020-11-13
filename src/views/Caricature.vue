<template>
  <router-view v-slot="{ Component }">
    <keep-alive exclude="Comic">
      <component :is="Component" />
    </keep-alive>
</router-view>
</template>
