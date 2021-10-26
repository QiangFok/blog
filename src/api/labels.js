import request from "../utils/request"
import {API_LABEL_LIST} from '../constants/api'

/**
 * 获取标签列表
 * @returns {AxiosPromise}
 */
export function loadLabelList() {
  return request({
    url: API_LABEL_LIST,
    method: 'get'
  })
}
