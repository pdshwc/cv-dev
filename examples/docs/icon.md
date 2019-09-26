<!--
 * @Date: 2019-09-19 11:05:39
 * @LastEditors: pdshwc
 * @LastEditTime: 2019-09-25 16:22:26
 -->
<script>
  var iconList = require('../icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style lang="less">
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #3f536e;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>

# Icon 图标

----
语义化的矢量图形，```CV-UI``` 使用开源的 Iconfont (阿里妈妈MUX倾力打造的矢量图标管理、交流平台) 作为图标库，并制作成了 ```icon font```。
### 如何使用

使用 ```class="icon"``` 来声明图标，具体图标的名称请 ```copy``` 相应的标签

<div class="demo-block">
  <icon type="close" size=24></icon>
  <icon type="link" size=24></icon>
  <icon type="tag" size=24></icon>
  <icon type="smile" size=24></icon>
</div>

::: demo
```html

<icon type="close" size=24></icon>
<icon type="link" size=24></icon>
<icon type="tag" size=24></icon>
<icon type="smile" size=24></icon>

```
:::

### 图标示例

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <icon :type="name"></icon>
      {{name}}
    </span>
  </li>
</ul>
