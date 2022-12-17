<template>
  <el-space wrap :size="size">
    <el-card
      id="card_view"
      v-for="movie in iMovies"
      :key="movie"
      class="box-card"
      style="width: 180px; height: 270px"
    >
      <CardItemVue :itemData="movie" @clickItem="clickItem" />
    </el-card>
    <DetailPage
      v-if="item.isShowDetail"
      :itemDataInfo="item"
      v-model="item.isShowDetail"
    ></DetailPage>
  </el-space>
</template>

<script>
import CardItemVue from "../common/CardItem.vue";
import DetailPage from "../common/DetailPage.vue";
export default {
  components: {
    CardItemVue,
    DetailPage,
  },
  props: {
    movies: {
      type: Object,
    },
  },
  data() {
    return {
      iMovies: [],
      size: 20,
      item: {
        isShowDetail: false,
      },
    };
  },
  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    this.iMovies = this.movies;
  },
  methods: {
    clickItem(item) {
      this.item = item;
    },
  },
};
</script>
<style>
#card_view .el-card__body {
  padding: 0px !important;
}
</style>
