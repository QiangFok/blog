<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">{{title}}</h3>
    </div>
    <div class="panel-body">
      <ul class="list-group">
        <slot name="list"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotArticle",
    props: ['title']
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  .list-group {
    margin-bottom: 0;
  }

  .list-group-item {
    margin-bottom: 0;
    background: none;
    border: none;
    border-radius: 0;
    a {
      color: @colorE;
      font-size: @fontE;
      transition: color .2s ease;
    }

    a:hover {
      color: @colorB;
    }
  }
</style>
