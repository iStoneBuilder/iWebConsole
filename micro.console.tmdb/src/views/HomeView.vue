<template>
  <el-carousel :interval="5000" arrow="always" :height="screenheight">
    <el-carousel-item v-for="item in 6" :key="item">
      <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
      <HomePage
        v-if="movies.length > 0"
        :movies="movies"
        :iIndex="item"
      ></HomePage>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import rcms from "@rcms";
import HomePage from "@component/home/HomePage.vue";
export default {
  components: {
    HomePage,
  },
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      movies: [],
      page: 0,
      screenheight: document.documentElement.clientHeight - 59 + "px",
    };
  },
  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    // load() {
    //   this.page = this.page + 1;
    //   this.increment(this.page);
    // },
    increment(page) {
      rcms
        .get(
          "/discover/movie",
          {
            api_key: "23f3b2175b9d8be3a9e3af974f6783d6",
            page: page,
            language: "zh-CN",
          },
          null
        )
        .then(
          (respone) => {
            respone.data.results.forEach((item) => {
              this.movies.push(item);
            });
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    this.increment(1);
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 10px;
  height: 10px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
