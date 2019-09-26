<!--
 * @Date: 2019-09-19 11:05:39
 * @LastEditors: pdshwc
 * @LastEditTime: 2019-09-25 18:04:05
 -->
<template>
  <div
    :class="classes" :style="styles"
  >
  </div>
</template>

<script>
const prefixCls = 'crv-skeleton'
export default {
  name: 'CSkeleton',
  props: {
    proportion: {
      type: Number,
      default: 1
    }, // h : w
    bgColor: {
      type: String,
      default: '#b4bccc'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: [String, Boolean],
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      paddingBottom: this.height || `${this.proportion * 100}%`
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-active`]: !!this.active
        }
      ]
    },
    styles () {
      let paddingBottom = this.paddingBottom
      let style = {
        paddingBottom,
        width: this.width
      }
      return style
    }
  }
}
</script>
