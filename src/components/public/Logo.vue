<template>
  <router-link to="/home" class="fok-qiang">
    <span>FokQiang's</span>
    <span>blog</span>
  </router-link>
</template>

<script>
  export default {
    name: "Logo"
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  .fok-qiang {
    font-weight: 200;
    text-transform: uppercase;
    overflow: hidden;
    outline: none;
    text-decoration: none;
    position: relative;
    display: inline-block;
    color: @colorC;

    span:first-child {
      color: @colorB;
    }

    span {
      position: relative;
      display: inline-block;
      -webkit-transition: color 0.5s;
      transition: color 0.5s;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: @colorC;
        line-height: 0.8;
        -webkit-transition: -webkit-transform 0.5s;
        transition: transform 0.5s;
      }

      &:last-of-type {
        &::before {
          background: @colorD;
        }
      }
    }

    &:hover {
      span {
        &:first-of-type {
          color: @colorD;
        }

        &:last-of-type {
          color: @colorB;
        }
      }
    }
  }

  .fok-qiang--ilin:hover span:last-of-type::before,
  .fok-qiang span:first-of-type::before {
    -webkit-transform: translate3d(0, -150%, 0);
    transform: translate3d(0, -150%, 0);
  }

  .fok-qiang:hover span:first-of-type::before,
  .fok-qiang span:last-of-type::before {
    -webkit-transform: translate3d(0, 150%, 0);
    transform: translate3d(0, 150%, 0);
  }
</style>
