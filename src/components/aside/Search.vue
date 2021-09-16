<template>
  <div class="panel panel-default search">
    <div class="panel-heading">
      <h3 class="panel-title">搜一下</h3>
    </div>
    <div class="panel-body">
      <label class="search-wrap">
        <input type="text" placeholder="输入关键字搜索...">
        <span class="glyphicon glyphicon-search"></span>
      </label>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  .search {

    .search-wrap {
      display: block;
      height: 40px;
      background-color: #fff;
      border-radius: 40px;
      position: relative;
      z-index: 5;

      input {
        height: 40px;
        line-height: 40px;
        width: 100%;
        color: @colorE;
        padding-left: 10px;
        border: 2px solid @colorA;
        border-radius: 20px;
        font-weight: 400;
      }

      span {
        font-size: 18px;
        position: absolute;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        right: 5px;
        top: 5px;
        color: @colorB;
        -webkit-transition: all .3s;
        transition: all .3s;
        cursor: pointer;
      }
    }

  }
</style>
