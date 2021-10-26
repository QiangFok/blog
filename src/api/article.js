import request from "../utils/request"
import {API_RECOMMEND_ARTICLE} from '../constants/api'

/**
 * 获取推荐文章列表
 * @returns {AxiosPromise}
 */
export function loadRecommend() {
  return request({
    url: API_RECOMMEND_ARTICLE,
    method: 'get'
  })
}
