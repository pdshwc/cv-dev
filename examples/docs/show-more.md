<!--
 * @Date: 2019-09-19 11:05:39
 * @LastEditors: pdshwc
 * @LastEditTime: 2019-09-19 11:05:39
 -->
# showMore 显示更多
----

### 基础用法
文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。

<div class="demo-block">
  <c-showmore :len='10' text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。'>
  </c-showmore>
</div>

::: demo
```html

 <c-showmore 
   :len='10' 
   text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠'>
 </c-showmore>

```
:::

### 高级用法
文本超出显示长度，折叠起来，展开后，可以通过```alloc-fold```指定是否需要收起，也可通过```shoc-text```设置折叠时的文案，通过```hidden-text```设置收起的文案

<div class="demo-block">
  <c-showmore 
    alloc-fold 
    shoc-text='show'
    hidden-text='hidden'
    :len='10' 
    text='文本超出显示长度，折叠起来，展开后，可以通过 allowFold 指定是否需要收起'>
  </c-showmore>
</div>


::: demo
```html

 <c-showmore alloc-fold
   :len='10' 
   shoc-text='show'
   hidden-text='hidden'
   text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠'>
 </c-showmore>

```
:::

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| len | 显示文本的长度 | Number | — | -1(不进行折叠) |
| text | 类型 | String | - |  |
| shoc-text | 折叠时需要显示文案 | String | — | 显示更多 |
| hidden-text | 隐藏时需要显示文案 | String | — | 隐藏 |
