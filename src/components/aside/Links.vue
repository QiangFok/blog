<template>
  <div class="panel panel-default classification">
    <div class="panel-heading">
      <h3 class="panel-title">友情链接</h3>
    </div>
    <div class="panel-body">
      <ul class="tags">
        <li v-for="(item,i) in tags" class="text-center"><a href="" class="tag">{{item}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Links",
    data() {
      return {
        tags: ['张三的博客666', '李四的博客678', '天空之城的博客', '反高潮']
      }
    }
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    li {
      width: 50%;

      .tag {
        display: inline-block;
        width: 95%;
        line-height: 36px;
        border: 1px solid @colorC;
        border-radius: 4px;
        margin: 2px;
        color: @colorC;
        transition: all .2s ease;
      }

      .tag:hover {
        background-color: @colorB;
        border-color: @colorB;
        color: @colorD;
      }
    }
  }
</style>
