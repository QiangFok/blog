import request from "../utils/request"
import {API_CATEGORY_LIST} from '../constants/api'

/**
 * 获取文章分类列表，并统计文章数量
 * @returns {AxiosPromise}
 */
export function loadCategoryList() {
  return request({
    url: API_CATEGORY_LIST,
    method: 'get'
  })
}
loadCategoryList
