<template>
  <div style="height: 100%">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">管理后台</router-link>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false">admin <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">退出</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="main">
      <div class="left-nav">
        <div class="side-nav">
          <ul>
            <li>
              <router-link to="/admin/blog">
                <cite>博客管理</cite>
                <i class="glyphicon glyphicon-menu-right"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/fenlei">
                <cite>分类管理</cite>
                <i class="glyphicon glyphicon-menu-right"></i>
              </router-link>
            </li>
            <li>
              <a href="">
                <cite>标签管理</cite>
                <i class="glyphicon glyphicon-menu-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="content">
        <router-view></router-view>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "Admin",
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .navbar-inverse {
    background-color: #0B0C10;
  }

  .navbar {
    border-radius: 0;
    margin-bottom: 0;
    border: none;

    .navbar-header {
      width: 205px;

      .navbar-brand {
        padding-left: 15px;
      }
    }

    .left-open {
      line-height: 50px;
      color: #45A29E;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .left-open:hover {
      color: #66FCF1;
    }

    .dropdown-menu {
      right: 0;
      min-width: 84px;

      li > a {
        padding: 3px 26px;
      }
    }

  }


  .left-nav {
    width: 220px;
    background-color: rgb(238, 238, 238);
    padding-top: 14px;
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 0;

    ul li {
      border-bottom: 1px solid rgb(229, 229, 229);

      a {
        font-size: 14px;
        padding: 10px 15px 10px 20px;
        color: #787977;
        transition: color 0.2s ease;
        display: flex;

        cite {
          font-size: 14px;
          font-style: normal;
          flex: 1;
        }

        i {
          top: 4px;
        }
      }

      a:hover, a.active {
        color: #45A29E;
      }


    }
  }

  .content {
    position: absolute;
    inset: 50px 0 0 220px;
    overflow: hidden;
    z-index: 1;
  }

</style>
