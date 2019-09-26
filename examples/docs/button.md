<!--
 * @Date: 2019-09-19 11:05:39
 * @LastEditors: pdshwc
 * @LastEditTime: 2019-09-25 16:23:59
 -->
# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <c-button>默认按钮</c-button>
    <c-button type="primary">主要按钮</c-button>
    <c-button type="success">成功按钮</c-button>
    <c-button type="info">信息按钮</c-button>
    <c-button type="warning">警告按钮</c-button>
    <c-button type="error">危险按钮</c-button>
  </div>
  <div class="m-10" style="background: rgb(190, 200, 200);padding:20px 2px;">
    <c-button plain>朴素按钮</c-button>
    <c-button type="primary" plain>主要按钮</c-button>
    <c-button type="success" plain>成功按钮</c-button>
    <c-button type="info" plain>信息按钮</c-button>
    <c-button type="warning" plain>警告按钮</c-button>
    <c-button type="error" plain>危险按钮</c-button>
  </div>
  <div class="m-10">
    <c-button shape="circle">圆形按钮</c-button>
    <c-button type="primary" shape="circle">主要按钮</c-button>
    <c-button type="success" shape="circle">成功按钮</c-button>
    <c-button type="info" shape="circle">信息按钮</c-button>
    <c-button type="warning" shape="circle">警告按钮</c-button>
    <c-button type="error" shape="circle">危险按钮</c-button>
  </div>
</div>

::: demo
```html

<div>
  <c-button>默认按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="success">成功按钮</c-button>
  <c-button type="info">信息按钮</c-button>
  <c-button type="warning">警告按钮</c-button>
  <c-button type="error">危险按钮</c-button>
</div>
<div>
  <c-button plain>朴素按钮</c-button>
  <c-button type="primary" plain>主要按钮</c-button>
  <c-button type="success" plain>成功按钮</c-button>
  <c-button type="info" plain>信息按钮</c-button>
  <c-button type="warning" plain>警告按钮</c-button>
  <c-button type="error" plain>危险按钮</c-button>
</div>
<div>
  <c-button round>圆形按钮</c-button>
  <c-button type="primary" round>主要按钮</c-button>
  <c-button type="success" round>成功按钮</c-button>
  <c-button type="info" round>信息按钮</c-button>
  <c-button type="warning" round>警告按钮</c-button>
  <c-button type="error" round>危险按钮</c-button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div>
    <c-button disabled>默认按钮</c-button>
    <c-button type="primary" disabled>主要按钮</c-button>
    <c-button type="success" disabled>成功按钮</c-button>
    <c-button type="info" disabled>信息按钮</c-button>
    <c-button type="warning" disabled>警告按钮</c-button>
    <c-button type="error" disabled>危险按钮</c-button>
  </div>
  <div class="m-10">
    <c-button plain disabled>朴素按钮</c-button>
    <c-button type="primary" plain disabled>主要按钮</c-button>
    <c-button type="success" plain disabled>成功按钮</c-button>
    <c-button type="info" plain disabled>信息按钮</c-button>
    <c-button type="warning" plain disabled>警告按钮</c-button>
    <c-button type="error" plain disabled>危险按钮</c-button>
  </div>
</div>

::: demo
```html

<div>
  <c-button disabled>默认按钮</c-button>
  <c-button type="primary" disabled>主要按钮</c-button>
  <c-button type="success" disabled>成功按钮</c-button>
  <c-button type="info" disabled>信息按钮</c-button>
  <c-button type="warning" disabled>警告按钮</c-button>
  <c-button type="error" disabled>危险按钮</c-button>
</div>
<div class="m-10">
  <c-button plain disabled>朴素按钮</c-button>
  <c-button type="primary" plain disabled>主要按钮</c-button>
  <c-button type="success" plain disabled>成功按钮</c-button>
  <c-button type="info" plain disabled>信息按钮</c-button>
  <c-button type="warning" plain disabled>警告按钮</c-button>
  <c-button type="error" plain disabled>危险按钮</c-button>
</div>
  
```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 CV-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标。
<div class="demo-block">
  <c-button icon="tag" type="primary"></c-button>
  <c-button icon="close" type="primary"></c-button>
  <c-button icon="smile" type="primary"></c-button>
  <c-button icon="search" type="primary">搜索</c-button>
  <c-button icon="cloudfill" type="primary">下载</c-button>
</div>

::: demo
```html

<c-button icon="tag" type="primary"></c-button>
<c-button icon="close" type="primary"></c-button>
<c-button icon="smile" type="primary"></c-button>
<c-button icon="search" type="primary">搜索</c-button>
<c-button icon="cloudfill" type="primary">下载</c-button>

```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
<div class="demo-block">
  <c-button>默认尺寸</c-button>
  <c-button size="large">大等按钮</c-button>
  <c-button size="small">小型按钮</c-button>
</div>

::: demo
```html

<c-button>默认尺寸</c-button>
<c-button size="large">大等按钮</c-button>
<c-button size="small">小型按钮</c-button>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,large,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,error,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
