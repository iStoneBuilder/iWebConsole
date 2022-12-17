<template>
  <div id="router_view">
    <MoviePage
      v-infinite-scroll="load"
      v-if="movies.length > 0"
      :movies="movies"
    ></MoviePage>
  </div>
</template>

<script>
import rcms from "@rcms";
import MoviePage from "@component/movie/MoviePage.vue";
export default {
  components: {
    MoviePage,
  },
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      movies: [],
      page: 0,
    };
  },
  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    load() {
      this.page = this.page + 1;
      this.increment(this.page);
    },
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
