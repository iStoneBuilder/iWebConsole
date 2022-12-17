<template>
  <el-drawer
    :title="itemDataInfo.name || itemDataInfo.title"
    direction="rtl"
    size="800px"
  >
    <el-container>
      <div>
        <div id="detail_info">
          <el-space wrap :size="size">
            <el-card class="box-card" id="card_view">
              <el-image
                style="width: 180px; height: 270px"
                :src="url + itemDataInfo.poster_path"
                :fit="fits[0]"
              ></el-image>
            </el-card>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value} 分"
            />
          </el-space>
          <div
            style="
              overflow: hidden;
              margin-left: 10px;

              overflow-wrap: break-word;
            "
          >
            <div><span>导演：</span><span>Natalia Kudryashova</span></div>
            <div><span>编剧：</span><span>Natalya Kudryashova</span></div>
            <div>
              <span>主演：</span>
              <span>
                Krasovskaya / 尤里·鲍里索夫 / Darius Gumauskas / 尤利娅·马尔琴科
                / Mariya Leonova / Mariya Ivanova / Yulia Ogun / Serafima
                Krasnikova / Mariya Pesotskaya / Sofya Aleksandrova / Tina
                Stojilkovic / Andrey Arseev / 菲利普·德亚奇科夫 / Dmitry
                Manevich / Tatiana Okwamo
              </span>
            </div>
            <div><span>类型：</span><span>剧情 / 女性</span></div>
            <div><span>地区：</span><span>俄罗斯</span></div>
            <div><span>语言：</span><span>俄语</span></div>
            <div>
              <span>上映：</span><span>{{ itemDataInfo.release_date }}</span>
            </div>
            <div>
              <span>片长：</span><span>{{ itemDataInfo.runtime }}分钟</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="电影简介" name="1">
            <div>
              {{ itemDataInfo.overview }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-container>
  </el-drawer>
</template>

<script>
export default {
  props: {
    itemDataInfo: {
      type: Object,
    },
  },
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      url: "https://image.tmdb.org/t/p/w500",
      size: 0,
      fits: ["fill"],
      value: 4.6,
      activeNames: "1",
    };
  },
  methods: {
    handleChange() {},
  },
};
</script>
<style>
header {
  margin-bottom: 0px !important;
}
</style>

<style scoped>
.el-container {
  /* border: 1px solid red; */
  display: block;
}
.box-card {
  width: 180px;
  height: 270px;
}
.el-collapse,
.el-collapse div {
  border: 0px;
}
#detail_info {
  display: flex;
  height: fit-content;
  overflow: hidden;
  width: 100%;
}
</style>
