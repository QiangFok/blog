<template>
  <div id="goTop">
    <div class="goTop" :class="[goTopShow ? 'goTopShow' : '']" @click="goTop">
      <i class="glyphicon glyphicon-menu-up"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ToTop",
    data() {
      return {
        scrollTop: "",
        goTopShow: false
      };
    },
    watch: {
      scrollTop(val) {
        if (this.scrollTop > 500) {
          this.goTopShow = true;
        } else {
          this.goTopShow = false;
        }
      }
    },
    methods: {
      handleScroll() {
        this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (this.scrollTop > 500) {
          this.goTopShow = true;
        }
      },
      goTop() {
        let timer = null,
          _that = this;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 250;
            document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
            timer = requestAnimationFrame(fn);
          } else {
            cancelAnimationFrame(timer);
            _that.goTopShow = false;
          }
        });
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
</script>

<style scoped>
  .goTop {
    position: fixed;
    right: -10.9%;
    bottom: 9%;
    width: 30px;
    height: 30px;
    background-color: #ff4572;
    border-radius: 50%;
    cursor: pointer;
    transition: .3s ease-in;
  }

  i {
    top: 7px;
    left: 9px;
    color: #FFF9E9;
  }

  .goTopShow {
    right: 1.9%;
  }

</style>
