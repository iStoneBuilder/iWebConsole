<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <RouterLink to="/">
            <div class="router_title">推荐</div>
          </RouterLink>
        </el-menu-item>
        <el-menu-item index="2">
          <RouterLink to="/movie">
            <div class="router_title">电影</div>
          </RouterLink>
        </el-menu-item>
        <el-menu-item index="3">
          <RouterLink to="/tv">
            <div class="router_title">剧集</div>
          </RouterLink>
        </el-menu-item>
        <el-menu-item index="4">
          <RouterLink to="/about">
            <div class="router_title">About</div>
          </RouterLink>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <div id="container-view">
        <RouterView />
      </div>
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
const activeIndex = "1";
const handleSelect = function (key, keyPath) {
  console.log(key, keyPath);
};
</script>
<style scoped>
#container-view {
  border: 1px solid saddlebrown;
  height: 100%;
  overflow: auto;
}
.el-menu-item {
  padding: 0px;
}
.router_title {
  width: 68px;
}
</style>
