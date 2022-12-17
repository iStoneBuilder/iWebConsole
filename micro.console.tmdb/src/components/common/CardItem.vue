<template>
  <div class="item" v-if="item" @click="showDetailPage(item)">
    <el-image
      style="width: 180px; height: 270px"
      :src="url + item.poster_path"
      :fit="fits[0]"
    ></el-image>
  </div>
</template>

<script>
import rcms from "@rcms";
export default {
  components: {},
  props: {
    itemData: {
      type: Object,
    },
  },
  data() {
    return {
      fits: ["fill"],
      url: "https://image.tmdb.org/t/p/w500",
      item: null,
    };
  },
  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    showDetailPage(item) {
      rcms
        .get(
          "/movie/" + item.id,
          {
            api_key: "23f3b2175b9d8be3a9e3af974f6783d6",
            // page: page,
            language: "zh-CN",
          },
          null
        )
        .then(
          (respone) => {
            this.movieDetail = respone.data;
            this.movieDetail.isShowDetail = true;
            this.$emit("clickItem", this.movieDetail);
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
    this.item = this.itemData;
  },
};
</script>
