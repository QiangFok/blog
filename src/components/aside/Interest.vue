<template>
  <!--
    分类页面下侧边栏的兴趣领域panel组件：
     例如：
      @后端 （main）
        @Java @Spring Boot @Linux @Spring （sub）
  -->
  <div class="panel panel-default recommend">
    <div class="panel-heading">
      <h3 class="panel-title">兴趣领域</h3>
    </div>
    <div class="panel-body">
      <ul class="list-group">
        <li class="list-group-item">
          <div class="interest-area-main">
            <div class="interest-area-name qin">#后端</div>
          </div>
          <div class="interest-area-sub">
            <span class="qin">#MySQL</span>
            <span class="qin">#Linux</span>
            <span class="qin">#Spring Boot</span>
            <span class="qin">#Redis</span>
            <span class="qin">#Spring</span>
            <span class="qin">#Java</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Interest"
  }
</script>

<style lang="less" scoped>

  .list-group-item {
    background: transparent;
    max-height: 108px;
    border: 0;
  }

  .interest-area-main {
    margin-bottom: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 20px;

    .interest-area-name {
      color: #FFFFFF;
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .interest-area-sub {
    margin-right: -12px;
    height: 20px;

    span {
      font-size: 14px;
      line-height: 24px;
      color: #C5C6C7;
      margin-right: 12px;
      float: left;
    }
  }

</style>
