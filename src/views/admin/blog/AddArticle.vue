<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-body">
        <el-form action="#" method="post" role="form" status-icon>

          <div class="row title">
            <div class="col-lg-12">
              标题：
              <el-input v-model="articleTitle" placeholder="输入文章标题" size="small" prop="title"></el-input>
            </div>
          </div>

          <div class="row content">
            <div class="col-lg-12">
              <mavon-editor/>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <span>类型：</span>
              <el-select v-model="articleTypeValues" placeholder="选择文章类型" size="small" prop="type">
                <el-option
                  v-for="item in articleTypes"
                  :key="item.value"
                  :value="item.value"
                >

                </el-option>
              </el-select>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <span>分类：</span>
              <el-select v-model="articleClassValues" placeholder="选择文章分类" size="small" prop="clazz">
                <el-option
                  v-for="item in articleClasses"
                  :key="item.value"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <span>标签：</span>
              <el-select v-model="articleTagValues" multiple placeholder="选择文章标签" size="small" prop="tag">
                <el-option
                  v-for="item in articleTags"
                  :key="item.value"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>

          <div class="row picAddr">
            <div class="col-lg-12 pull-right">
              图片：
              <el-input placeholder="图片引用地址" size="small" prefix-icon="el-icon-picture"></el-input>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-9">
              <el-checkbox-group v-model="releaseArr">
                <el-checkbox label="推荐"></el-checkbox>
                <el-checkbox label="转载声明"></el-checkbox>
                <el-checkbox label="评论"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="col-lg-3">
              <el-button plain size="small">返回</el-button>
              <el-button type="primary" size="small">保存</el-button>
              <el-button type="success" size="small">发布</el-button>
            </div>
          </div>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Add",
    data() {
      return {
        articleTitle: '',
        articleTypes: [
          {
            value: '原创',
          },
          {
            value: '转载',
          },
          {
            value: '翻译'
          }
        ],
        articleClasses: [
          {
            value: '错误日志',
          },
          {
            value: '开发者手册',
          }
        ],
        articleTags: [
          {
            value: 'Java',
          },
          {
            value: 'JavaScript',
          }
        ],
        articleClassValues: [],
        articleTagValues: [],
        articleTypeValues: [],
        releaseArr: [],
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

  form {
    .row {
      margin: 20px 0;
    }

    .title, .picAddr {
      .el-input {
        width: 95%;
      }
    }
  }
</style>
