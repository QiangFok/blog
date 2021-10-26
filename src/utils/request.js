import axios from 'axios'
import BigInt from 'json-bigint'
import {Message} from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: '/webapi', // api 的 base_url
  timeout: 10000, // request timeout
  transformResponse(data) {
    if (data) {
      return BigInt.parse(data)
    } // 由于后端的数据库对id进行了变更 所以这里必须采用json-bigint插件来进行处理 保证数据正确
  }
})

// response
service.interceptors.response.use(
  /**
   * 监控拦截 如果出现 异常 则直接终止请求链
   */
  response => {
    let res = response.data;
    if (res.code === 0) {
      return res
    } else {
      Message.warning(res.errorMessage)
      return Promise.reject(res)
    }
  },
  error => {
    Message({
      message: error.errorMessage,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)// 终止当前的promise链
  }
)

export default service
