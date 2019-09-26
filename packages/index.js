/*
 * @Date: 2019-09-19 11:05:39
 * @LastEditors: pdshwc
 * @LastEditTime: 2019-09-26 14:20:47
 */
import CButton from './button/index.js'
import CRow from './row/index'
import CCol from './col/index'
import Icon from './icon/index'
import CTag from './tag/index'
import WShowMore from './show-more/index'
import WLoadingBar from './loading-bar/index'
import CSkeleton from './skeleton/index'

const components = [
  CButton,
  CRow,
  Icon,
  CCol,
  CTag,
  WShowMore,
  CSkeleton
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  CButton,
  Icon,
  CRow,
  CCol,
  CTag,
  WShowMore,
  WLoadingBar,
  CSkeleton
}
