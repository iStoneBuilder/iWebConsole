import axios from "axios";
 
const initAxios = axios.create({
  timeout: 1800000//数据响应过期时间
})
//请求拦截器
initAxios.interceptors.request.use((config) => {
  //在发送之前做点什么
  return config
}, (error) => {
  //对请求错误做点什么
  return Promise.reject(error)
})
//响应拦截器
initAxios.interceptors.response.use((response) => {
  return response
},(error)=>{
  return Promise.reject(error)
})
//导出
export default () => {
  return initAxios
}

