<template>
  <div class="category">
    <base-layout>
      <template #aside>
        <article-total :total-title=totalTitle></article-total>
        <interest></interest>
        <classification :classification-title=classificationTitle></classification>
      </template>

      <template #jumbotron>
        <div class="jumbotron">
          <div class="page-header">
            <div class="page-header-img">
              <img src="https://www.lujianxin.com/static/image/lm01.jpg" alt="" class="img-responsive">
            </div>
            <div class="page-header-title">
              <h1>嵌入式软件</h1>
              <p>如果有人与我们分享过一个夏季，我们的记忆就会在生命中相互呼唤如果我们曾经怀着相同的理想并肩前行过一段岁月，到了最后会不会在彼此的记忆中植满百合？ </p>
            </div>
          </div>
        </div>
      </template>

      <template #main>
        <article-list></article-list>
      </template>
    </base-layout>
  </div>
</template>

<script>

  import BaseLayout from "../components/public/BaseLayout";
  import ArticleTotal from "../components/aside/ArticleTotal";
  import Interest from "../components/aside/Interest";
  import Classification from "../components/aside/Classification";
  import ArticleList from "../components/articleList/ArticleList";

  export default {
    name: "Category",
    data() {
      return {
        totalTitle: "文章总计",
        classificationTitle: "文章分类"
      }
    },
    components: {
      BaseLayout,
      ArticleTotal,
      Interest,
      Classification,
      ArticleList,
    }
  }
</script>

<style lang="less" scoped>
  .jumbotron {

    padding: 20px;
    background-color: #1f2024;

    .page-header {
      margin: 0;
      padding-bottom: 0;
      border: none;
      display: flex;
    }

    .page-header-img {
      margin-right: 20px;
    }

    .page-header-title {

      width: 100%;

      h1 {
        font-size: 28px;
      }

      p {
        margin-top: 20px;
        margin-bottom: 0;
        font-size: 16px;
        font-weight: 200;
      }
    }
  }
</style>
