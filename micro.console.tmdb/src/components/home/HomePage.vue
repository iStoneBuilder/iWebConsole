<template>
  <div class="demo-image">
    <el-image
      style="width: 100%; height: 100%"
      :src="url + movies[iIndex].backdrop_path"
    />
  </div>
</template>

<script>
import rcms from "@rcms";
export default {
  props: {
    movies: {
      type: Object,
    },
    iIndex: {
      type: Number,
    },
  },
  data() {
    return {
      url: "https://image.tmdb.org/t/p/w500",
      movieDetail: null,
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
          "/movie/" + this.movies[0].id,
          {
            api_key: "23f3b2175b9d8be3a9e3af974f6783d6",
            page: page,
            language: "zh-CN",
          },
          null
        )
        .then(
          (respone) => {
            this.movieDetail = respone.data;
            console.log(this.movieDetail);
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
.demo-image {
  width: 100%;
  height: 100%;
}
</style>
