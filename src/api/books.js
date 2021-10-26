import request from "../utils/request"
import {API_BOOKS_LIST} from '../constants/api'

/**
 * 获取书籍名称列表
 * @returns {AxiosPromise}
 */
export function loadBookList() {
  return request({
    url: API_BOOKS_LIST,
    method: 'get'
  })
}
