<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="panel panel-default">

            <div class="panel-body">
              <form action="" method="post" role="form">
                <legend>登录</legend>

                <div class="input-group">
                  <span class="input-group-addon glyphicon glyphicon-user"></span>
                  <input type="text" class="form-control" placeholder="请输入用户名：" aria-describedby="basic-addon1">
                </div>

                <div class="input-group">
                  <span class="input-group-addon glyphicon glyphicon-lock"></span>
                  <input type="password" class="form-control" placeholder="请输入密码：" aria-describedby="basic-addon1">
                </div>

                <div class="input-group">
                  <span class="input-group-addon glyphicon glyphicon-ok"></span>
                  <input type="password" class="form-control" placeholder="请输入验证码：" aria-describedby="basic-addon1">
                  <span class="input-group-addon">1234</span>
                </div>

                <div class="submit">
                  <input type="submit" class="form-control" aria-describedby="basic-addon1">
                </div>
              </form>

              <div class="text">
                  <p>忘了密码?<a href="">重置密码</a></p>
                  <p><router-link to="/">返回首页</router-link></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "Login",

  }
</script>

<style lang="less" scoped>
  .login {
    .container {
      width: 25%;
      margin: 12% auto;

      legend{
        margin-bottom: 30px;
      }

      .input-group {
        margin: 20px 0;
        padding: 0 10%;

        span {
          top: 0;
        }
      }

      .form-control:focus {
        border-color: #45A29E;
      }

      .submit {
        padding: 0 10%;
      }

      .form-control[type = submit] {
        width: 100%;
        background-color: #45A29E;
        color: #1F2833;
      }

      .text{
        padding: 5% 10%;
        display: flex;
        justify-content: space-between;
        a{
          color: #45A29E;
        }
      }

    }
  }
</style>
