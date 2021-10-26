<template>
  <div class="resources">
    <base-layout>
      <template #aside>
        <el-collapse accordion>
          <el-collapse-item title="Java JDK" :name="i + 1" v-for="(item,i) in 13" :key="i">
            <ul>
              <li><a href="">8</a></li>
              <li><a href="">11</a></li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </template>

      <template #main>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
            <tr>
              <th>文件</th>
              <th>产品说明</th>
              <th>大小</th>
              <th>下载</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,i) in 12" :key="i">
              <td>jdk-8u202-windows-x64.exe</td>
              <td>Java SE Development Kit 8u301</td>
              <td>211.575MB</td>
              <td><a href="">下载</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </template>

    </base-layout>
  </div>
</template>

<script>
  import BaseLayout from "../components/public/BaseLayout";

  export default {
    name: "Resources",
    data() {
      return {}
    },
    components: {
      BaseLayout
    }
  }
</script>

<style lang="less">

  @import "../styles/config";

  .resources {
    padding-bottom: 50px;
    height: 100%;
  }

  .el-collapse {
    border-top: none;
    background: @colorF;

    .el-collapse-item {
      ul li {
        height: 55px;
        line-height: 55px;
        padding-left: 26px;
        font-size: @fontE;
        transition: .2s ease-in-out;

        &:hover {
          background-color: @colorB;
        }

        a {
          display: inline-block;
          width: 100%;
          color: @colorE;
        }
      }
    }
  }

  .el-collapse-item__header {
    height: 60px;
    background-color: transparent;
    font-size: @fontE;
    color: @colorC;
    font-weight: 400;
  }

  .el-collapse-item__header, .el-collapse-item__content {
    padding: 0 10px;
  }

  .el-collapse-item__wrap {
    background: transparent;
  }

  .table {
    background: @colorF;

    tr {
      border-bottom: 1px solid #EBEEF5;
    }

    thead tr th, tbody tr td {
      line-height: 59px;
      padding: 0 0 0 20px;
      color: @colorE;
      font-size: @fontE;
    }

    a {
      color: @colorE;
    }
  }

  .table-hover > tbody > tr:hover {
    background-color: @colorB;
  }

  @media (min-width: 750px) {
    .el-collapse {
      margin-bottom: 40px;
    }
  }

</style>
