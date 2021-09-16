<template>
  <div class="tag">
    <base-layout>
      <template #aside>
        <article-total :total-title=totalTitle></article-total>
        <classification :classification-title=classificationTitle></classification>
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
    name: "Database",
    data() {
      return {
        totalTitle: "标签总计",
        classificationTitle: "标签分类"
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

<style scoped>

</style>
