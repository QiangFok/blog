<template>
  <div class="container">
    <div class="row">
      <form action="#" method="post">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="col-lg-4">
              <div class="form-group">
                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="标题" name="title">
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <select class="form-control" name="type">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="recommend">
                <label>
                  <input type="checkbox" name="recommend">推荐
                </label>
                <a class="btn btn-default btn-sm">搜索</a>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div class="panel panel-default">
        <div class="panel-body">
          <table class="table table-condensed">
            <thead>
            <tr>
              <th>序号</th>
              <th>标题</th>
              <th>类型</th>
              <th>推荐</th>
              <th>更新时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>刻意联系清单</td>
              <td>认知升级</td>
              <td>是</td>
              <td>2020-12-21 09：12</td>
              <td>
                <a class="btn btn-default btn-sm">编辑</a>
                <a class="btn btn-danger btn-sm">删除</a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>刻意联系清单</td>
              <td>认知升级</td>
              <td>是</td>
              <td>2020-12-21 09：12</td>
              <td>
                <a class="btn btn-default btn-sm">编辑</a>
                <a class="btn btn-danger btn-sm">删除</a>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>刻意联系清单</td>
              <td>认知升级</td>
              <td>是</td>
              <td>2020-12-21 09：12</td>
              <td>
                <a class="btn btn-default btn-sm">编辑</a>
                <a class="btn btn-danger btn-sm">删除</a>
              </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th colspan="5">
                <a class="btn btn-primary">上一页</a>
                <a class="btn btn-primary">下一页</a>
              </th>
              <th>
                <a class="btn btn-primary">新增</a>
              </th>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "ALl"
  }
</script>

<style lang="less" scoped>
  .form-group {
    margin-bottom: 0;
  }

  .recommend {
    font-weight: normal;
    max-height: 34px;
    height: 34px;

    input {
      margin: 10px 8px 0 0;
    }
  }

  .table {
    tr, th, td {
      text-align: center;
      line-height: 40px;
    }

    td, th {
      padding: 0;
    }

    tfoot > tr > th:first-child {
      text-align: left;
    }
  }
</style>
