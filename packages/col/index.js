/*
 * @Date: 2019-09-19 11:05:39
 * @LastEditors: pdshwc
 * @LastEditTime: 2019-09-19 11:05:39
 */
import Col from './src/col.vue'

/* istanbul ignore next */
Col.install = function (Vue) {
  Vue.component(Col.name, Col)
}

export default Col
