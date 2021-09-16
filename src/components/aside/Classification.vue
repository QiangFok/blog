<template>
  <div class="panel panel-default classification">
    <div class="panel-heading">
      <h3 class="panel-title">{{classificationTitle}}</h3>
    </div>
    <div class="panel-body">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item,i) in 26">
          <a href="">
            <img src="/static/java.jpeg" alt="">
            <span class="title qin">JavaSE</span>
            <span class="count">20篇</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Classification",
    props: {
      classificationTitle: {
        type : String,
        require: true
      }
    }
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  .list-group{
    margin-bottom: 0;
  }

  .list-group-item {
    margin-bottom: 0;
    background: none;
    border: none;
    border-radius: 0;
    padding: 6px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    a {
      color: @colorC;
      transition: color .2s ease;
      display: flex;
      line-height: 28px;
      img{
        width: 28px;
        height: 28px;
        margin-right: 12px;
        border-radius: 4px;
      }
      .title{
        flex: 1;
        width: auto;
      }
      .count{
        color: @colorC;
        font-size: 12px;
      }
    }

    a:hover {
      color: @colorB;
    }
  }
</style>
