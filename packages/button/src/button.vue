<!--
 * @Date: 2019-09-19 11:05:39
 * @LastEditors: pdshwc
 * @LastEditTime: 2019-09-25 15:32:08
 -->
<template>
  <component
    :is="tagName"
    :class="classes"
    :disabled="disabled"
    @click="handleClickLink"
    v-bind="tagProps"
  >
    <Icon
      class="crv-load-loop"
      type="ios-loading"
      v-if="loading"
    ></Icon>
    <Icon
      :type="icon"
      :custom="customIcon"
      v-if="(icon || customIcon) && !loading"
    ></Icon>
    <span
      v-if="showSlot"
      ref="slot"
    >
      <slot></slot>
    </span>
  </component>
</template>
<script>
import Icon from '../../icon'
import { oneOf } from '../../utils/assist'
import mixinsLink from '../../mixins/link'

const prefixCls = 'crv-btn'

export default {
  name: 'cButton',
  mixins: [mixinsLink],
  components: { Icon },
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'])
      },
      default: 'default'
    },
    shape: {
      validator (value) {
        return oneOf(value, ['circle', 'circle-outline'])
      }
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default () {
        return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: 'button',
      validator (value) {
        return oneOf(value, ['button', 'submit', 'reset'])
      }
    },
    icon: {
      type: String,
      default: ''
    },
    customIcon: {
      type: String,
      default: ''
    },
    long: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showSlot: true
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-long`]: this.long,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: this.size !== 'default',
          [`${prefixCls}-loading`]: this.loading != null && this.loading,
          [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
          [`${prefixCls}-plain`]: this.plain
        }
      ]
    },
    // Point out if it should render as <a> tag
    isHrefPattern () {
      const { to } = this
      return !!to
    },
    tagName () {
      const { isHrefPattern } = this
      return isHrefPattern ? 'a' : 'button'
    },
    tagProps () {
      const { isHrefPattern } = this
      if (isHrefPattern) {
        const { linkUrl, target } = this
        return { href: linkUrl, target }
      } else {
        const { htmlType } = this
        return { type: htmlType }
      }
    }
  },
  methods: {
    // Ctrl or CMD and click, open in new window when use `to`
    handleClickLink (event) {
      this.$emit('click', event)
      const openInNewWindow = event.ctrlKey || event.metaKey

      this.handleCheckClick(event, openInNewWindow)
    }
  },
  mounted () {
    this.showSlot = this.$slots.default !== undefined
  }
}
</script>
