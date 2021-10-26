<template>
  <!--
      分类页面下侧边栏的文章总计panel组件：
        原创文章： xxx
        转载文章：xxx
        翻译文章：xxx
        总计：xxx
  -->
  <div class="panel panel-default recommend">
    <div class="panel-heading">
      <h3 class="panel-title">{{totalTitle}}</h3>
    </div>
    <div class="panel-body">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item,i) in 4" :key="i">
          原创文章： <span>100篇</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleTotal",
    props: {
      totalTitle: {
        type: String,
        require: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .list-group {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0;

    .list-group-item {
      margin-right: 4px;
      padding: 8px 10px;
      color: #C5C6C7;
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      background-color: transparent;
      border-radius: 0;

      span {
        font-weight: normal;
      }
    }
  }

  @media (min-width: 750px) {
    .list-group {
      justify-content: space-between;
    }
  }
</style>
