<template>
  <div class="panel panel-default labelCloud">
    <div class="panel-heading">
      <h3 class="panel-title">标签云</h3>
    </div>
    <div class="panel-body">
      <div class="tagcloud">
        <a href="#" v-for="(item,index) in data" :key="index">{{item}}</a>
      </div>
    </div>
  </div>
</template>

<script>

  import "@/assets/js/tagcloud.js";

  export default {
    name: "LabelCloud",
    props: {
      data: {
        type: Array,
        require: true
      }
    },
    data() {
      return {}
    },
    /**
     * 视图层数据更新后调用
     */
    updated() {
      /*3D标签云*/
      tagcloud({
        selector: ".tagcloud", //元素选择器
        fontsize: 16, //基本字体大小, 单位px
        radius: 100, //滚动半径, 单位px
        mspeed: "normal", //滚动最大速度, 取值: slow, normal(默认), fast
        ispeed: "normal", //滚动初速度, 取值: slow, normal(默认), fast
        direction: 135, //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
        keep: false //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
      });
    }
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  .tagcloud a {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    padding: 11px 30px;
    color: @colorE;
    font-size: 16px;
    border: 1px solid @colorC;
    border-radius: 18px;
    text-decoration: none;
    white-space: nowrap;
    -o-box-shadow: 6px 4px 8px 0 rgba(151, 142, 136, .34);
    -ms-box-shadow: 6px 4px 8px 0 rgba(151, 142, 136, .34);
    -moz-box-shadow: 6px 4px 8px 0 rgba(151, 142, 136, .34);
    -webkit-box-shadow: 6px 4px 8px 0 rgba(151, 142, 136, .34);
    box-shadow: 6px 4px 8px 0 rgba(151, 142, 136, .34);
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4,Direction=135, Color='#000000')";
    /*兼容ie7/8*/
    filter: progid:DXImageTransform.Microsoft.Shadow(color='#969696', Direction=125, Strength=9);
    /*strength是阴影大小，direction是阴影方位，单位为度，可以为负数，color是阴影颜色 （尽量使用数字）使用IE滤镜实现盒子阴影的盒子必须是行元素或以行元素显示（block或inline-block;）*/
  }

  @media screen and (max-width: 520px) {
    .tagcloud {
      min-width: 310px !important;
    }
  }

  @media (min-width: 768px) {
    .tagcloud {
      min-width: 310px !important;
    }
  }

  @media (min-width: 768px) {
    .tagcloud {
      min-width: 310px !important;
    }
  }

</style>
