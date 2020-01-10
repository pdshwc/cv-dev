<!--
 * @Date: 2019-09-19 11:05:39
 * @LastEditors: pdshwc
 * @LastEditTime: 2019-09-26 15:57:35
 -->
<p align="center">
  <a href="https://at.aotu.io/">
    <img width="200" src="https://github.com/CV-UI/CV-UI/blob/master/examples/assets/img/logo.png">
  </a>
</p>

# 公告
这个 `UI`库的核心想法是想教大家如何搭建一个基于`Vue`的组件库。市面上已经有很多成熟的中后台组件库，比如`element-ui`和`iview`。这个组件库也是由我一个人维护开发，不建议使用到生产环境，如果有兴趣，可以`fork`下来作为自己技术探索的一个部分。

# CV UI

`CV-UI` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 PC 网站中后台产品
[演示地址](https://pdshwc.github.io/cv-ui)

<p align="center">
  <a href="https://github.com/feross/standard">
    <img src="https://cdn.rawgit.com/feross/standard/master/badge.svg" alt="Standard - JavaScript Style">
  </a>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/cvui"><img src="https://img.shields.io/badge/npm-1.0.4-brightgreen.svg" alt="npm version"></a> 
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg">
  <a href="https://www.npmjs.com/package/cvui"><img src="https://img.shields.io/badge/licence-MIT-blue.svg"></a> 
</p>

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)

## 安装

- yarn

```bash
yarn add cvui
```

- npm 

```bash
npm install cvui --save
```

## 使用

```js
import cvui from 'cvui' // 引入组件库
import 'cvui/packages/theme-default/index.less' // 引入样式库

Vue.use(cvui)
```

## 贡献

如果你在使用 `CV-UI` 时遇到问题，或者有好的建议，欢迎给我们提 [Issue](https://github.com/cv-ui/cv-ui/issues) 或 [Pull Request](https://github.com/cv-ui/cv-ui/pulls)


## Pull requests 规范

**Working on your first Pull Request?** You can learn how from this *free* series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

All pull requests are welcome. Thanks for taking the time to contribute.

- Create an issue about the features, such as new components.
- Fork the repo to your own account.
- Clone your fork.
- Create a new branch base on `dev`, if you want to add new component, the branch name should be formatted as `component-[Component Name]`. (e.g. `component-steps`) And the commit info should be formatted as `[Component Name]: Info about commit`.
- Make sure that running `npm run prepublish` outputs the correct files.
- Rebase before creating a PR to keep commit history clear. (Merge request to branch `dev`)
- Provide some description about your PR.
