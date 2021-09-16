<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li role="presentation">
              <router-link to="/admin/blog/blogList">博客列表</router-link>
            </li>
            <li role="presentation">
              <router-link to="/admin/blog/addArticle">发布博客</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Blog"
  }
</script>

<style lang="less" scoped>
  .navbar {
    background: none;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #45A29E;
  }

  .navbar-default .navbar-nav a.active {
    background-color: #45A29E;
    color: #eeeeee;
  }

  .navbar-default .navbar-nav > li > a {
    color: #787977;
  }
</style>
