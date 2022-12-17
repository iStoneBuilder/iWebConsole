//引入封装好的 service
import service from "@/service/service";
import { ElLoading } from "element-plus";

//声明一个基础接口变量
let baseURL = "https://api.themoviedb.org/3";

//设置请求头（如果请求头统一的话可以在axios文件设置，则无须从这里传过去）
// const header = {
//   Accept: "application/json;charset=UTF-8",
// };

const doRequest = function (type, uri, data, header) {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  const request = service[type](baseURL + uri, data, header);
  loading.close();
  return request;
};

//根据自身需求
const rcms = {
  get(uri, data, header) {
    return doRequest("get", uri, data, header);
  },
  put(uri, data, header) {
    return doRequest("put", uri, data, header);
  },
  post(uri, data, header) {
    return doRequest("post", uri, data, header);
  },
  delete(uri, data, header) {
    return doRequest("delete", uri, data, header);
  },
};

//导出
export default rcms;
