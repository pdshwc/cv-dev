<!--
 * @Date: 2019-09-19 11:05:39
 * @LastEditors: pdshwc
 * @LastEditTime: 2019-09-25 18:06:29
 -->
<template>
  <div class="main-skeleton">
    <c-skeleton active height="80px"></c-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <c-skeleton active height="300px"></c-skeleton>
        </div>
        <c-skeleton active height="45px"></c-skeleton>
      </div>
      <div class="skeleton-bottom">
        <c-skeleton active height="45px"></c-skeleton>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style lang="less">
  .skeleton-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
  }
  .skeleton-bottom {
    width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .skeleton {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 56px;
  }
</style>
