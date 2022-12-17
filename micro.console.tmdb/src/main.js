import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

// 自定义样式
import "./assets/main.css";

const app = createApp(App);
// Elemenlt
app.use(ElementPlus);
app.use(createPinia());
// 路由
app.use(router);
app.mount("#app");
